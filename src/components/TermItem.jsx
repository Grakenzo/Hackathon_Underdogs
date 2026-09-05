import { useState } from 'react';

// One accordion entry in "The words" tab. Starts open or closed based on
// `defaultOpen`, which RoleDetailScreen sets to true for the first term only.
export default function TermItem({ term, defaultOpen }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`acc${isOpen ? ' open' : ''}`}>
      <button className="acch" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        {term.term}
        <span className="cv">⌄</span>
      </button>
      {isOpen && <div className="accb">{term.plain}</div>}
    </div>
  );
}
