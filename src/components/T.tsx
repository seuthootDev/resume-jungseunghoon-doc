import type { LocalizedText } from '../types/resume';
import { useResumePreferences } from '../context/ResumePreferencesContext';

interface TProps {
  value: LocalizedText;
}

export function T({ value }: TProps) {
  const { lang } = useResumePreferences();
  return <>{value[lang]}</>;
}

export function localized(value: LocalizedText | string, lang: 'en' | 'ko'): string {
  return typeof value === 'string' ? value : value[lang];
}
