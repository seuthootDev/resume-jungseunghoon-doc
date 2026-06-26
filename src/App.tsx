import { ResumePreferencesProvider } from './context/ResumePreferencesContext';
import { ResumePage } from './components/ResumePage';

export default function App() {
  return (
    <ResumePreferencesProvider>
      <ResumePage />
    </ResumePreferencesProvider>
  );
}
