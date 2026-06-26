import { useResumePreferences } from '../context/ResumePreferencesContext';
import type { Lang } from '../types/resume';

export function Toolbar() {
  const { lang, mode, setLang, toggleTheme } = useResumePreferences();

  const handleLang = (nextLang: Lang) => setLang(nextLang);

  return (
    <div className="toolbar">
      <div className="toggle-group" role="group" aria-label="Language">
        <button
          type="button"
          className={lang === 'en' ? 'active' : undefined}
          onClick={() => handleLang('en')}
        >
          EN
        </button>
        <button
          type="button"
          className={lang === 'ko' ? 'active' : undefined}
          onClick={() => handleLang('ko')}
        >
          한국어
        </button>
      </div>
      <button
        type="button"
        className="icon-toggle"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
      >
        {mode === 'light' ? '🌙' : '☀️'}
      </button>
    </div>
  );
}
