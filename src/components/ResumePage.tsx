import { Toolbar } from './Toolbar';
import { Header } from './Header';
import { ExperienceSection } from './ExperienceSection';
import { SkillsSection } from './SkillsSection';
import { EducationSection } from './EducationSection';
import { CredentialsSection } from './CredentialsSection';
import { LanguageSection } from './LanguageSection';
import { CommunitySection } from './CommunitySection';

export function ResumePage() {
  return (
    <>
      <Toolbar />
      <div className="page">
        <Header />
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <CredentialsSection />
        <LanguageSection />
        <CommunitySection />
      </div>
    </>
  );
}
