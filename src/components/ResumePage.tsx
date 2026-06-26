import { Toolbar } from './Toolbar';
import { Header } from './Header';
import { ExperienceSection } from './ExperienceSection';
import { SkillsSection } from './SkillsSection';
import { EducationSection } from './EducationSection';
import { CredentialsSection } from './CredentialsSection';
import { LanguageSection } from './LanguageSection';
import { CommunitySection } from './CommunitySection';
import { useDocumentScale } from '../hooks/useDocumentScale';

export function ResumePage() {
  const { scalerRef, documentRef } = useDocumentScale();

  return (
    <>
      <Toolbar />
      <div ref={scalerRef} className="resume-scaler">
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
    </>
  );
}
