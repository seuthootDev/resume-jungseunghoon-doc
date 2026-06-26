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
      <div className="lang-table">
        <div className="lang-row lang-header">
          <span className="lang-name" aria-hidden="true" />
          <span className="lang-col-label">
            <T value={sections.languageLevel} />
          </span>
          <span className="lang-col-label">
            <T value={sections.languageCert} />
          </span>
        </div>
        {languages.map((item) => (
          <div className="lang-row" key={item.name.en}>
            <span className="lang-name">
              <T value={item.name} />
            </span>
            <span className="lang-level">{localized(item.level, lang)}</span>
            <span className="lang-cert">{item.certification ?? ''}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
