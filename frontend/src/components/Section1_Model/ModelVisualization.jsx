import { InfoTooltip } from '../shared/InfoTooltip';

export function ModelVisualization() {
  return (
    <section id="model" className="flex flex-col gap-8">
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
          The academic model
        </h2>
        <p className="text-lg text-[#7F8C8D] mt-2">
          How we measure economic impact of cultural events
        </p>
      </div>

      {/* Academic Reference - shown first */}
      <div className="bg-[#F8F9FA] rounded-xl p-6 border border-[#E9ECEF]">
        <div className="flex items-start gap-4">
          <div className="shrink-0">
            <svg className="w-8 h-8 text-[#004E89]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-lg mb-2">Academic reference</h4>
            <p className="text-sm mb-3">
              <strong>Saayman, M. & Saayman, A. (2004).</strong> Economic impact of cultural events.
              <em> South African Journal of Economic and Management Sciences, 7</em>(4), 622-648.
            </p>
            <p className="text-xs text-[#7F8C8D] mb-4">
              This peer-reviewed methodology is widely used in tourism economics to assess the economic
              contribution of festivals, concerts, and cultural events. The model accounts for both direct
              and indirect economic effects while rigorously identifying leakages.
            </p>
            <a
              href="https://sajems.org/index.php/sajems/article/view/1294"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#004E89] hover:text-[#FF6B35] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Access paper (via journal website)
            </a>
          </div>
        </div>
      </div>

      {/* Three-step flow - Grid layout */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Step 1 */}
        <div className="section-card hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 w-14 h-14 rounded-full bg-[#FF6B35] text-white flex items-center justify-center text-2xl font-bold">
              1
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-[#FF6B35]">
                Step 1: Direct cash injection
              </h3>
            </div>
          </div>
          <p className="text-sm text-[#495057] mb-4">
            Calculate all money flowing into the local economy from the event
          </p>
          <div className="bg-[#FF6B35]/5 border border-[#FF6B35]/20 rounded-lg p-4">
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm">
                <span className="text-[#FF6B35] mt-1 shrink-0">▸</span>
                <span className="text-[#495057]"><strong>Ticket sales:</strong> Total revenue from all ticket purchases</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-[#FF6B35] mt-1 shrink-0">▸</span>
                <span className="text-[#495057]"><strong>Tourist spending:</strong> Accommodation, food, transport, shopping</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-[#FF6B35] mt-1 shrink-0">▸</span>
                <span className="text-[#495057]"><strong>Segmentation:</strong> Distinguish tourists vs locals</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Step 2 */}
        <div className="section-card hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 w-14 h-14 rounded-full bg-[#004E89] text-white flex items-center justify-center text-2xl font-bold">
              2
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-[#004E89]">
                Step 2: Leakages analysis
              </h3>
            </div>
          </div>
          <p className="text-sm text-[#495057] mb-4">
            Identify money that leaves the local economy (doesn't benefit locals)
          </p>
          <div className="bg-[#004E89]/5 border border-[#004E89]/20 rounded-lg p-4">
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm">
                <span className="text-[#004E89] mt-1 shrink-0">▸</span>
                <span className="text-[#495057]">
                  <strong>Ticketing fees:</strong> ~22% to platforms{' '}
                  <InfoTooltip
                    text="Source: NITO (2024) - National Independent Talent Organization. ~$22 per $100 ticket goes to platforms like Ticketmaster."
                    link="https://www.hypebot.com/what-artists-earn-from-ticket-sales-a-revealing-revenue-breakdown/"
                  />
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-[#004E89] mt-1 shrink-0">▸</span>
                <span className="text-[#495057]">
                  <strong>Artist share:</strong> ~48% of ticket{' '}
                  <InfoTooltip
                    text="Source: NITO (2024) - $48 remaining after fees/production. 85% goes to artist ($40.80), 15% to promoter ($7.20). Artist net profit is only ~$8 after band, travel, equipment."
                    link="https://www.hypebot.com/what-artists-earn-from-ticket-sales-a-revealing-revenue-breakdown/"
                  />
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-[#004E89] mt-1 shrink-0">▸</span>
                <span className="text-[#495057]">
                  <strong>Local production:</strong> ~30% stays{' '}
                  <InfoTooltip
                    text="Source: NITO (2024) - $30 per $100 ticket goes to venue rental, staff wages, sound/lighting, security (stays in local economy)."
                    link="https://www.hypebot.com/what-artists-earn-from-ticket-sales-a-revealing-revenue-breakdown/"
                  />
                </span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-[#004E89] mt-1 shrink-0">▸</span>
                <span className="text-[#495057]"><strong>Other leakages:</strong> Chain hotels, franchises, imports</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Step 3 */}
        <div className="section-card hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4 mb-4">
            <div className="shrink-0 w-14 h-14 rounded-full bg-[#2A9D8F] text-white flex items-center justify-center text-2xl font-bold">
              3
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-[#2A9D8F]">
                Step 3: Multiplier effect
              </h3>
            </div>
          </div>
          <p className="text-sm text-[#495057] mb-4">
            Apply empirically estimated multiplier to capture ripple effects
          </p>
          <div className="bg-[#2A9D8F]/5 border border-[#2A9D8F]/20 rounded-lg p-4">
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-sm">
                <span className="text-[#2A9D8F] mt-1 shrink-0">▸</span>
                <span className="text-[#495057]"><strong>Multiplier (1.2-1.6):</strong> Estimated from surveys, not calculated</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-[#2A9D8F] mt-1 shrink-0">▸</span>
                <span className="text-[#495057]"><strong>Captures:</strong> Indirect (suppliers) + Induced (wages spent locally)</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-[#2A9D8F] mt-1 shrink-0">▸</span>
                <span className="text-[#495057]"><strong>Formula:</strong> Net Local Injection × Multiplier</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="text-[#2A9D8F] mt-1 shrink-0">▸</span>
                <span className="text-[#495057]"><strong>GDP impact:</strong> Total Impact ÷ Local GDP × 100%</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Final result box */}
      <div className="p-6 rounded-xl bg-gradient-to-br from-[#F7B801]/10 to-[#FF6B35]/10 border-2 border-[#F7B801]">
        <div className="text-center">
          <p className="text-sm font-bold text-[#7F8C8D] uppercase tracking-wider mb-2">Final Output</p>
          <p className="text-2xl font-extrabold">Total economic impact & GDP boost %</p>
        </div>
      </div>

      {/* Model overview - 2x2 grid */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-5 rounded-xl bg-white border border-[#E9ECEF]">
          <h4 className="font-bold mb-2 flex items-center gap-2">
            <span className="text-[#2A9D8F]">✓</span>
            Why this model?
          </h4>
          <ul className="text-sm space-y-1.5 text-[#7F8C8D]">
            <li>• Peer-reviewed academic methodology</li>
            <li>• Specifically designed for cultural events</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-white border border-[#E9ECEF]">
          <h4 className="font-bold mb-2 flex items-center gap-2">
            <span className="text-[#F7B801]">⚠</span>
            Limitations
          </h4>
          <ul className="text-sm space-y-1.5 text-[#7F8C8D]">
            <li>• Based on assumptions (tourist %, spending rates)</li>
            <li>• Cannot measure intangible impacts</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-white border border-[#E9ECEF]">
          <h4 className="font-bold mb-2 flex items-center gap-2">
            <span className="text-[#004E89]">📊</span>
            Empirical approach
          </h4>
          <ul className="text-sm space-y-1.5 text-[#7F8C8D]">
            <li>• 400 visitor surveys (demand-side)</li>
            <li>• ~50 business surveys (supply-side leakages)</li>
          </ul>
        </div>
        <div className="p-5 rounded-xl bg-white border border-[#E9ECEF]">
          <h4 className="font-bold mb-2 flex items-center gap-2">
            <span className="text-[#FF6B35]">📋</span>
            Data collected
          </h4>
          <ul className="text-sm space-y-1.5 text-[#7F8C8D]">
            <li>• Spending patterns by category</li>
            <li>• Tourist vs local segmentation</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
