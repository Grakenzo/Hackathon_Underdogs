import { getReasoningForRole } from '../data/scoring.js';

// One suggested role on the Suggestions screen. The reasoning line always
// quotes an answer the user actually picked - never invented text. Cards
// for roles without collected data show a label instead of being tappable.
export default function RoleCard({ role, answers, onSelect }) {
  const reasoning = getReasoningForRole(role, answers);

  const content = (
    <>
      <h3 className="role-card__name">{role.name}</h3>
      {reasoning ? (
        <p className="role-card__reasoning">
          You picked "{reasoning.text}", so {reasoning.tag} roles came up.
        </p>
      ) : (
        <p className="role-card__reasoning">A solid match for how you answered.</p>
      )}
      {!role.hasData && (
        <div className="role-card__status">
          <span className="role-card__status-label">Not mapped from real job ads yet</span>
          <span className="role-card__status-hint">
            Look for a role marked ready below for the full breakdown.
          </span>
        </div>
      )}
    </>
  );

  if (!role.hasData) {
    return (
      <div className="role-card role-card--disabled" aria-disabled="true">
        {content}
      </div>
    );
  }

  return (
    <button className="role-card role-card--enabled" onClick={() => onSelect(role)}>
      {content}
    </button>
  );
}
