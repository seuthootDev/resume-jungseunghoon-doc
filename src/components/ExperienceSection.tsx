import { resumeData } from '../data/resumeData';
import { T } from './T';

export function ExperienceSection() {
  const { sections, experience } = resumeData;

  return (
    <section className="section">
      <h2 className="section-title">
        <T value={sections.experience} />
      </h2>
      {experience.map((item) => (
        <div className="exp-item" key={item.date + item.company.en}>
          <div className="exp-header">
            <span className="exp-company">
              <T value={item.company} />
            </span>
            <span className="exp-date">{item.date}</span>
          </div>
          <div className="exp-role">
            <T value={item.role} />
          </div>
          {item.subtitle && (
            <p className="sub-title">
              <T value={item.subtitle} />
            </p>
          )}
          <ul className="bullet-list">
            {item.bullets.map((bullet) => (
              <li key={bullet.en}>
                <T value={bullet} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
