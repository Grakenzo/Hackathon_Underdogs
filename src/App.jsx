import { useMemo, useState } from 'react';
import { quizQuestions } from './data/quiz.js';
import { roles } from './data/roles.js';
import { scoreRoles } from './data/scoring.js';
import StartScreen from './components/StartScreen.jsx';
import QuizScreen from './components/QuizScreen.jsx';
import SuggestionsScreen from './components/SuggestionsScreen.jsx';
import RoleDetailScreen from './components/RoleDetailScreen.jsx';

// Which screen is showing. No router - just a piece of state, per the brief.
const SCREENS = {
  START: 'start',
  QUIZ: 'quiz',
  SUGGESTIONS: 'suggestions',
  DETAIL: 'detail',
};

export default function App() {
  const [screen, setScreen] = useState(SCREENS.START);
  const [questionIndex, setQuestionIndex] = useState(0);
  // One slot per question, holding the option object the user picked (or
  // null if they haven't reached/answered it yet).
  const [answers, setAnswers] = useState(() => Array(quizQuestions.length).fill(null));
  const [selectedRole, setSelectedRole] = useState(null);

  function startQuiz() {
    setAnswers(Array(quizQuestions.length).fill(null));
    setQuestionIndex(0);
    setScreen(SCREENS.QUIZ);
  }

  function handleAnswer(option) {
    const nextAnswers = [...answers];
    nextAnswers[questionIndex] = option;
    setAnswers(nextAnswers);

    if (questionIndex < quizQuestions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setScreen(SCREENS.SUGGESTIONS);
    }
  }

  function handleBack() {
    if (questionIndex > 0) {
      setQuestionIndex(questionIndex - 1);
    }
  }

  function handleSelectRole(role) {
    if (!role.hasData) return; // guarded again here even though the card is non-clickable
    setSelectedRole(role);
    setScreen(SCREENS.DETAIL);
  }

  function handleBackToSuggestions() {
    setScreen(SCREENS.SUGGESTIONS);
  }

  // Only recompute the top three once we actually reach the suggestions
  // screen - no point scoring on every keystroke of the quiz.
  const topRoles = useMemo(() => {
    if (screen !== SCREENS.SUGGESTIONS) return [];
    return scoreRoles(answers.filter(Boolean), roles);
  }, [screen, answers]);

  return (
    <div className="app">
      {screen === SCREENS.START && (
        <StartScreen onStartQuiz={startQuiz} />
      )}

      {screen === SCREENS.QUIZ && (
        <QuizScreen
          questions={quizQuestions}
          questionIndex={questionIndex}
          selectedOption={answers[questionIndex]}
          onAnswer={handleAnswer}
          onBack={handleBack}
        />
      )}

      {screen === SCREENS.SUGGESTIONS && (
        <SuggestionsScreen
          topRoles={topRoles}
          answers={answers}
          onSelectRole={handleSelectRole}
        />
      )}

      {screen === SCREENS.DETAIL && selectedRole && (
        <RoleDetailScreen role={selectedRole} onBack={handleBackToSuggestions} />
      )}
    </div>
  );
}
