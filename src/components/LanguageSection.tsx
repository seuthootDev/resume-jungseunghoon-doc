import { resumeData } from '../data/resumeData';
import { localized, T } from './T';
import { useResumePreferences } from '../context/ResumePreferencesContext';

export function LanguageSection() {
  const { sections, languages } = resumeData;
  const { lang } = useResumePreferences();

  return (
    <section className="section">
      <h2 className="section-title">
        <T value={sections.language} />
      </h2>
      {languages.map((item) => (
        <div className="lang-row" key={item.name.en}>
          <span className="lang-name">
            <T value={item.name} />
          </span>
          <span className="lang-badge">{localized(item.badge, lang)}</span>
          {item.detail && <span className="lang-detail">{item.detail}</span>}
        </div>
      ))}
    </section>
  );
}
