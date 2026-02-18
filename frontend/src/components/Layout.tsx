import { ReactNode, useState } from 'react';
import { SECTIONS } from '../constants';

export function Layout({ children }: { children: ReactNode }) {
  const [active, setActive] = useState('model');

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Header - Tropical, playful design */}
      <header className="bg-gradient-hero text-white relative overflow-hidden">
        {/* Decorative background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-accent rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Text content */}
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-accent text-text rounded-full font-bold text-sm uppercase tracking-wider">
                📊 Economic Impact Analysis
              </div>

              <h1 className="text-6xl md:text-8xl font-display font-black mb-6 leading-none">
                <span className="text-accent drop-shadow-lg">BAD</span>
                <br />
                <span className="text-white drop-shadow-lg">BUNNY</span>
              </h1>

              <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed font-medium">
                Academic analysis of the economic impact of cultural events using <strong className="text-accent">verified data</strong> and <strong className="text-accent">peer-reviewed methodology</strong>
              </p>

              {/* Navigation - Bold pill style */}
              <nav className="flex flex-wrap gap-3">
                {SECTIONS.map(s => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-200 ${
                      active === s.id
                        ? 'bg-accent text-text shadow-bold hover:shadow-bold-hover transform hover:-translate-y-1'
                        : 'bg-white/20 text-white hover:bg-white/30 border-2 border-white/30'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Right side - Graphic */}
            <div className="hidden md:flex justify-center items-center">
              <div className="relative">
                <img
                  src="/puerto_rico_image_frog.jpg"
                  alt="Puerto Rico 2025"
                  className="w-80 h-auto drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wave decoration at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 48h1440V0s-187.5 48-360 48S720 0 720 0 532.5 48 360 48 0 0 0 0v48z" fill="#eeede8"/>
          </svg>
        </div>
      </header>

      {/* Disclaimer */}
      <div className="bg-[#FFF8F0] border-l-4 border-primary">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-start gap-3">
            <span className="text-primary font-bold text-lg mt-0.5">i</span>
            <div>
              <p className="font-bold text-sm">Independent Research Project &mdash; Not Affiliated with Bad Bunny</p>
                  <p className="text-sm text-[#7F8C8D] mt-1">
                  This dashboard is built as side-project for <strong>educational and analytical purposes only</strong>. It is not directly linked to any officials.<br />
                  Data quality is indicated with 🟢 Verified, 🟡 Estimated, or 🔴 Unknown badges.
                  </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 py-10 flex flex-col gap-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-white/80">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-bold uppercase text-xs tracking-wider mb-3 text-white">ABOUT</h4>
              <p className="text-white/70 leading-relaxed">
                Academic analysis of the economic impact of Bad Bunny's Puerto Rico residency (2022) and DeBi TiRaR MaS fOtOs (DTMF) World Tour using peer-reviewed methodology and verified data sources.
              </p>
            </div>
            <div>
              <h4 className="font-bold uppercase text-xs tracking-wider mb-3 text-white">DATA SOURCES</h4>
              <ul className="text-white/70 space-y-1">
                <li><a href="https://www.billboard.com/pro/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline-offset-2 hover:underline">Billboard Boxscore</a></li>
                <li><a href="https://www.theguardian.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline-offset-2 hover:underline">The Guardian</a></li>
                <li><a href="https://wearemitu.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline-offset-2 hover:underline">We Are Mitú</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase text-xs tracking-wider mb-3 text-white">METHODOLOGY</h4>
              <p className="text-white/70 leading-relaxed">
                Economic impact calculations use <strong className="text-white/90">Saayman, M. & Saayman, A. (2004)</strong>, "Economic Impact of Cultural Events" methodology. This peer-reviewed model measures direct spending, leakages, and multiplier effects to calculate total economic impact and GDP contribution.
              </p>
              <p className="text-white/70 text-xs mt-2">
                <a href="https://sajems.org/index.php/sajems/article/view/1294" target="_blank" rel="noopener noreferrer" className="hover:text-primary underline-offset-2 hover:underline">
                  View paper →
                </a>
              </p>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-6 text-center text-xs text-white/50">
            <p>Created with data journalism principles &mdash; Not affiliated with Bad Bunny &mdash; {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
