// One column of "What you really need" (either Must have or Nice to have).
// Items are sorted highest count first without mutating the original data
// from it-support.json.
export default function RequirementList({ title, items, adCount }) {
  const sorted = [...items].sort((a, b) => b.count - a.count);

  return (
    <div className="requirement-list">
      <h4 className="requirement-list__title">{title}</h4>
      <ul className="requirement-list__items">
        {sorted.map((item, i) => (
          <li key={i} className="requirement-item">
            <div className="requirement-item__top">
              <span className="requirement-item__text">{item.item}</span>
              <span className="requirement-item__badge">
                {item.count} of {adCount} ads
              </span>
            </div>
            <p className="requirement-item__note">{item.note}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
