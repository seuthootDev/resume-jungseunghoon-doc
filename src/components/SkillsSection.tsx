import { resumeData } from '../data/resumeData';
import { T } from './T';

export function SkillsSection() {
  const { sections, skills } = resumeData;

  return (
    <section className="section">
      <h2 className="section-title">
        <T value={sections.skills} />
      </h2>
      <div className="skills-grid">
        {skills.map((group) => (
          <div className="skill-group" key={group.title}>
            <h4>{group.title}</h4>
            <div className="tag-list">
              {group.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
