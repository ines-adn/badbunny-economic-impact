/**
 * Economic Impact Model based on Saayman & Saayman (2004)
 * "Economic impact of cultural events"
 * South African Journal of Economic and Management Sciences, 7(4), 622-648.
 */

/**
 * STEP 1: Calculate Direct Cash Injection
 * Sum of all direct spending by attendees (tickets + tourist spending)
 */
export const calculateDirectSpending = (data) => {
  const {
    shows,
    attendancePerShow,
    avgTicketPrice,
    touristPercent,
    avgStayDuration,
    dailyAccommodation,
    dailyFood,
    dailyTransport,
    dailyShopping,
    dailyOther
  } = data;

  const totalAttendance = shows * attendancePerShow;
  const tourists = totalAttendance * (touristPercent / 100);

  const ticketRevenue = totalAttendance * avgTicketPrice;
  const accommodation = tourists * avgStayDuration * dailyAccommodation;
  const food = tourists * avgStayDuration * dailyFood;
  const transport = tourists * avgStayDuration * dailyTransport;
  const shopping = tourists * avgStayDuration * dailyShopping;
  const other = tourists * avgStayDuration * dailyOther;

  const total = ticketRevenue + accommodation + food + transport + shopping + other;

  return {
    ticketRevenue,
    accommodation,
    food,
    transport,
    shopping,
    other,
    total,
    breakdown: {
      'Ticket Revenue': ticketRevenue,
      'Accommodation': accommodation,
      'Food & Beverage': food,
      'Transport': transport,
      'Shopping': shopping,
      'Other': other
    }
  };
};

/**
 * STEP 2: Calculate Leakages
 * Money that leaves the local economy (based on empirical surveys)
 *
 * Ticket revenue breakdown (NITO, 2024):
 * Source: National Independent Talent Organization
 * - "What Artists Earn From Ticket Sales: A Revealing Revenue Breakdown"
 * - https://www.hypebot.com/what-artists-earn-from-ticket-sales-a-revealing-revenue-breakdown/
 * - https://celebrityaccess.com/2024/11/26/nito-breaks-down-where-the-money-fans-spend-on-tickets-actually-goes/
 *
 * Per $100 ticket:
 * - ~22% ticketing fees (Ticketmaster, etc.) → leakage
 * - ~30% local production costs (venue, staff, sound, security) → stays local
 * - ~48% remaining split: 85% to artist ($40.80), 15% to promoter ($7.20)
 * - Artist net profit: only ~$8.16 after expenses (band, travel, equipment, commissions)
 *
 * Total ticket leakage: ~62-70% for non-local artists, ~22% for local artists
 */
export const calculateLeakages = (directSpending, data) => {
  const {
    artistIsLocal = false,           // Is the artist local?
    localBusinessRetention = 0.70,   // % that stays with local businesses
    accommodationLocalPercent = 0.50, // % of hotels that are locally owned
    foodLocalPercent = 0.70           // % of restaurants that are locally owned
  } = data;

  // Ticket revenue leakages (based on industry data)
  const ticketingFees = directSpending.ticketRevenue * 0.22;  // Platform fees
  const localProduction = directSpending.ticketRevenue * 0.30; // Stays local (NOT leakage)
  const artistShare = directSpending.ticketRevenue * 0.48;     // Goes to artist

  // If artist is non-local, their share leaves the economy
  const artistLeakage = artistIsLocal ? 0 : artistShare;
  const totalTicketLeakage = ticketingFees + artistLeakage;

  // Tourist spending leakages (from supply-side surveys)
  // Chain hotels/restaurants send profits elsewhere
  const accommodationLeakage = directSpending.accommodation * (1 - accommodationLocalPercent * localBusinessRetention);
  const foodLeakage = directSpending.food * (1 - foodLocalPercent * localBusinessRetention);

  // Imports (goods not produced locally)
  const importLeakage = (directSpending.shopping + directSpending.other) * 0.25;

  const totalLeakages = totalTicketLeakage + accommodationLeakage + foodLeakage + importLeakage;
  const netLocalInjection = directSpending.total - totalLeakages;

  return {
    ticketingFees,
    artistLeakage,
    localProduction,
    totalTicketLeakage,
    accommodationLeakage,
    foodLeakage,
    importLeakage,
    totalLeakages,
    netLocalInjection,
    leakageRate: (totalLeakages / directSpending.total) * 100,
    breakdown: {
      'Ticketing platform fees': ticketingFees,
      'Artist share (non-local)': artistLeakage,
      'Local production (retained)': -localProduction, // Negative = stays local
      'Non-local accommodation profits': accommodationLeakage,
      'Non-local food/beverage profits': foodLeakage,
      'Imports (goods from outside)': importLeakage
    }
  };
};

/**
 * STEP 3: Apply Economic Multiplier
 * Total economic impact = Net local injection × Empirically estimated multiplier
 *
 * The multiplier captures indirect + induced effects through circulation in the local economy:
 * - Indirect: Local businesses purchase from other local suppliers
 * - Induced: Employees spend wages at local businesses
 *
 * Multiplier values (empirically estimated from surveys, following Archer 1976-1977):
 * - Small islands/regions: 1.2-1.3 (high leakages)
 * - Medium cities: 1.3-1.5
 * - Large metropolitan areas: 1.4-1.6 (lower leakages)
 *
 * Note: The paper uses demand-side (400 visitor surveys) and supply-side
 * (~50 business surveys) to estimate leakages, not detailed input-output models.
 */
export const calculateMultiplierEffect = (netLocalInjection, data) => {
  const {
    multiplier = 1.25,  // Empirically estimated constant
    localGDP            // In billions USD
  } = data;

  const totalEconomicImpact = netLocalInjection * multiplier;
  const gdpImpact = (totalEconomicImpact / (localGDP * 1_000_000_000)) * 100;

  return {
    netLocalInjection,
    multiplier,
    totalEconomicImpact,
    gdpImpact: parseFloat(gdpImpact.toFixed(3)),
    gdpImpactPercentage: `${gdpImpact.toFixed(3)}%`,
    note: 'Multiplier is empirically estimated from surveys, not calculated from components'
  };
};

/**
 * COMPLETE ECONOMIC IMPACT CALCULATION
 * Runs all 3 steps of the Saayman & Saayman model
 */
export const calculateEconomicImpact = (inputData) => {
  const step1_directSpending = calculateDirectSpending(inputData);
  const step2_leakages = calculateLeakages(step1_directSpending, inputData);
  const step3_impact = calculateMultiplierEffect(step2_leakages.netLocalInjection, inputData);

  return {
    step1_directSpending,
    step2_leakages,
    step3_impact,
    methodology: "Saayman & Saayman (2004)",
    summary: {
      totalDirectSpending: step1_directSpending.total,
      totalLeakages: step2_leakages.totalLeakages,
      netLocalInjection: step2_leakages.netLocalInjection,
      multiplier: step3_impact.multiplier,
      totalEconomicImpact: step3_impact.totalEconomicImpact,
      gdpImpact: step3_impact.gdpImpact
    }
  };
};

/**
 * Format number as currency
 */
export const formatCurrency = (num, compact = false) => {
  // Handle undefined/null/NaN
  if (num === undefined || num === null || isNaN(num)) {
    return '$0';
  }

  if (compact) {
    if (num >= 1_000_000_000) return `$${(num / 1_000_000_000).toFixed(1)}B`;
    if (num >= 1_000_000) return `$${(num / 1_000_000).toFixed(1)}M`;
    if (num >= 1_000) return `$${(num / 1_000).toFixed(0)}K`;
  }
  return `$${num.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
};
