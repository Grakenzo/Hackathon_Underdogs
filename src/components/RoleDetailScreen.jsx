import { useState } from 'react';
import TermItem from './TermItem.jsx';
import RequirementList from './RequirementList.jsx';

const TABS = ['The words', 'What you need', 'Get ready'];

// Screen 4. Reads entirely from the role's data file (it-support.json for
// now, via role.data) - nothing here is hardcoded content, only layout.
// Three tabs instead of one long scroll, with the big stat block above them.
export default function RoleDetailScreen({ role, onBack }) {
  const data = role.data;
  const [activeTab, setActiveTab] = useState(1); // "What you need" opens first, matching the prototype
  const [checked, setChecked] = useState(() => data.getReady.map(() => false));

  function toggleChecked(i) {
    setChecked((prev) => prev.map((v, idx) => (idx === i ? !v : v)));
  }

  return (
    <div className="screen role-detail-screen">
      <button className="back" onClick={onBack}>
        ← Back
      </button>

      <header className="rhead">
        <h2>{data.role}</h2>
        <div className="src">{data.collected}</div>
      </header>

      <div className="stat">
        <div className="big">{data.headlineBig}</div>
        <div className="cap">{data.headlineCap}</div>
      </div>

      <div className="tabs">
        {TABS.map((label, i) => (
          <button
            key={label}
            className={`tab${activeTab === i ? ' on' : ''}`}
            onClick={() => setActiveTab(i)}
          >
            {label}
          </button>
        ))}
      </div>

      {activeTab === 0 && (
        <div className="in words-card">
          {data.terms.map((term, i) => (
            <TermItem key={term.term} term={term} defaultOpen={i === 0} />
          ))}
        </div>
      )}

      {activeTab === 1 && (
        <div className="two in">
          <RequirementList title="Must have" items={data.mustHave} adCount={data.adCount} />
          <RequirementList title="Nice to have" items={data.niceToHave} adCount={data.adCount} grey />
        </div>
      )}

      {activeTab === 2 && (
        <div className="in getready-card">
          {data.getReady.map((item, i) => (
            <div key={i} className="chk">
              <div
                className={`box${checked[i] ? ' tick' : ''}`}
                role="checkbox"
                aria-checked={checked[i]}
                tabIndex={0}
                onClick={() => toggleChecked(i)}
                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), toggleChecked(i))}
              />
              <div>
                <div className="top">
                  <span className="nm">{item.item}</span>
                  <span className="cnt g">{item.time}</span>
                </div>
                <div className="nt">{item.why}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="note">Every number here comes from an ad we collected. Nothing is estimated.</div>
    </div>
  );
}
