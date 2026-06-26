import { resumeData } from '../data/resumeData';
import { localized, T } from './T';
import { useResumePreferences } from '../context/ResumePreferencesContext';

export function CommunitySection() {
  const { sections, community } = resumeData;
  const { lang } = useResumePreferences();

  return (
    <section className="section">
      <h2 className="section-title">
        <T value={sections.community} />
      </h2>
      {community.map((item) => (
        <div className="vol-item" key={item.name.en}>
          <div>
            <div className="vol-name">
              <T value={item.name} />
            </div>
            <div className="vol-org">
              <T value={item.organization} />
            </div>
          </div>
          <div className="vol-hours">{localized(item.hours, lang)}</div>
        </div>
      ))}
    </section>
  );
}
