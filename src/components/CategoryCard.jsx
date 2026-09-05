// One category tile on the Start screen. Enabled categories are clickable
// and kick off the quiz; disabled ones show a "Soon" label and don't
// respond to clicks at all (no onClick wired up, not just styled to look
// disabled).
export default function CategoryCard({ category, onClick }) {
  const { name, enabled } = category;

  if (!enabled) {
    return (
      <div className="cat off" aria-disabled="true">
        <span className="nm">{name}</span>
        <span className="st">Soon</span>
      </div>
    );
  }

  return (
    <button className="cat on" onClick={onClick}>
      <span className="nm">{name}</span>
      <span className="st">Ready</span>
    </button>
  );
}
