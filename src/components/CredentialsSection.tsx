import { resumeData } from '../data/resumeData';
import { T } from './T';

export function CredentialsSection() {
  const { sections, credentials } = resumeData;

  return (
    <section className="section">
      <h2 className="section-title">
        <T value={sections.credentials} />
      </h2>
      <div className="cred-grid">
        {credentials.map((item) => (
          <div className="cred-item" key={item.date + item.name.en}>
            <div className="cred-name">
              <T value={item.name} />
            </div>
            <div className="cred-issuer">
              <T value={item.issuer} />
            </div>
            <div className="cred-date">{item.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
