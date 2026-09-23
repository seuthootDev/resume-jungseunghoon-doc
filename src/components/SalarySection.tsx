import { useResumePreferences } from '../context/ResumePreferencesContext';

export function SalarySection() {
  const { lang, salary } = useResumePreferences();

  if (lang !== 'ko' || !salary) return null;

  return (
    <section className="section print-only">
      <h2 className="section-title">희망연봉</h2>
      <div className="vol-item">
        <div className="vol-name">{salary}</div>
      </div>
    </section>
  );
}
