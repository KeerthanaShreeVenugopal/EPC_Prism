export const dashboardData = {
  financial: {
    plannedBudget: 12000000,
    actualBudget: 12800000,
    earnedValue: 11800000,
    forecastCost: 13500000,
    baselineCost: 12500000,

    monthlyTrend: {
      planned: [10, 11, 12, 13, 14, 15],
      actual: [9, 12, 13, 14, 16, 18],
      earned: [8, 10, 11, 12, 14, 15],
      forecast: [10, 13, 14, 16, 17, 19],
      baseline: [10, 11, 12, 13, 14, 15],
    },
  },

  productivity: {
    labor: [65, 70, 75, 80, 85, 90],
    equipment: [60, 65, 70, 78, 82, 88],
    ppc: 87,
  },

  safety: {
    incidentRate: 2.3,
    inspectionPassRate: 94,
    reworkRate: 4,
  },

  risk: {
    openRFIs: 12,
    criticalRisks: 4,
    mediumRisks: 8,
    lowRisks: 15,
  },

  changeOrders: [
    { id: "CO-01", status: "Approved", value: 500000 },
    { id: "CO-02", status: "Pending", value: 300000 },
    { id: "CO-03", status: "Rejected", value: 120000 },
    { id: "CO-04", status: "Approved", value: 750000 },
  ],

  portfolio: [
    { name: "Highway Expansion", status: "On Track", budget: 4.2 },
    { name: "Metro Line Phase 2", status: "At Risk", budget: 3.5 },
    { name: "Smart City Block A", status: "Delayed", budget: 2.8 },
  ],
};
  