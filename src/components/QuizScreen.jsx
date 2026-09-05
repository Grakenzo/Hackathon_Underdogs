import { useMemo, useState } from 'react';

// Reads the media query fresh each time - the reaction delay only needs to
// know this once, at the moment an option is picked.
function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

const REACTION_MS = 1100;

// Screen 2. One question per screen, four options, a progress indicator,
// and a back button that steps to the previous question without losing
// the answer that was already given there. Picking an option shows a
// full-screen reaction overlay for ~1.1s before advancing.
export default function QuizScreen({ questions, questionIndex, selectedOption, onAnswer, onBack }) {
  const question = questions[questionIndex];
  const progress = ((questionIndex + 1) / questions.length) * 100;

  // The option currently playing its reaction, or null the rest of the time.
  const [reactingOption, setReactingOption] = useState(null);

  // Five sparks with randomised positions, recomputed only when a new
  // reaction starts (not on every re-render).
  const sparks = useMemo(() => {
    if (!reactingOption) return [];
    return Array.from({ length: 5 }, (_, i) => ({
      left: 18 + Math.random() * 64,
      top: 48 + Math.random() * 14,
      delay: i * 90,
    }));
  }, [reactingOption]);

  function handlePick(option) {
    if (reactingOption) return; // ignore clicks while a reaction is already playing

    if (prefersReducedMotion()) {
      onAnswer(option); // no overlay to sit through - just advance
      return;
    }

    setReactingOption(option);
    setTimeout(() => {
      setReactingOption(null);
      onAnswer(option);
    }, REACTION_MS);
  }

  // While reacting, show the just-picked option as selected immediately -
  // the parent won't record it until the reaction finishes.
  const displaySelected = reactingOption || selectedOption;

  return (
    <div className="screen quiz-screen">
      <div className="quiz-screen__header">
        {questionIndex > 0 ? (
          <button className="back quiz-screen__back" onClick={onBack}>
            ← Back
          </button>
        ) : (
          <span className="quiz-screen__back-spacer" />
        )}
        <span className="quiz-screen__progress-label">
          Question {questionIndex + 1} of {questions.length}
        </span>
      </div>

      <div className="progress-bar" role="progressbar" aria-valuenow={questionIndex + 1} aria-valuemin={1} aria-valuemax={questions.length}>
        <div className="progress-bar__fill" style={{ width: `${progress}%` }} />
      </div>

      <h2 className="quiz-screen__question">{question.text}</h2>

      {/* Keyed by question so options remount (and re-stagger in) on every question change */}
      <div className="quiz-screen__options" key={questionIndex}>
        {question.options.map((option, i) => {
          const isSelected = option === displaySelected;
          return (
            <button
              key={option.id}
              className={`option-card${isSelected ? ' option-card--selected' : ''}`}
              style={{ animationDelay: `${i * 60}ms` }}
              disabled={!!reactingOption}
              onClick={() => handlePick(option)}
            >
              <span className="option-card__emoji">{option.emoji}</span>
              <span className="option-card__text">{option.text}</span>
            </button>
          );
        })}
      </div>

      {reactingOption && (
        <div className="reaction" aria-live="polite">
          <div className="reaction__glyph">{reactingOption.reaction.glyph}</div>
          <div className="reaction__line">{reactingOption.reaction.line}</div>
          {sparks.map((spark, i) => (
            <span
              key={i}
              className="reaction__spark"
              style={{ left: `${spark.left}%`, top: `${spark.top}%`, animationDelay: `${spark.delay}ms` }}
            >
              {reactingOption.reaction.glyph}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
