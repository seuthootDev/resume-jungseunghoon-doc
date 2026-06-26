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

export function ResumePreferencesProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');
  const [mode, setMode] = useState<ThemeMode>('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang === 'ko' ? 'ko' : 'en');
  }, [lang]);

  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode);
  }, [mode]);

  const setLang = (nextLang: Lang) => setLangState(nextLang);
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
