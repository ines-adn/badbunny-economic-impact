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
                Analysis of the economic impact of Bad Bunny's DtMF Tour using <strong className="text-accent">sourced data</strong> and <strong className="text-accent">an academic methodology</strong>
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

      {/* Disclaimer - Playful dashed banner */}
      <div className="bg-accent/15 border-y-4 border-dashed border-teal/40">
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center font-black text-white text-xl shadow-lg">
              ℹ️
            </div>
            <div>
              <p className="font-bold text-base text-text uppercase tracking-wide">Independent Project — Not Affiliated with Bad Bunny</p>
              <p className="text-sm text-text-light mt-2 leading-relaxed">
                This dashboard is built as a side-project for <strong>educational and analytical purposes only</strong>. It is not directly linked to any officials.
                Data quality is indicated with <span className="inline-block px-2 py-0.5 bg-success/20 text-success rounded-full font-semibold text-xs">🟢 Verified</span>, <span className="inline-block px-2 py-0.5 bg-accent/40 text-text rounded-full font-semibold text-xs">🟡 Estimated</span>, or <span className="inline-block px-2 py-0.5 bg-primary/20 text-primary rounded-full font-semibold text-xs">🔴 Unknown</span> badges.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-6 py-12 flex flex-col gap-20">
        {children}
      </main>

      {/* Footer - Tropical dark theme */}
      <footer className="bg-text text-white/90 relative overflow-hidden mt-16">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
            <div>
              <h4 className="font-bold uppercase text-sm tracking-wider mb-4 text-accent">📊 About</h4>
              <p className="text-white/80 leading-relaxed">
                Academic analysis of the economic impact of Bad Bunny's Puerto Rico residency (2025) and <strong className="text-white">DeBí TiRaR MáS FoTóS (DTMF)</strong> World Tour using peer-reviewed methodology and verified data sources.
              </p>
            </div>
            <div>
              <h4 className="font-bold uppercase text-sm tracking-wider mb-4 text-accent">📚 Data Sources</h4>
              <ul className="text-white/80 space-y-2">
                <li>
                  <a href="https://www.billboard.com/pro/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors inline-flex items-center gap-1 underline-offset-4 hover:underline">
                    Billboard Boxscore →
                  </a>
                </li>
                <li>
                  <a href="https://www.theguardian.com/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors inline-flex items-center gap-1 underline-offset-4 hover:underline">
                    The Guardian →
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase text-sm tracking-wider mb-4 text-accent">🔬 Methodology</h4>
              <p className="text-white/80 leading-relaxed mb-3">
                Economic impact calculations use <strong className="text-white">Saayman, M. & Saayman, A. (2004)</strong>, "Economic Impact of Cultural Events" methodology.
              </p>
              <a href="https://sajems.org/index.php/sajems/article/view/1294" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-bold text-sm">
                View paper
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          <div className="border-t-2 border-dashed border-white/20 mt-10 pt-6 text-center">
            <p className="text-white/60 text-sm">
              Created with research, interest and vibe coding (Claude Code) — Not affiliated with Bad Bunny — {new Date().getFullYear()}
            </p>
            <p className="text-accent/80 text-xs mt-2 font-semibold">🐸 Seguimo Aquí 🌴</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
