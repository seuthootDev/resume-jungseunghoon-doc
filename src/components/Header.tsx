import { resumeData } from '../data/resumeData';
import { useResumePreferences } from '../context/ResumePreferencesContext';
import { T } from './T';

export function Header() {
  const { profile } = resumeData;
  const { lang } = useResumePreferences();
  const altName = lang === 'en' ? profile.name.ko : profile.name.en;

  const photoAlt = lang === 'en' ? `${profile.name.en} profile photo` : `${profile.name.ko} 프로필 사진`;

  return (
    <header className="header">
      <div className="header-top">
        <div className="profile-photo-wrap">
          <img
            className="profile-photo"
            src={profile.photo}
            alt={photoAlt}
            width={112}
            height={112}
          />
        </div>
        <div className="header-body">
          <div className="name-block">
            <h1>
              <T value={profile.name} />
              <span className="name-alt">{altName}</span>
            </h1>
            <p className="subtitle">
              <T value={profile.subtitle} />
            </p>
          </div>
          <div className="contact-block">
            <div>
              ✉{' '}
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div>
              <T value={profile.location} />
            </div>
            {profile.links.map((link) => (
              <div key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className="profile-summary">
        <T value={profile.summary} />
      </p>
    </header>
  );
}
