import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { HomeSection } from '@/sections/HomeSection';
import { MutateSection } from '@/sections/MutateSection';
import { WaveSpawnSection } from '@/sections/WaveSpawnSection';
import { VarsSection } from '@/sections/VarsSection';
import { MessagesSection } from '@/sections/MessagesSection';
import { PracticeSection } from '@/sections/PracticeSection';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'home':
        return <HomeSection onSectionChange={setCurrentSection} />;
      case 'mutate':
        return <MutateSection />;
      case 'wavespawn':
        return <WaveSpawnSection />;
      case 'vars':
        return <VarsSection />;
      case 'messages':
        return <MessagesSection />;
      case 'practice':
        return <PracticeSection />;
      default:
        return <HomeSection onSectionChange={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentSection={currentSection} onSectionChange={setCurrentSection} />
      
      <main className="pt-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderSection()}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                <span className="text-background font-bold text-sm">CD2</span>
              </div>
              <span className="text-sm text-muted-foreground">
                深岩银河自定义难度Mod教学
              </span>
            </div>
            <div className="text-sm text-muted-foreground">
              基于 <span className="text-primary">星夜mod</span>  by 超蓝大人驾到
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
