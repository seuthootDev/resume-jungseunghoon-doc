import { flushSync } from 'react-dom';
import { useResumePreferences } from '../context/ResumePreferencesContext';
import type { Lang } from '../types/resume';
import { COMPENSATION_FIELDS } from './SalarySection';

export function Toolbar() {
  const { lang, mode, setLang, toggleTheme, compensation, setCompensation } =
    useResumePreferences();

  const handleLang = (nextLang: Lang) => setLang(nextLang);

  const handlePrint = () => {
    const next = { ...compensation };
    for (const { key, label } of COMPENSATION_FIELDS) {
      const input = window.prompt(`${label}을(를) 입력하세요 (비워두면 인쇄에서 제외)`, next[key]);
      if (input === null) return;
      next[key] = input.trim();
    }
    // Render the new amounts before the print snapshot is taken.
    flushSync(() => setCompensation(next));
    window.print();
  };

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
      {lang === 'ko' && (
        <button type="button" className="print-button" onClick={handlePrint}>
          인쇄
        </button>
      )}
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
