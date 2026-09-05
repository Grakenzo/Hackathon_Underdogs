import { categories } from '../data/categories.js';
import CategoryCard from './CategoryCard.jsx';

// Screen 1. Heading, one big CTA button, and six category cards
// underneath - only Technology actually goes anywhere.
export default function StartScreen({ onStartQuiz }) {
  return (
    <div className="screen start-screen">
      <h1 className="hero">Not sure what you're aiming for?</h1>
      <p className="lede">
        Six quick questions. Then we'll show you what Brisbane employers actually ask for.
      </p>

      <button className="cta" onClick={onStartQuiz}>
        Let's find out
      </button>

      <div className="cats">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            category={category}
            onClick={category.enabled ? onStartQuiz : undefined}
          />
        ))}
      </div>
    </div>
  );
}
