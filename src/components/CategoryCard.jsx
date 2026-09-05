// One category tile on the Start screen. Enabled categories are clickable
// and kick off the quiz; disabled ones show a "coming soon" label and
// don't respond to clicks at all (no onClick wired up, not just styled
// to look disabled).
export default function CategoryCard({ category, onClick }) {
  const { name, enabled } = category;

  if (!enabled) {
    return (
      <div className="category-card category-card--disabled" aria-disabled="true">
        <span className="category-card__name">{name}</span>
        <span className="category-card__badge">Coming soon</span>
      </div>
    );
  }

  return (
    <button className="category-card category-card--enabled" onClick={onClick}>
      <span className="category-card__name">{name}</span>
    </button>
  );
}
