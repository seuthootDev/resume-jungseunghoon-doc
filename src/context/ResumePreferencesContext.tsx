import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import type { Lang, ThemeMode } from '../types/resume';
import { resumeData } from '../data/resumeData';

interface ResumePreferencesContextValue {
  lang: Lang;
  mode: ThemeMode;
  setLang: (lang: Lang) => void;
  toggleTheme: () => void;
  salary: string;
  setSalary: (salary: string) => void;
}

const ResumePreferencesContext =
  createContext<ResumePreferencesContextValue | null>(null);

const SALARY_KEY = 'desiredSalary';

function readSalary(): string {
  try {
    return localStorage.getItem(SALARY_KEY) ?? resumeData.desiredSalary;
  } catch {
    return resumeData.desiredSalary;
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
  const [salary, setSalaryState] = useState<string>(readSalary);

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
  const setSalary = (nextSalary: string) => {
    setSalaryState(nextSalary);
    // Remember the last amount so the next print (or a plain Ctrl+P) reuses it.
    try {
      localStorage.setItem(SALARY_KEY, nextSalary);
    } catch {
      // Storage unavailable (private mode etc.) — keep it for this session only.
    }
  };

  return (
    <ResumePreferencesContext.Provider
      value={{ lang, mode, setLang, toggleTheme, salary, setSalary }}
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
