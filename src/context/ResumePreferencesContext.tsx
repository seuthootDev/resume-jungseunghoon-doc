import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';
import type { Lang, ThemeMode } from '../types/resume';

interface ResumePreferencesContextValue {
  lang: Lang;
  mode: ThemeMode;
  setLang: (lang: Lang) => void;
  toggleTheme: () => void;
}

const ResumePreferencesContext =
  createContext<ResumePreferencesContextValue | null>(null);

function readLangCookie(): Lang | null {
  const match = document.cookie.match(/(?:^|;\s*)lang=(ko|en)/);
  return (match?.[1] as Lang) ?? null;
}

export function ResumePreferencesProvider({ children }: { children: ReactNode }) {
  // `lang` cookie is set either by the visitor's own toggle (see setLang
  // below) or by middleware.ts geo-detecting a Korean visitor on first load.
  const [lang, setLangState] = useState<Lang>(() => readLangCookie() ?? 'en');
  const [mode, setMode] = useState<ThemeMode>('light');

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

  return (
    <ResumePreferencesContext.Provider
      value={{ lang, mode, setLang, toggleTheme }}
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
