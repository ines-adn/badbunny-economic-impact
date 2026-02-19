export function BeyondEconomicsSection() {
  // Non-economic benefits from Saayman & Saayman (2004), pages 629-630
  // Based on Ritchie (1984) and Getz (1997:44)
  const intangibleImpacts = [
    {
      id: 1,
      icon: "❤️",
      title: "Increased community pride and spirit",
      color: "#FF6B35",
      description: "Cultural events reinforce local identity and collective pride. For Puerto Rico, the residency celebration strengthened community spirit during economic and political challenges.",
      examples: [
        "Celebration of Puerto Rican heritage on international stage",
        "Collective pride in cultural achievements",
        "Shared community experience across generations"
      ]
    },
    {
      id: 2,
      icon: "🎭",
      title: "Strengthening of traditions and values",
      color: "#004E89",
      description: "Events validate and preserve local cultural forms. Reggaeton and Latin trap's commercial success demonstrates viability of traditional music evolution.",
      examples: [
        "Validation of reggaeton as globally significant art form",
        "Preservation of traditional genres (bomba, plena) through fusion",
        "Intergenerational transmission of cultural knowledge"
      ]
    },
    {
      id: 6,
      icon: "🙌",
      title: "Increased volunteerism and community group activity",
      color: "#9D4EDD",
      description: "Events mobilize community involvement and organizational capacity. The residency created opportunities for local participation.",
      examples: [
        "Local workers employed in event production (1,000+ hired)",
        "Community organizations engaged in event support",
        "Volunteer opportunities for residents"
      ]
    },
    {
      id: 7,
      icon: "🤲",
      title: "Intercultural interaction and co-operation",
      color: "#2A9D8F",
      description: "Events bring diverse groups together. The tour attracted visitors from 77+ countries, fostering cross-cultural exchange.",
      examples: [
        "International visitors from 77 countries (Mexico City shows)",
        "Cultural exchange between Latin American regions",
        "Shared experience across language and national boundaries"
      ]
    }
  ];

  return (
    <section id="beyond" className="flex flex-col gap-8">
      <div className="grid md:grid-cols-[1fr_auto] gap-6 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight">
            Beyond economics
          </h2>
          <p className="text-lg text-[#7F8C8D] mt-2">
            Intangible impacts not captured by the model
          </p>
        </div>
        <div className="hidden md:block">
          <img
            src="/bb_face.jpg"
            alt="Bad Bunny"
            className="w-32 h-32 rounded-full object-cover drop-shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Explainer card */}
      <div className="bg-gradient-to-br from-[#004E89]/5 to-[#2A9D8F]/5 border-2 border-[#004E89]/20 rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="shrink-0 text-3xl">📊</div>
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">Why these impacts matter</h3>
            <p className="text-[#495057] mb-3">
              The Saayman & Saayman model measures <strong>monetary flows</strong> through the local economy.
              However, the paper also mentions that cultural events create value that cannot be quantified, such as:
            </p>
            <ul className="text-sm space-y-1.5 text-[#495057]">
              <li>• <strong>Increased community pride and spirit</strong></li>
              <li>• <strong>Strenghtening of traditions and values</strong> </li>
              <li>• <strong>Increased volunteerism and community group activities</strong></li>
              <li>• <strong>Intercultural interaction and cooperation</strong></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Intangible impacts grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {intangibleImpacts.map((impact) => (
          <div
            key={impact.id}
            className="section-card hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start gap-4 mb-4">
              <div
                className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-2xl"
                style={{ backgroundColor: `${impact.color}15` }}
              >
                {impact.icon}
              </div>
              <div className="flex-1">
                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: impact.color }}
                >
                  {impact.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-[#495057] mb-4">
              {impact.description}
            </p>

            <div className="bg-[#F8F9FA] rounded-lg p-4">
              <p className="text-xs font-semibold text-[#7F8C8D] uppercase tracking-wide mb-2">
                Examples:
              </p>
              <ul className="space-y-2">
                {impact.examples.map((example, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span style={{ color: impact.color }} className="mt-1 shrink-0">▸</span>
                    <span className="text-[#495057]">{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Limitations & Research Note */}
      <div className="bg-[#FFF3CD] border border-[#FFC107] rounded-xl p-6">
        <div className="flex items-start gap-4">
          <div className="shrink-0 text-2xl">⚠️</div>
          <div className="flex-1">
            <h4 className="font-bold text-lg mb-2">Research limitations</h4>
            <p className="text-sm mb-3">
              The impacts described above are <strong>qualitative and subjective</strong>. Unlike the economic
              model, these effects cannot be rigorously measured or verified.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
