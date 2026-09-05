// One column of "What you need" (either Must have or Nice to have).
// Items are sorted highest count first without mutating the original data
// from it-support.json. `grey` switches the count badge to the neutral
// style used for the less load-bearing column.
export default function RequirementList({ title, items, adCount, grey }) {
  const sorted = [...items].sort((a, b) => b.count - a.count);

  return (
    <div>
      <div className="colh">{title}</div>
      {sorted.map((item, i) => (
        <div key={i} className="item">
          <div className="top">
            <span className="nm">{item.item}</span>
            <span className={`cnt${grey ? ' g' : ''}`}>
              {item.count} of {adCount}
            </span>
          </div>
          <div className="nt">{item.note}</div>
        </div>
      ))}
    </div>
  );
}
