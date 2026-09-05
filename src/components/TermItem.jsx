import { useState } from 'react';

// One entry in "What the words mean". Collapsible - starts expanded or
// collapsed based on `defaultOpen`, which RoleDetailScreen sets to true
// for the first three terms only.
export default function TermItem({ term, defaultOpen }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="term-item">
      <button
        className="term-item__toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <strong className="term-item__term">{term.term}</strong>
        <span className="term-item__chevron">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <p className="term-item__plain">{term.plain}</p>}
    </div>
  );
}
