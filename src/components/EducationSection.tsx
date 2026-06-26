import { resumeData } from '../data/resumeData';
import { T } from './T';

export function EducationSection() {
  const { sections, education } = resumeData;

  return (
    <section className="section">
      <h2 className="section-title">
        <T value={sections.education} />
      </h2>
      {education.map((item) => (
        <div className="edu-item" key={item.date + item.school.en}>
          <div className="edu-header">
            <div>
              <div className="edu-school">
                <T value={item.school} />
              </div>
              <div className="edu-major">
                <T value={item.major} />
              </div>
            </div>
            <span className="exp-date">{item.date}</span>
          </div>
          <p className="edu-desc">
            <T value={item.description} />
          </p>
        </div>
      ))}
    </section>
  );
}
