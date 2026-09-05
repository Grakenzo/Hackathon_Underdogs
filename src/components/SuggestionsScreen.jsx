import RoleCard from './RoleCard.jsx';

// Screen 3. Shows the top three roles the quiz scoring landed on, each with
// a line of reasoning quoting the user's own answers. The disclaimer at the
// top is load-bearing for the pitch - this suggests, it doesn't decide.
export default function SuggestionsScreen({ topRoles, answers, onSelectRole }) {
  return (
    <div className="screen suggestions-screen">
      <div className="notice">
        These are suggestions to explore, not predictions.
      </div>

      <h2 className="suggestions-screen__heading">Roles worth a look</h2>

      <div className="suggestions-screen__list">
        {topRoles.map(({ role }) => (
          <RoleCard key={role.id} role={role} answers={answers} onSelect={onSelectRole} />
        ))}
      </div>
    </div>
  );
}
