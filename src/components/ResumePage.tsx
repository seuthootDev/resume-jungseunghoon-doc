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
  const { documentRef, scale, scaledHeight } = useDocumentScale();
  const isScaled = scale < 1;

  return (
    <>
      <Toolbar />
      <div
        className="resume-scaler"
        style={isScaled && scaledHeight ? { height: scaledHeight } : undefined}
      >
        <div
          ref={documentRef}
          className="resume-document"
          style={
            isScaled
              ? { transform: `scale(${scale})` }
              : undefined
          }
        >
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
