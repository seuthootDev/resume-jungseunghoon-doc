import { useResumePreferences } from '../context/ResumePreferencesContext';
import type { Compensation } from '../types/resume';

export const COMPENSATION_FIELDS: { key: keyof Compensation; label: string }[] = [
  { key: 'currentSalary', label: '현재연봉' },
  { key: 'bonus', label: '성과금' },
  { key: 'benefits', label: '기타 복지' },
  { key: 'desiredSalary', label: '희망연봉' },
];

export function SalarySection() {
  const { lang, compensation } = useResumePreferences();

  const rows = COMPENSATION_FIELDS.filter(({ key }) => compensation[key]);

  if (lang !== 'ko' || rows.length === 0) return null;

  return (
    <section className="section print-only">
      <h2 className="section-title">연봉</h2>
      {rows.map(({ key, label }) => (
        <div className="vol-item" key={key}>
          <div className="vol-name">
            {label} {compensation[key]}
          </div>
        </div>
      ))}
    </section>
  );
}
