/**
 * DTMF World Tour Cities Data
 * Sources:
 * - Concert data: Billboard Boxscore, press reports, official announcements
 * - GDP data: Wikipedia "List of Latin American cities by GDP (PPP)" / TelluBase/Tellusant (2023 estimates)
 *   https://en.wikipedia.org/wiki/List_of_Latin_American_cities_by_GDP_%28PPP%29
 */

export const TOUR_CITIES_DATA = [
  {
    id: 1,
    city: "Mexico City",
    country: "🇲🇽 Mexico",
    venue: "Estadio GNP Seguros",
    dates: ["2025-12-10", "2025-12-11", "2025-12-12", "2025-12-15", "2025-12-16", "2025-12-19"],

    // VERIFIED DATA (Billboard Boxscore)
    shows: 6,
    revenue: 86_700_000,
    attendance: 518_000,
    avgTicketPrice: 167, // $86.7M / 518K
    economicImpactEstimate: 177_000_000,
    hotelOccupancy: 90,
    internationalVisitors: 52_000,
    visitorOrigins: "77 countries",
    cityGDP: 520_600_000_000, // Wikipedia: Greater Mexico City GDP (PPP) 2023, #2 in Latin America
    record: "Highest gross and attendance at Estadio GNP Seguros ever",

    // Model inputs
    modelInputs: {
      shows: 6,
      attendancePerShow: 86333, // 518,000 / 6
      avgTicketPrice: 167,
      touristPercent: 10, // 52,000 / 518,000
      avgStayDuration: 3,
      dailyAccommodation: 100,
      dailyFood: 60,
      dailyTransport: 30,
      dailyShopping: 50,
      dailyOther: 40,
      artistIsLocal: false, // Bad Bunny is not local to Mexico
      multiplier: 1.5, // Larger metropolitan area
      localGDP: 520.6, // Wikipedia/TelluBase 2023 (PPP)
      localBusinessRetention: 0.80,
      accommodationLocalPercent: 0.50,
      foodLocalPercent: 0.70
    },

    dataQuality: "🟢 Verified",

    sources: [
      {
        title: "Bad Bunny's Mexico City Concerts Expected To Bring Economic Windfall",
        source: "We Are Mitú",
        author: "Jorge Rodríguez-Jiménez",
        date: "2025-12-12",
        url: "https://wearemitu.com/wearemitu/entertainment/bad-bunny-economic-boost/",
        keyData: [
          "$177M impact (Canaco CDMX)",
          "90% hotel occupancy",
          "52,000 visitors from 77 countries",
          "Revenue: 70% tickets, 17% food, 12.9% hotels"
        ]
      },
      {
        title: "Bad Bunny Breaks Monthly Boxscore Record With Biggest Tour of December",
        source: "Billboard Boxscore",
        author: "Eric Frankenberg",
        date: "2026-01-29",
        url: "https://www.billboard.com/pro/bad-bunny-monthly-boxscore-record-december/",
        keyData: [
          "$86.7M revenue (Mexico City only)",
          "518,000 tickets sold",
          "6 shows Dec 10-12, 15-16, 19-21",
          "Highest gross & attendance at stadium ever",
          "December: $99.1M total, 633K tickets (all cities)"
        ]
      }
    ],

    lat: 19.4326,
    lng: -99.1332
  },

  {
    id: 2,
    city: "Santo Domingo",
    country: "🇩🇴 Dominican Republic",
    venue: "Estadio Olímpico Félix Sánchez",
    dates: ["2025-11-21", "2025-11-22"],

    shows: 2,
    economicImpactEstimate: 14_000_000, // Total economic impact, not just ticket revenue
    internationalVisitors: 15_000,
    cityGDP: 73_700_000_000, // Wikipedia: Greater Santo Domingo GDP (PPP) 2023, #14 in Latin America

    modelInputs: {
      shows: 2,
      attendancePerShow: 35000, // Estimated based on venue capacity
      avgTicketPrice: 120, // Estimated regional average
      touristPercent: 30, // Estimated
      avgStayDuration: 3,
      dailyAccommodation: 80,
      dailyFood: 50,
      dailyTransport: 25,
      dailyShopping: 40,
      dailyOther: 30,
      artistIsLocal: false,
      multiplier: 1.3,
      localGDP: 73.7, // Wikipedia/TelluBase 2023 (PPP)
      localBusinessRetention: 0.75,
      accommodationLocalPercent: 0.60,
      foodLocalPercent: 0.70
    },

    dataQuality: "🟡 Estimated",
    estimationNote: "Economic impact and tourist numbers verified. Ticket revenue and attendance estimated.",

    sources: [
      {
        title: "Bad Bunny concert generated US$14 million and attracted 15,000 tourists to DR",
        source: "De Último Minuto",
        date: "2025",
        url: "https://deultimominuto.net/en/economy/bad-bunny-concert-generated-us14-million-and-attracted-15000-tourists-to-dr-according-to-tourism/",
        keyData: ["$14M economic impact", "15,000 tourists attracted"]
      }
    ],

    lat: 18.4861,
    lng: -69.9312
  },

  {
    id: 3,
    city: "San José",
    country: "🇨🇷 Costa Rica",
    venue: "Estadio Nacional",
    dates: ["2025-12-05", "2025-12-06"],

    shows: 2,
    status: "Sold out in record time",
    venueCapacity: 35000,
    cityGDP: 45_000_000_000, // Estimated: ~45% of Costa Rica's $102B GDP (not in Wikipedia top 25)
    gdpEstimationNote: "San José metro area GDP estimated as ~45% of Costa Rica's national GDP ($102B). Not listed in Wikipedia's top 25 Latin American cities by GDP (PPP).",

    modelInputs: {
      shows: 2,
      attendancePerShow: 35000, // Based on venue capacity (sold out)
      avgTicketPrice: 110, // Estimated regional average
      touristPercent: 50, // Estimated
      avgStayDuration: 3,
      dailyAccommodation: 90,
      dailyFood: 55,
      dailyTransport: 30,
      dailyShopping: 45,
      dailyOther: 35,
      artistIsLocal: false,
      multiplier: 1.25,
      localGDP: 45, // Estimated (see gdpEstimationNote)
      localBusinessRetention: 0.75,
      accommodationLocalPercent: 0.55,
      foodLocalPercent: 0.70
    },

    dataQuality: "🟡 Estimated",
    estimationNote: "Sold out confirmed. Revenue and attendance estimated based on venue capacity.",

    sources: [
      {
        title: "Bad Bunny's Concerts in Costa Rica Sell Out in Record Time",
        source: "The Tico Times",
        date: "2025-05-13",
        url: "https://ticotimes.net/2025/05/13/bad-bunnys-concerts-in-costa-rica-sell-out-in-record-time",
        keyData: ["Sold out in record time", "Estadio Nacional"]
      }
    ],

    lat: 9.9281,
    lng: -84.0907
  },

  {
    id: 4,
    city: "Buenos Aires",
    country: "🇦🇷 Argentina",
    venue: "Estadio River Plate (El Monumental)",
    dates: ["2026-02-13", "2026-02-14", "2026-02-15"],

    // CONFIRMED DATA
    shows: 3,
    attendance: 240_000, // 80,000 × 3
    status: "Sold out",
    venueCapacity: 83_198,
    cityGDP: 356_800_000_000, // Wikipedia: Greater Buenos Aires GDP (PPP) 2023, #3 in Latin America

    // ESTIMATED (no official revenue published)
    avgTicketPrice: 120, // Regional estimate
    revenue: 28_800_000, // Calculated: 240,000 × $120

    modelInputs: {
      shows: 3,
      attendancePerShow: 80000,
      avgTicketPrice: 120,
      touristPercent: 25,
      avgStayDuration: 3,
      dailyAccommodation: 70,
      dailyFood: 50,
      dailyTransport: 25,
      dailyShopping: 40,
      dailyOther: 30,
      artistIsLocal: false,
      multiplier: 1.4,
      localGDP: 356.8, // Wikipedia/TelluBase 2023 (PPP)
      localBusinessRetention: 0.80,
      accommodationLocalPercent: 0.60,
      foodLocalPercent: 0.75
    },

    dataQuality: "🟡 Estimated",
    estimationNote: "Revenue estimated based on regional tour averages. Official figures not yet published.",

    sources: [
      {
        title: "Bad Bunny cerró su trilogía histórica en Argentina",
        source: "Infobae",
        date: "2026-02-16",
        url: "https://www.infobae.com/teleshow/2026/02/16/bad-bunny-cerro-su-trilogia-historica-en-argentina-rodeado-de-estrellas-de-la-musica-y-con-un-deslumbrante-show/",
        keyData: ["80,000 per show", "Sold out", "Third consecutive night"]
      },
      {
        title: "No Tickets for Bad Bunny in Argentina: 10 Facts",
        source: "Time Out Buenos Aires",
        date: "2026-02-06",
        url: "https://www.timeout.com/buenos-aires/bad-bunny-fun-facts-river-monumental-show-super-bowl-music",
        keyData: ["Sold out quickly", "Feb 13-15", "Post-Super Bowl"]
      }
    ],

    lat: -34.5453,
    lng: -58.4498
  }
];
