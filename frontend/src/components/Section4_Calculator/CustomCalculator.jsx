import { useState, useMemo } from 'react';
import { calculateEconomicImpact, formatCurrency } from '../../utils/economicModel';

const DEFAULT_INPUTS = {
  shows: 3,
  attendancePerShow: 50000,
  avgTicketPrice: 150,
  touristPercent: 40,
  avgStayDuration: 3,
  dailyAccommodation: 100,
  dailyFood: 60,
  dailyTransport: 30,
  dailyShopping: 40,
  dailyOther: 30,
  multiplier: 1.3,
  localGDP: 100,
  localBusinessRetention: 0.80,
  accommodationLocalPercent: 0.60,
  foodLocalPercent: 0.70,
  importRate: 0.30
};

export function CustomCalculator() {
  const [inputs, setInputs] = useState(DEFAULT_INPUTS);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const results = useMemo(() => calculateEconomicImpact(inputs), [inputs]);

  const updateInput = (key, value) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  };

  return (
    <section id="calculator" className="flex flex-col gap-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
          Economic Impact Simulator
        </h2>
        <p className="text-lg text-[#7F8C8D] mt-2">
          Simulate economic impact for any city
        </p>
      </div>

      <div className="section-card">
        {/* Basic inputs */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4 uppercase">Event Details</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold uppercase">Number of Shows</label>
                <span className="text-sm font-bold text-[#FF6B35]">{inputs.shows}</span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={inputs.shows}
                onChange={(e) => updateInput('shows', Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold uppercase">Attendance per Show</label>
                <span className="text-sm font-bold text-[#FF6B35]">{inputs.attendancePerShow.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="10000"
                max="100000"
                step="1000"
                value={inputs.attendancePerShow}
                onChange={(e) => updateInput('attendancePerShow', Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold uppercase">Average Ticket Price (USD)</label>
                <span className="text-sm font-bold text-[#FF6B35]">${inputs.avgTicketPrice}</span>
              </div>
              <input
                type="range"
                min="50"
                max="500"
                step="10"
                value={inputs.avgTicketPrice}
                onChange={(e) => updateInput('avgTicketPrice', Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold uppercase">% Tourists vs Locals</label>
                <span className="text-sm font-bold text-[#FF6B35]">{inputs.touristPercent}%</span>
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
              <p className="text-xs text-[#7F8C8D] mt-1">Only tourists bring "new" money to the economy</p>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold uppercase">Average Stay Duration (days)</label>
                <span className="text-sm font-bold text-[#FF6B35]">{inputs.avgStayDuration}</span>
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

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold uppercase">City GDP (USD Billions)</label>
                <span className="text-sm font-bold text-[#FF6B35]">${inputs.localGDP}B</span>
              </div>
              <input
                type="number"
                value={inputs.localGDP}
                onChange={(e) => updateInput('localGDP', Number(e.target.value) || 100)}
                className="w-full px-4 py-2 rounded-xl border border-[#E9ECEF] focus:border-[#FF6B35] focus:outline-none"
                placeholder="e.g., 150"
              />
            </div>
          </div>
        </div>

        {/* Daily spending */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4 uppercase">Daily Tourist Spending (USD)</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold uppercase">Accommodation</label>
                <span className="text-sm font-bold text-[#004E89]">${inputs.dailyAccommodation}</span>
              </div>
              <input
                type="range"
                min="30"
                max="300"
                step="10"
                value={inputs.dailyAccommodation}
                onChange={(e) => updateInput('dailyAccommodation', Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold uppercase">Food & Beverage</label>
                <span className="text-sm font-bold text-[#004E89]">${inputs.dailyFood}</span>
              </div>
              <input
                type="range"
                min="20"
                max="200"
                step="5"
                value={inputs.dailyFood}
                onChange={(e) => updateInput('dailyFood', Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold uppercase">Transport</label>
                <span className="text-sm font-bold text-[#004E89]">${inputs.dailyTransport}</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                step="5"
                value={inputs.dailyTransport}
                onChange={(e) => updateInput('dailyTransport', Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold uppercase">Shopping</label>
                <span className="text-sm font-bold text-[#004E89]">${inputs.dailyShopping}</span>
              </div>
              <input
                type="range"
                min="0"
                max="200"
                step="10"
                value={inputs.dailyShopping}
                onChange={(e) => updateInput('dailyShopping', Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-bold uppercase">Other</label>
                <span className="text-sm font-bold text-[#004E89]">${inputs.dailyOther}</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={inputs.dailyOther}
                onChange={(e) => updateInput('dailyOther', Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="flex items-center">
              <div className="p-4 rounded-xl bg-[#F8F9FA] w-full">
                <p className="text-xs text-[#7F8C8D] mb-1">Total Daily:</p>
                <p className="text-xl font-bold text-[#004E89]">
                  ${inputs.dailyAccommodation + inputs.dailyFood + inputs.dailyTransport + inputs.dailyShopping + inputs.dailyOther}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Advanced options */}
        <div className="mb-8">
          <button
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center gap-2 text-sm font-bold uppercase text-[#7F8C8D] hover:text-[#FF6B35] transition-colors"
          >
            <svg
              className={`w-4 h-4 transition-transform ${showAdvanced ? 'rotate-90' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Advanced Options
          </button>

          {showAdvanced && (
            <div className="mt-4 p-6 rounded-xl bg-[#F8F9FA] border border-[#E9ECEF]">
              <p className="text-xs text-[#7F8C8D] mb-4">
                These parameters control leakage calculations. Default values are based on typical Latin American economies.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-bold uppercase">Economic Multiplier</label>
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
                  <p className="text-xs text-[#7F8C8D] mt-1">1.2-1.3 for islands, 1.4-1.6 for large cities</p>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-bold uppercase">Local Business Retention</label>
                    <span className="text-sm font-bold">{(inputs.localBusinessRetention * 100).toFixed(0)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="1.0"
                    step="0.05"
                    value={inputs.localBusinessRetention}
                    onChange={(e) => updateInput('localBusinessRetention', Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-bold uppercase">% Local Hotels</label>
                    <span className="text-sm font-bold">{(inputs.accommodationLocalPercent * 100).toFixed(0)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1.0"
                    step="0.05"
                    value={inputs.accommodationLocalPercent}
                    onChange={(e) => updateInput('accommodationLocalPercent', Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <label className="text-sm font-bold uppercase">% Local Restaurants</label>
                    <span className="text-sm font-bold">{(inputs.foodLocalPercent * 100).toFixed(0)}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="1.0"
                    step="0.05"
                    value={inputs.foodLocalPercent}
                    onChange={(e) => updateInput('foodLocalPercent', Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold uppercase">CALCULATED IMPACT</h3>

          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-[#FF6B35]/5 border border-[#FF6B35]/20">
              <p className="text-xs font-bold uppercase text-[#7F8C8D] mb-1">Total Ticket Revenue</p>
              <p className="text-xl font-extrabold text-[#FF6B35]">
                {formatCurrency(results.step1_directSpending.ticketRevenue, true)}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#004E89]/5 border border-[#004E89]/20">
              <p className="text-xs font-bold uppercase text-[#7F8C8D] mb-1">Tourist Spending</p>
              <p className="text-xl font-extrabold text-[#004E89]">
                {formatCurrency(
                  results.step1_directSpending.accommodation +
                  results.step1_directSpending.food +
                  results.step1_directSpending.transport +
                  results.step1_directSpending.shopping +
                  results.step1_directSpending.other,
                  true
                )}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#2A9D8F]/5 border border-[#2A9D8F]/20">
              <p className="text-xs font-bold uppercase text-[#7F8C8D] mb-1">Net Local Injection</p>
              <p className="text-xl font-extrabold text-[#2A9D8F]">
                {formatCurrency(results.step2_leakages.netLocalInjection, true)}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#F7B801]/5 border border-[#F7B801]/20">
              <p className="text-xs font-bold uppercase text-[#7F8C8D] mb-1">Tax Revenue (10%)</p>
              <p className="text-xl font-extrabold text-[#F7B801]">
                {formatCurrency(results.step3_impact.totalEconomicImpact * 0.10, true)}
              </p>
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-gradient-to-br from-[#2A9D8F]/10 via-[#F7B801]/10 to-[#FF6B35]/10 border-2 border-[#2A9D8F]">
            <div className="text-center">
              <p className="text-sm font-bold uppercase text-[#7F8C8D] mb-2">Total Economic Impact</p>
              <p className="text-5xl font-extrabold text-[#2A9D8F] mb-4">
                {formatCurrency(results.step3_impact.totalEconomicImpact, true)}
              </p>
              <div className="inline-block px-6 py-3 rounded-full bg-[#F7B801] text-white">
                <p className="text-xs font-bold uppercase mb-1">GDP Impact</p>
                <p className="text-3xl font-extrabold">{results.step3_impact.gdpImpactPercentage}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action button */}
        <div className="flex gap-3 mt-8 pt-8 border-t border-[#E9ECEF]">
          <button
            onClick={() => setInputs(DEFAULT_INPUTS)}
            className="px-6 py-3 rounded-full bg-[#004E89] text-white font-bold hover:bg-[#003d6b] transition-colors"
          >
            Reset to defaults
          </button>
        </div>

        <div className="mt-6 p-4 rounded-xl bg-[#F8F9FA] text-xs text-[#7F8C8D]">
          <strong>Methodology:</strong> Calculations use Saayman & Saayman (2004) model. Results are estimates
          based on your input assumptions. Actual economic impact depends on many local factors not captured
          in this simplified model.
        </div>
      </div>
    </section>
  );
}
