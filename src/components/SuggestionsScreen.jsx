import RoleCard from './RoleCard.jsx';

// Screen 3. Shows the top three roles the quiz scoring landed on, each with
// a line quoting the user's own answers. The subheading is load-bearing
// for the pitch - this suggests, it doesn't decide.
export default function SuggestionsScreen({ topRoles, answers, onSelectRole }) {
  return (
    <div className="screen suggestions-screen">
      <div className="info">
        <h2>Three roles worth a look</h2>
        <p>Suggestions to explore, not predictions. You decide what fits.</p>
      </div>

      <div className="rule" />

      <div className="three">
        {topRoles.map(({ role }, i) => (
          <RoleCard
            key={role.id}
            role={role}
            answers={answers}
            onSelect={onSelectRole}
            style={{ animationDelay: `${i * 80}ms` }}
          />
        ))}
      </div>

      <div className="foot">Only Technology roles have data so far.</div>
    </div>
  );
}
