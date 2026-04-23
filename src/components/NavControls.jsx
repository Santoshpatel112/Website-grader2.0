import { useState, useRef, useEffect } from "react";
import { useTheme } from "../Context/ThemeContext";
import { useLanguage } from "../Context/LanguageContext";

const NavControls = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, languageNames } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="flex items-center gap-2">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="nav-control-btn theme-toggle-btn"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        <div className="theme-icon-wrapper">
          {theme === "dark" ? (
            <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          ) : (
            <svg className="theme-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          )}
        </div>
      </button>

      {/* Language Selector */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setLangOpen(!langOpen)}
          className="nav-control-btn lang-btn"
          aria-label="Select language"
        >
          <span className="lang-flag">{languageNames[language]?.flag}</span>
          <span className="lang-code hidden sm:inline">{language.toUpperCase()}</span>
          <svg className={`lang-chevron ${langOpen ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {langOpen && (
          <div className="lang-dropdown">
            {Object.entries(languageNames).map(([code, { name, flag }]) => (
              <button
                key={code}
                onClick={() => { setLanguage(code); setLangOpen(false); }}
                className={`lang-option ${language === code ? "lang-option-active" : ""}`}
              >
                <span className="text-base">{flag}</span>
                <span className="text-sm font-medium">{name}</span>
                {language === code && (
                  <svg className="w-4 h-4 ml-auto text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NavControls;
