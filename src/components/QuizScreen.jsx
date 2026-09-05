// Screen 2. One question per screen, four options, a progress indicator,
// and a back button that steps to the previous question without losing
// the answer that was already given there.
export default function QuizScreen({ questions, questionIndex, selectedOption, onAnswer, onBack }) {
  const question = questions[questionIndex];
  const progress = ((questionIndex + 1) / questions.length) * 100;

  return (
    <div className="screen quiz-screen">
      <div className="quiz-screen__header">
        {questionIndex > 0 ? (
          <button className="btn btn--text quiz-screen__back" onClick={onBack}>
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

      <h2 className="quiz-screen__question">{question.question}</h2>

      <div className="quiz-screen__options">
        {question.options.map((option, i) => {
          const isSelected = selectedOption === option;
          return (
            <button
              key={i}
              className={`option-card${isSelected ? ' option-card--selected' : ''}`}
              onClick={() => onAnswer(option)}
            >
              {option.text}
            </button>
          );
        })}
      </div>
    </div>
  );
}
