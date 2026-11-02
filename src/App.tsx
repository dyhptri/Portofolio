import { DrawingLoader } from './components/DrawingLoader';
import { MilaNavbar } from './components/MilaNavbar';
import { MilaHero } from './components/MilaHero';
import { MilaWork } from './components/MilaWork';
import { MilaAbout } from './components/MilaAbout';
import { MilaExperience } from './components/MilaExperience';
import { MilaServices } from './components/MilaServices';
import { MilaClients } from './components/MilaClients';
import { MilaFooter } from './components/MilaFooter';

export function App() {
  return (
    <div className="min-h-screen bg-[#F6F3EC] text-[#161616] antialiased selection:bg-[#F6C945] selection:text-[#161616]">
      {/* 2.4s Drawing Tools Session Loader */}
      <DrawingLoader />

      {/* Sticky Main Navigation */}
      <MilaNavbar />

      <main>
        {/* Intro / Hero Section */}
        <MilaHero />

        {/* About Section */}
        <MilaAbout />

        {/* Selected Work Section (SORAI, BuildMatch, InLET Polinema) */}
        <MilaWork />

        {/* Experience & Education Section (HMTI Polinema, Prastudi JTI, Polinema GPA 3.78) */}
        <MilaExperience />

        {/* Services & Skills Section */}
        <MilaServices />

        {/* Technologies & Tools Marquee */}
        <MilaClients />
      </main>

      {/* Shared Footer */}
      <MilaFooter />
    </div>
  );
}

export default App;
