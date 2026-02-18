import { useState, useMemo } from 'react';
import { PUERTO_RICO_DATA } from '../../data/puertoRico';
import { calculateEconomicImpact, formatCurrency } from '../../utils/economicModel';
import { InfoTooltip } from '../shared/InfoTooltip';

export function PuertoRicoSection() {
  const [inputs, setInputs] = useState(PUERTO_RICO_DATA.modelInputs);
  const [showCalculator, setShowCalculator] = useState(false);

  const results = useMemo(() => calculateEconomicImpact(inputs), [inputs]);

  const updateInput = (key, value) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  };

  return (
    <section id="puerto-rico" className="flex flex-col gap-8">
      {/* Header */}
      <div>
        <div className="inline-block px-3 py-1 rounded-full bg-[#2A9D8F]/10 text-[#2A9D8F] text-xs font-bold uppercase tracking-wider mb-3">
          Primary Case Study
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
          Puerto Rico Residency
        </h2>
        <p className="text-lg text-[#7F8C8D] mt-2">
          "No Me Quiero Ir de Aquí" • Coliseo de Puerto Rico • July-Sept 2025
        </p>
        <p className="text-sm text-[#7F8C8D] mt-1">
          In 2025, Bad Bunny held a historic 31-show residency in Puerto Rico, that had a significant economic impact on the island.
        </p>
      </div>

      {/* Hero stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-gradient-to-br from-[#FF6B35]/10 to-[#FF6B35]/5 border border-[#FF6B35]/20">
          <p className="text-xs font-bold uppercase tracking-wider text-[#7F8C8D] mb-1">
            Attendees{' '}
            <InfoTooltip
              text="Source: The Guardian (2025) - 400,000 expected attendees across 30 shows, two-thirds from overseas"
              link="https://www.theguardian.com/music/2025/aug/07/bad-bunny-puerto-rico-residency-show"
            />
          </p>
          <p className="text-3xl font-extrabold text-[#FF6B35]">400,000</p>
          <p className="text-xs text-[#7F8C8D] mt-1">30 shows • 67% tourists</p>
        </div>
        <div className="p-5 rounded-2xl bg-gradient-to-br from-[#004E89]/10 to-[#004E89]/5 border border-[#004E89]/20">
          <p className="text-xs font-bold uppercase tracking-wider text-[#7F8C8D] mb-1">
            Economic Impact{' '}
            <InfoTooltip
              text="Source: The Guardian & We Are Mitú (2025) - $200M conservative estimate of economic injection into Puerto Rico"
              link="https://www.theguardian.com/music/2025/aug/07/bad-bunny-puerto-rico-residency-show"
            />
          </p>
          <p className="text-3xl font-extrabold text-[#004E89]">$200M</p>
          <p className="text-xs text-[#7F8C8D] mt-1">Conservative estimate</p>
        </div>
        <div className="p-5 rounded-2xl bg-gradient-to-br from-[#F7B801]/10 to-[#F7B801]/5 border border-[#F7B801]/20">
          <p className="text-xs font-bold uppercase tracking-wider text-[#7F8C8D] mb-1">
            GDP Boost{' '}
            <InfoTooltip
              text="Source: The Guardian (2025) - Official 0.15% GDP bump estimate from Puerto Rico economic analysts"
              link="https://www.theguardian.com/music/2025/aug/07/bad-bunny-puerto-rico-residency-show"
            />
          </p>
          <p className="text-3xl font-extrabold text-[#F7B801]">0.15%</p>
          <p className="text-xs text-[#7F8C8D] mt-1">Official estimate</p>
        </div>
        <div className="p-5 rounded-2xl bg-gradient-to-br from-[#2A9D8F]/10 to-[#2A9D8F]/5 border border-[#2A9D8F]/20">
          <p className="text-xs font-bold uppercase tracking-wider text-[#7F8C8D] mb-1">
            Jobs Created{' '}
            <InfoTooltip
              text="Source: We Are Mitú (2025) - 3,600 jobs created during the residency across tourism, hospitality, and service sectors"
              link="https://wearemitu.com/wearemitu/culture/bad-bunnys-residency-in-puerto-rico-impact/"
            />
          </p>
          <p className="text-3xl font-extrabold text-[#2A9D8F]">3,600</p>
          <p className="text-xs text-[#7F8C8D] mt-1">Tourism & hospitality</p>
        </div>
      </div>

      {/* Academic Model Results */}
      <div className="section-card">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold mb-1">Applying the academic model</h3>
            <p className="text-sm text-[#7F8C8D]">
              Saayman & Saayman (2004) calculation using verified Puerto Rico data
            </p>
          </div>
          <button
            onClick={() => setShowCalculator(!showCalculator)}
            className="px-4 py-2 rounded-full bg-[#004E89] text-white text-sm font-semibold hover:bg-[#003d6b] transition-colors"
          >
            {showCalculator ? 'Hide Calculator' : 'Adjust Assumptions'}
          </button>
        </div>

        {/* Step 1 Results */}
        <div className="mb-6 p-5 rounded-xl bg-[#FF6B35]/5 border border-[#FF6B35]/20">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-[#FF6B35] text-white flex items-center justify-center text-sm font-bold">1</div>
            <h4 className="font-bold text-lg">Step 1: Direct spending</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#7F8C8D]">Ticket Revenue:</span>
                <span className="font-bold">{formatCurrency(results.step1_directSpending.ticketRevenue, true)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7F8C8D]">Accommodation:</span>
                <span className="font-bold">{formatCurrency(results.step1_directSpending.accommodation, true)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7F8C8D]">Food & Beverage:</span>
                <span className="font-bold">{formatCurrency(results.step1_directSpending.food, true)}</span>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-[#7F8C8D]">Transport:</span>
                <span className="font-bold">{formatCurrency(results.step1_directSpending.transport, true)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7F8C8D]">Shopping:</span>
                <span className="font-bold">{formatCurrency(results.step1_directSpending.shopping, true)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#7F8C8D]">Other:</span>
                <span className="font-bold">{formatCurrency(results.step1_directSpending.other, true)}</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-[#FF6B35]/20">
            <div className="flex justify-between items-center">
              <span className="font-bold uppercase text-sm">Total Direct Spending:</span>
              <span className="text-2xl font-extrabold text-[#FF6B35]">
                {formatCurrency(results.step1_directSpending.total, true)}
              </span>
            </div>
          </div>
        </div>

        {/* Step 2 Results */}
        <div className="mb-6 p-5 rounded-xl bg-[#004E89]/5 border border-[#004E89]/20">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-[#004E89] text-white flex items-center justify-center text-sm font-bold">2</div>
            <h4 className="font-bold text-lg">Step 2: Leakages</h4>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[#7F8C8D]">
                Ticketing Platform Fees (22%):{' '}
                <InfoTooltip
                  text="Source: NITO (2024) - $22 per $100 ticket goes to platforms like Ticketmaster"
                  link="https://www.hypebot.com/what-artists-earn-from-ticket-sales-a-revealing-revenue-breakdown/"
                />
              </span>
              <span className="font-bold text-red-500">-{formatCurrency(results.step2_leakages.ticketingFees, true)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#7F8C8D]">
                Artist Share (48%, + as artist is local):{' '}
                <InfoTooltip
                  text="Source: NITO (2024) - $48 remaining after fees/production, 85% goes to artist ($40.80). Since Bad Bunny is Puerto Rican, this stays in the local economy."
                  link="https://www.hypebot.com/what-artists-earn-from-ticket-sales-a-revealing-revenue-breakdown/"
                />
              </span>
              <span className="font-bold text-red-500">-{formatCurrency(results.step2_leakages.artistLeakage, true)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#7F8C8D]">
                Local Production (30%, retained):{' '}
                <InfoTooltip
                  text="Source: NITO (2024) - $30 per $100 ticket goes to staging, venue staff, sound, security (stays in local economy)"
                  link="https://www.hypebot.com/what-artists-earn-from-ticket-sales-a-revealing-revenue-breakdown/"
                />
              </span>
              <span className="font-bold text-green-600">+{formatCurrency(results.step2_leakages.localProduction, true)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#7F8C8D]">Non-local Accommodation Profits:</span>
              <span className="font-bold text-red-500">-{formatCurrency(results.step2_leakages.accommodationLeakage, true)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#7F8C8D]">Non-local Food Profits:</span>
              <span className="font-bold text-red-500">-{formatCurrency(results.step2_leakages.foodLeakage, true)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#7F8C8D]">Imports:</span>
              <span className="font-bold text-red-500">-{formatCurrency(results.step2_leakages.importLeakage, true)}</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-[#004E89]/20">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold uppercase text-sm">Total Leakages:</span>
              <span className="text-xl font-extrabold text-red-500">
                -{formatCurrency(results.step2_leakages.totalLeakages, true)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold uppercase text-sm">Net Local Injection:</span>
              <span className="text-2xl font-extrabold text-[#004E89]">
                {formatCurrency(results.step2_leakages.netLocalInjection, true)}
              </span>
            </div>
          </div>
        </div>

        {/* Step 3 Results */}
        <div className="p-6 rounded-xl bg-gradient-to-br from-[#2A9D8F]/10 to-[#F7B801]/10 border-2 border-[#2A9D8F]">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-[#2A9D8F] text-white flex items-center justify-center text-sm font-bold">3</div>
            <h4 className="font-bold text-lg">Step 3: Total economic impact</h4>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[#7F8C8D]">Net Local Injection:</span>
              <span className="font-bold">{formatCurrency(results.step3_impact.netLocalInjection, true)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[#7F8C8D]">× Economic Multiplier:</span>
              <span className="font-bold">{results.step3_impact.multiplier}x</span>
            </div>
            <div className="h-px bg-[#2A9D8F]/20"></div>
            <div className="flex justify-between items-center">
              <span className="font-bold uppercase">TOTAL ECONOMIC IMPACT:</span>
              <span className="text-3xl font-extrabold text-[#2A9D8F]">
                {formatCurrency(results.step3_impact.totalEconomicImpact, true)}
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-bold uppercase">GDP IMPACT:</span>
              <span className="text-3xl font-extrabold text-[#F7B801]">
                {results.step3_impact.gdpImpactPercentage}
              </span>
            </div>
          </div>
        </div>

        {/* Comparison with official estimate */}
        <div className="mt-6 p-4 rounded-xl bg-[#F8F9FA] border border-[#E9ECEF]">
          <p className="text-sm">
            <strong>Model vs Official Estimate:</strong> Our calculation shows{' '}
            <span className="font-bold text-[#2A9D8F]">{formatCurrency(results.step3_impact.totalEconomicImpact, true)}</span>{' '}
            (GDP impact: <span className="font-bold text-[#F7B801]">{results.step3_impact.gdpImpactPercentage}</span>)
            compared to the official conservative estimate of{' '}
            <span className="font-bold text-[#004E89]">$200M</span> (0.15% GDP impact).
          </p>
        </div>
      </div>

      {/* Interactive Calculator (collapsible) */}
      {showCalculator && (
        <div className="section-card bg-[#F8F9FA]">
          <h3 className="text-xl font-bold mb-4">ADJUST ASSUMPTIONS</h3>
          <p className="text-sm text-[#7F8C8D] mb-6">
            Move the sliders to see how different assumptions affect the economic impact calculation
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Event parameters */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-xs font-bold uppercase">Avg Ticket Price</label>
                  <span className="text-sm font-bold">${inputs.avgTicketPrice}</span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="800"
                  step="10"
                  value={inputs.avgTicketPrice}
                  onChange={(e) => updateInput('avgTicketPrice', Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-xs font-bold uppercase">Tourist %</label>
                  <span className="text-sm font-bold">{inputs.touristPercent}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={inputs.touristPercent}
                  onChange={(e) => updateInput('touristPercent', Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-xs font-bold uppercase">Stay Duration (days)</label>
                  <span className="text-sm font-bold">{inputs.avgStayDuration}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={inputs.avgStayDuration}
                  onChange={(e) => updateInput('avgStayDuration', Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>

            {/* Daily spending */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-xs font-bold uppercase">Daily Accommodation</label>
                  <span className="text-sm font-bold">${inputs.dailyAccommodation}</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="300"
                  step="10"
                  value={inputs.dailyAccommodation}
                  onChange={(e) => updateInput('dailyAccommodation', Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-xs font-bold uppercase">Daily Food</label>
                  <span className="text-sm font-bold">${inputs.dailyFood}</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="150"
                  step="5"
                  value={inputs.dailyFood}
                  onChange={(e) => updateInput('dailyFood', Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <label className="text-xs font-bold uppercase">Multiplier</label>
                  <span className="text-sm font-bold">{inputs.multiplier}x</span>
                </div>
                <input
                  type="range"
                  min="1.0"
                  max="2.0"
                  step="0.05"
                  value={inputs.multiplier}
                  onChange={(e) => updateInput('multiplier', Number(e.target.value))}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => setInputs(PUERTO_RICO_DATA.modelInputs)}
              className="px-4 py-2 rounded-full bg-white border border-[#E9ECEF] text-sm font-semibold hover:bg-[#F8F9FA] transition-colors"
            >
              Reset to Defaults
            </button>
          </div>
        </div>
      )}

      {/* Unique Features - Sidebar Style Widget */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-[#F7B801]/10 to-[#FF6B35]/5 border-l-4 border-[#F7B801]">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl">💡</span>
          <h3 className="text-lg font-bold">Unique features of this residency</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {PUERTO_RICO_DATA.uniqueFeatures.map((feature, i) => (
            <div key={i} className="flex items-start gap-2 text-sm">
              <span className="text-[#F7B801] mt-0.5">▸</span>
              <span className="text-[#495057]">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Sources */}
      <div className="section-card">
        <h3 className="text-xl font-bold mb-4">Press sources</h3>
        <div className="space-y-3">
          {PUERTO_RICO_DATA.sources.map((source, i) => (
            <div key={i} className="p-4 rounded-xl border border-[#E9ECEF] hover:border-[#FF6B35] transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-bold text-sm mb-1">{source.title}</h4>
                  <p className="text-xs text-[#7F8C8D] mb-2">
                    {source.source} • {source.author && `${source.author} • `}{source.date}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {source.keyData.map((data, j) => (
                      <span key={j} className="text-xs px-2 py-1 rounded bg-[#F8F9FA] text-[#7F8C8D]">
                        {data}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-[#004E89] hover:text-[#FF6B35] transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
