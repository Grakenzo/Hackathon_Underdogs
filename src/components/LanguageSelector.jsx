import { useState } from 'react';

// Languages shown in the dropdown. Display only - there's no translation
// wired up, so picking one does nothing but close the dropdown again.
const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'zh', label: '中文' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'id', label: 'Bahasa Indonesia' },
  { code: 'vi', label: 'Tiếng Việt' },
  { code: 'ko', label: '한국어' },
];

// Language bar in the top-right corner of the app. Purely cosmetic for
// now: always shows "EN", and English always keeps the tick no matter
// what's clicked in the dropdown.
export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="lang">
        <button
          className="lang__button"
          onClick={() => setIsOpen((open) => !open)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className="lang__globe" aria-hidden="true">
            🌐
          </span>
          <span>EN</span>
        </button>

        {isOpen && (
          <ul className="lang__menu" role="listbox">
            {LANGUAGES.map((lang) => (
              <li key={lang.code}>
                <button
                  className="lang__option"
                  role="option"
                  aria-selected={lang.code === 'en'}
                  onClick={() => setIsOpen(false)}
                >
                  <span>{lang.label}</span>
                  {lang.code === 'en' && (
                    <span className="lang__tick" aria-hidden="true">
                      ✓
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {isOpen && <div className="lang__overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
}
