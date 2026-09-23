import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import type { Compensation, Lang, ThemeMode } from '../types/resume';
import { resumeData } from '../data/resumeData';

interface ResumePreferencesContextValue {
  lang: Lang;
  mode: ThemeMode;
  setLang: (lang: Lang) => void;
  toggleTheme: () => void;
  compensation: Compensation;
  setCompensation: (compensation: Compensation) => void;
}

const ResumePreferencesContext =
  createContext<ResumePreferencesContextValue | null>(null);

const COMPENSATION_KEY = 'compensation';

function readCompensation(): Compensation {
  try {
    const saved = localStorage.getItem(COMPENSATION_KEY);
    return saved ? { ...resumeData.compensation, ...JSON.parse(saved) } : resumeData.compensation;
  } catch {
    return resumeData.compensation;
  }
}

function readLangCookie(): Lang | null {
  const match = document.cookie.match(/(?:^|;\s*)lang=(ko|en)/);
  return (match?.[1] as Lang) ?? null;
}

export function ResumePreferencesProvider({ children }: { children: ReactNode }) {
  // `lang` cookie is set either by the visitor's own toggle (see setLang
  // below) or by middleware.ts geo-detecting a Korean visitor on first load.
  const [lang, setLangState] = useState<Lang>(() => readLangCookie() ?? 'en');
  const [mode, setMode] = useState<ThemeMode>('light');
  const [compensation, setCompensationState] = useState<Compensation>(readCompensation);

  useEffect(() => {
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'ko' ? 'ko' : 'en');
  }, [lang]);

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode);
  }, [mode]);

  const setLang = (nextLang: Lang) => {
    setLangState(nextLang);
    // Persist the visitor's explicit choice so it wins over geo-detection
    // on later visits.
    document.cookie = `lang=${nextLang}; Path=/; Max-Age=31536000; SameSite=Lax`;
  };
  const toggleTheme = () =>
    setMode((current) => (current === 'light' ? 'dark' : 'light'));
  const setCompensation = (nextCompensation: Compensation) => {
    setCompensationState(nextCompensation);
    // Remember the last amounts so the next print (or a plain Ctrl+P) reuses them.
    try {
      localStorage.setItem(COMPENSATION_KEY, JSON.stringify(nextCompensation));
    } catch {
      // Storage unavailable (private mode etc.) — keep it for this session only.
    }
  };

  return (
    <ResumePreferencesContext.Provider
      value={{
        lang,
        mode,
        setLang,
        toggleTheme,
        compensation,
        setCompensation,
      }}
    >
      {children}
    </ResumePreferencesContext.Provider>
  );
}

export function useResumePreferences() {
  const context = useContext(ResumePreferencesContext);
  if (!context) {
    throw new Error('useResumePreferences must be used within ResumePreferencesProvider');
  }
  return context;
}
