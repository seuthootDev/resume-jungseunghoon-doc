import { resumeData } from '../data/resumeData';
import { useResumePreferences } from '../context/ResumePreferencesContext';
import { T } from './T';

const ICONS: Record<string, string> = {
  mail: 'M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm0 2 8 6 8-6',
  pin: 'M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z',
  web: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm-9 9h18M12 3c2.5 2.5 3.5 5.5 3.5 9s-1 6.5-3.5 9c-2.5-2.5-3.5-5.5-3.5-9s1-6.5 3.5-9z',
  github: 'M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21',
  linkedin: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z',
};

function Icon({ name }: { name: string }) {
  return (
    <svg
      className="contact-icon"
      viewBox="0 0 24 24"
      width={13}
      height={13}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={ICONS[name]} />
    </svg>
  );
}

const displayUrl = (href: string) => href.replace(/^https?:\/\//, '').replace(/\/$/, '');

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
              <Icon name="mail" />
              <a href={`mailto:${profile.email}`} title={profile.email}>
                <span className="screen-label">Email</span>
                <span className="print-url">{profile.email}</span>
              </a>
            </div>
            <div>
              <Icon name="pin" />
              <T value={profile.location} />
            </div>
            {profile.links.map((link) => (
              <div key={link.href}>
                <Icon name={link.icon} />
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  title={displayUrl(link.href)}
                >
                  <span className="screen-label">{link.label}</span>
                  <span className="print-url">{displayUrl(link.href)}</span>
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
