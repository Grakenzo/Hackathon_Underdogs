import { categories } from '../data/categories.js';
import CategoryCard from './CategoryCard.jsx';

// Screen 1. Heading, one big "I don't know what to do" button, and six
// category cards underneath - only Technology actually goes anywhere.
export default function StartScreen({ onStartQuiz }) {
  return (
    <div className="screen start-screen">
      <h1 className="start-screen__heading">Pathfinder</h1>
      <p className="start-screen__subheading">
        Not sure what job to aim for? Let's narrow it down.
      </p>

      <button className="btn btn--primary start-screen__cta" onClick={onStartQuiz}>
        I don't know what to do
      </button>

      <p className="start-screen__or">or pick an area you're curious about</p>

      <div className="category-grid">
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
