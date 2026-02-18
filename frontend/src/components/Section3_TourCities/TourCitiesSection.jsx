import { useState } from 'react';
import { TOUR_CITIES_DATA } from '../../data/tourCities';
import { calculateEconomicImpact, formatCurrency } from '../../utils/economicModel';

const DataQualityBadge = ({ quality }) => {
  const config = {
    '🟢 Verified': {
      bg: 'bg-green-50',
      text: 'text-green-700',
      border: 'border-green-200',
      tooltip: 'Data from official sources (Billboard, press releases)'
    },
    '🟡 Estimated': {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-200',
      tooltip: 'Calculated using regional comparables'
    },
    '🔴 Unknown': {
      bg: 'bg-red-50',
      text: 'text-red-700',
      border: 'border-red-200',
      tooltip: 'No data available'
    }
  };

  const { bg, text, border, tooltip } = config[quality] || config['🔴 Unknown'];

  return (
    <span
      className={`inline-block px-1.5 md:px-2 py-0.5 md:py-1 rounded text-[10px] md:text-xs font-bold ${bg} ${text} border ${border}`}
      title={tooltip}
    >
      {quality}
    </span>
  );
};

const CityDetailModal = ({ city, onClose }) => {
  if (!city.modelInputs) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 md:p-4" onClick={onClose}>
        <div className="bg-white rounded-xl md:rounded-2xl max-w-2xl w-full p-4 md:p-8" onClick={e => e.stopPropagation()}>
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-xl md:text-2xl font-extrabold">{city.city}, {city.country}</h3>
              <p className="text-sm md:text-base text-[#7F8C8D]">{city.venue}</p>
            </div>
            <button onClick={onClose} className="text-[#7F8C8D] active:text-black md:hover:text-black">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="text-center py-12">
            <DataQualityBadge quality={city.dataQuality} />
            <p className="text-[#7F8C8D] mt-4">{city.estimationNote || 'No economic data available yet'}</p>
          </div>
        </div>
      </div>
    );
  }

  const results = calculateEconomicImpact(city.modelInputs);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-2 md:p-4 overflow-y-auto" onClick={onClose}>
      <div className="bg-white rounded-xl md:rounded-2xl max-w-4xl w-full p-4 md:p-8 my-4 md:my-8" onClick={e => e.stopPropagation()}>
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold">{city.city}, {city.country}</h3>
            <p className="text-sm md:text-base text-[#7F8C8D]">{city.venue}</p>
            <p className="text-xs md:text-sm text-[#7F8C8D] mt-1">
              {city.dates.length} shows • {city.dates[0]} {city.dates.length > 1 && `- ${city.dates[city.dates.length - 1]}`}
            </p>
          </div>
          <button onClick={onClose} className="text-[#7F8C8D] hover:text-black">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Data quality */}
        <div className="mb-6">
          <DataQualityBadge quality={city.dataQuality} />
          {city.estimationNote && (
            <p className="text-xs text-[#7F8C8D] mt-2">{city.estimationNote}</p>
          )}
        </div>

        {/* Known facts */}
        <div className="mb-6 p-3 md:p-4 rounded-xl bg-[#F8F9FA]">
          <h4 className="font-bold text-xs md:text-sm mb-3 uppercase">Known Facts</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 text-xs md:text-sm">
            <div><span className="text-[#7F8C8D]">Shows:</span> <strong>{city.shows}</strong></div>
            {city.revenue && <div><span className="text-[#7F8C8D]">Revenue:</span> <strong>{formatCurrency(city.revenue, true)}</strong></div>}
            {city.attendance && <div><span className="text-[#7F8C8D]">Attendance:</span> <strong>{city.attendance.toLocaleString()}</strong></div>}
            {city.avgTicketPrice && <div><span className="text-[#7F8C8D]">Avg Ticket:</span> <strong>${city.avgTicketPrice}</strong></div>}
            {city.economicImpactEstimate && (
              <div><span className="text-[#7F8C8D]">Official Impact:</span> <strong>{formatCurrency(city.economicImpactEstimate, true)}</strong></div>
            )}
            {city.internationalVisitors && (
              <div><span className="text-[#7F8C8D]">Int'l Visitors:</span> <strong>{city.internationalVisitors.toLocaleString()}</strong></div>
            )}
          </div>
          {city.record && (
            <div className="mt-3 p-3 rounded-lg bg-[#FF6B35]/10 border border-[#FF6B35]/20">
              <p className="text-xs font-bold text-[#FF6B35]">🏆 RECORD</p>
              <p className="text-sm font-semibold mt-1">{city.record}</p>
            </div>
          )}
        </div>

        {/* Academic model results */}
        <div className="space-y-4">
          <h4 className="font-bold uppercase text-sm">Academic Model Calculation</h4>

          {/* Quick summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-[#FF6B35]/5 border border-[#FF6B35]/20">
              <p className="text-xs text-[#7F8C8D] mb-1">Direct Spending</p>
              <p className="font-bold text-[#FF6B35]">{formatCurrency(results.step1_directSpending.total, true)}</p>
            </div>
            <div className="p-3 rounded-xl bg-[#004E89]/5 border border-[#004E89]/20">
              <p className="text-xs text-[#7F8C8D] mb-1">After Leakages</p>
              <p className="font-bold text-[#004E89]">{formatCurrency(results.step2_leakages.netLocalInjection, true)}</p>
            </div>
            <div className="p-3 rounded-xl bg-[#2A9D8F]/5 border border-[#2A9D8F]/20">
              <p className="text-xs text-[#7F8C8D] mb-1">Total Impact</p>
              <p className="font-bold text-[#2A9D8F]">{formatCurrency(results.step3_impact.totalEconomicImpact, true)}</p>
            </div>
          </div>

          {/* GDP Impact highlight */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-[#F7B801]/10 to-[#2A9D8F]/10 border-2 border-[#F7B801]">
            <div className="flex justify-between items-center">
              <span className="font-bold uppercase text-sm">GDP Impact:</span>
              <span className="text-2xl font-extrabold text-[#F7B801]">
                {results.step3_impact.gdpImpactPercentage}
              </span>
            </div>
            {city.gdpEstimationNote && (
              <p className="text-xs text-[#7F8C8D] mt-2 italic">
                ℹ️ {city.gdpEstimationNote}
              </p>
            )}
          </div>

          {/* Comparison with official */}
          {city.economicImpactEstimate && (
            <div className="p-3 rounded-xl bg-[#F8F9FA] text-sm">
              <strong>Model vs Official:</strong> Our calculation shows{' '}
              <span className="font-bold text-[#2A9D8F]">{formatCurrency(results.step3_impact.totalEconomicImpact, true)}</span>
              {' '}compared to official estimate of{' '}
              <span className="font-bold text-[#004E89]">{formatCurrency(city.economicImpactEstimate, true)}</span>
            </div>
          )}
        </div>

        {/* Sources */}
        {city.sources && city.sources.length > 0 && (
          <div className="mt-6">
            <h4 className="font-bold uppercase text-xs text-[#7F8C8D] mb-3">Sources</h4>
            <div className="space-y-2">
              {city.sources.map((source, i) => (
                <a
                  key={i}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-lg border border-[#E9ECEF] active:border-[#FF6B35] md:hover:border-[#FF6B35] transition-colors text-sm"
                >
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <p className="font-semibold">{source.title}</p>
                      <p className="text-xs text-[#7F8C8D]">{source.source} • {source.date}</p>
                    </div>
                    <svg className="w-4 h-4 text-[#004E89] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export function TourCitiesSection() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [sortBy, setSortBy] = useState('revenue');

  const sortedCities = [...TOUR_CITIES_DATA].sort((a, b) => {
    if (sortBy === 'revenue') return (b.revenue || 0) - (a.revenue || 0);
    if (sortBy === 'shows') return b.shows - a.shows;
    if (sortBy === 'attendance') return (b.attendance || 0) - (a.attendance || 0);
    return 0;
  });

  return (
    <section id="tour" className="flex flex-col gap-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
          DTMF World Tour Cities
        </h2>
        <p className="text-lg text-[#7F8C8D] mt-2">
          Economic impact across Latin America
        </p>
      </div>

      {/* City comparison table */}
      <div className="section-card">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4 md:mb-6">
          <h3 className="text-lg md:text-xl font-bold">City comparison</h3>
          <div className="flex gap-1.5 md:gap-2 flex-wrap">
            <button
              onClick={() => setSortBy('revenue')}
              className={`px-2 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-semibold transition-colors ${
                sortBy === 'revenue' ? 'bg-[#004E89] text-white' : 'bg-[#F8F9FA] text-[#7F8C8D] active:bg-[#E9ECEF] md:hover:bg-[#E9ECEF]'
              }`}
            >
              Revenue
            </button>
            <button
              onClick={() => setSortBy('shows')}
              className={`px-2 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-semibold transition-colors ${
                sortBy === 'shows' ? 'bg-[#004E89] text-white' : 'bg-[#F8F9FA] text-[#7F8C8D] active:bg-[#E9ECEF] md:hover:bg-[#E9ECEF]'
              }`}
            >
              Shows
            </button>
            <button
              onClick={() => setSortBy('attendance')}
              className={`px-2 md:px-3 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-semibold transition-colors ${
                sortBy === 'attendance' ? 'bg-[#004E89] text-white' : 'bg-[#F8F9FA] text-[#7F8C8D] active:bg-[#E9ECEF] md:hover:bg-[#E9ECEF]'
              }`}
            >
              Attendance
            </button>
          </div>
        </div>

        <div className="overflow-x-auto -mx-2 md:mx-0 rounded-lg">
          <table className="w-full min-w-[550px] md:min-w-[600px]">
            <thead>
              <tr className="border-b-2 border-[#E9ECEF]">
                <th className="text-left py-2 md:py-3 px-2 text-[10px] md:text-xs font-bold uppercase text-[#7F8C8D]">City</th>
                <th className="text-center py-2 md:py-3 px-1 text-[10px] md:text-xs font-bold uppercase text-[#7F8C8D]">Shows</th>
                <th className="text-right py-2 md:py-3 px-1 text-[10px] md:text-xs font-bold uppercase text-[#7F8C8D]">Revenue</th>
                <th className="text-right py-2 md:py-3 px-1 text-[10px] md:text-xs font-bold uppercase text-[#7F8C8D] hidden sm:table-cell">Attendance</th>
                <th className="text-center py-2 md:py-3 px-1 text-[10px] md:text-xs font-bold uppercase text-[#7F8C8D]">Data</th>
                <th className="text-center py-2 md:py-3 px-1 text-[10px] md:text-xs font-bold uppercase text-[#7F8C8D]"></th>
              </tr>
            </thead>
            <tbody>
              {sortedCities.map(city => (
                <tr
                  key={city.id}
                  className="border-b border-[#E9ECEF] cursor-pointer transition-all active:bg-[#F8F9FA] active:scale-[0.99] md:hover:bg-[#F8F9FA]"
                  onClick={() => setSelectedCity(city)}
                >
                  <td className="py-3 md:py-4 px-2">
                    <div>
                      <p className="font-bold text-sm md:text-base">{city.city}</p>
                      <p className="text-[10px] md:text-xs text-[#7F8C8D]">{city.country}</p>
                    </div>
                  </td>
                  <td className="py-3 md:py-4 text-center font-bold text-sm md:text-base px-1">{city.shows}</td>
                  <td className="py-3 md:py-4 text-right font-bold text-[#FF6B35] text-xs md:text-base px-1">
                    {city.revenue ? formatCurrency(city.revenue, true) : '-'}
                  </td>
                  <td className="py-3 md:py-4 text-right font-bold text-sm md:text-base px-1 hidden sm:table-cell">
                    {city.attendance ? city.attendance.toLocaleString() : '-'}
                  </td>
                  <td className="py-3 md:py-4 text-center px-1">
                    <DataQualityBadge quality={city.dataQuality} />
                  </td>
                  <td className="py-3 md:py-4 text-center px-1">
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-[#7F8C8D] inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-3 md:mt-4 p-2 md:p-3 rounded-lg bg-[#F8F9FA] border border-[#E9ECEF]">
          <p className="text-xs md:text-sm text-[#7F8C8D] font-medium">
            👆 <span className="md:hidden">Tap</span><span className="hidden md:inline">Click</span> any row to see full economic impact breakdown
          </p>
        </div>
      </div>

      {/* Modal */}
      {selectedCity && (
        <CityDetailModal city={selectedCity} onClose={() => setSelectedCity(null)} />
      )}
    </section>
  );
}
