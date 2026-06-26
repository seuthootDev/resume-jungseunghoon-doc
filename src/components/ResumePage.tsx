import { Toolbar } from './Toolbar';
import { Header } from './Header';
import { ExperienceSection } from './ExperienceSection';
import { SkillsSection } from './SkillsSection';
import { EducationSection } from './EducationSection';
import { CredentialsSection } from './CredentialsSection';
import { LanguageSection } from './LanguageSection';
import { CommunitySection } from './CommunitySection';
import { useResumeScale } from '../hooks/useResumeScale';

export function ResumePage() {
  const { scaleBoxRef, documentRef } = useResumeScale();

  return (
    <>
      <Toolbar />
      <div className="resume-viewport">
        <div ref={scaleBoxRef} className="resume-scale-box">
          <div ref={documentRef} className="resume-document">
            <div className="page">
              <Header />
              <ExperienceSection />
              <SkillsSection />
              <EducationSection />
              <CredentialsSection />
              <LanguageSection />
              <CommunitySection />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
