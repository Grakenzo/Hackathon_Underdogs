import TermItem from './TermItem.jsx';
import RequirementList from './RequirementList.jsx';

// Screen 4. Reads entirely from the role's data file (it-support.json for
// now, via role.data) - nothing here is hardcoded content, only layout.
export default function RoleDetailScreen({ role, onBack }) {
  const data = role.data;

  return (
    <div className="screen role-detail-screen">
      <button className="btn btn--text role-detail-screen__back" onClick={onBack}>
        ← Back to suggestions
      </button>

      <header className="role-detail-screen__header">
        <h2 className="role-detail-screen__name">{role.name}</h2>
        <p className="role-detail-screen__subtitle">
          Based on {data.adCount} real {data.location} job ads
        </p>
        <p className="role-detail-screen__collected">{data.collected}</p>
      </header>

      <div className="callout">{data.headline}</div>

      <section className="role-detail-section">
        <h3 className="role-detail-section__title">What the words mean</h3>
        <div className="term-list">
          {data.terms.map((term, i) => (
            <TermItem key={term.term} term={term} defaultOpen={i < 3} />
          ))}
        </div>
      </section>

      <section className="role-detail-section">
        <h3 className="role-detail-section__title">What you really need</h3>
        <div className="requirement-columns">
          <RequirementList title="Must have" items={data.mustHave} adCount={data.adCount} />
          <RequirementList title="Nice to have" items={data.niceToHave} adCount={data.adCount} />
        </div>
      </section>

      <section className="role-detail-section">
        <h3 className="role-detail-section__title">What to get ready</h3>
        <ul className="get-ready-list">
          {data.getReady.map((item, i) => (
            <li key={i} className="get-ready-item">
              <div className="get-ready-item__top">
                <span className="get-ready-item__text">{item.item}</span>
                <span className="get-ready-item__badge">{item.time}</span>
              </div>
              <p className="get-ready-item__why">{item.why}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
