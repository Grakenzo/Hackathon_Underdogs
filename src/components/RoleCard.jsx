import { reasonFor } from '../data/scoring.js';

// One suggested role on the Suggestions screen. The "why" line always
// quotes an answer the user actually picked - never invented text. Cards
// for roles without collected data show "Coming soon" instead of being
// tappable.
export default function RoleCard({ role, answers, onSelect, style }) {
  const why = reasonFor(role, answers.filter(Boolean));

  const content = (
    <>
      <h3 className="job__name">{role.name}</h3>
      <div className="job__why">
        You picked <b>"{why ? why.text : ''}"</b>
      </div>
      {role.hasData ? (
        <div className="job__go">See requirements →</div>
      ) : (
        <div className="job__soon">Coming soon</div>
      )}
    </>
  );

  if (!role.hasData) {
    return (
      <div className="job off" style={style} aria-disabled="true">
        {content}
      </div>
    );
  }

  return (
    <button className="job lead" style={style} onClick={() => onSelect(role)}>
      {content}
    </button>
  );
}
