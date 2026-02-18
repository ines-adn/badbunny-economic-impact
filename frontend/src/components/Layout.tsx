import { ReactNode, useState } from 'react';
import { SECTIONS } from '../constants';

export function Layout({ children }: { children: ReactNode }) {
  const [active, setActive] = useState('model');

  const scrollTo = (id: string) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <header className="bg-gradient-hero text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:py-20">
          <p className="text-[#F7B801] font-semibold text-sm uppercase tracking-[0.2em] mb-4">
            Economic Impact Analysis
          </p>
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4">
            BAD BUNNY
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl">
            Academic analysis of the economic impact of cultural events using verified data and peer-reviewed methodology
          </p>

          {/* Navigation */}
          <nav className="flex flex-wrap gap-2 mt-8">
            {SECTIONS.map(s => (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`nav-pill ${
                  active === s.id
                    ? 'bg-white text-[#004E89] shadow-lg'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {s.label.toUpperCase()}
              </button>
            ))}
          </nav>
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
