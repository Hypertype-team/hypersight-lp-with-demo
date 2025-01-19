export const chartConfig = {
  currentCycle: {
    theme: {
      light: "#4776e6",
      dark: "#8a56e9",
    },
    label: "Current Cycle",
  },
  previousCycle: {
    theme: {
      light: "#9b87f5",
      dark: "#7E69AB",
    },
    label: "Previous Cycle",
  },
};

export const mockChartData = [
  { 
    category: "User Authentication",
    currentCycle: 245,
    previousCycle: 180,
  },
  { 
    category: "Data Integration",
    currentCycle: 210,
    previousCycle: 195,
  },
  { 
    category: "API Connection",
    currentCycle: 155,
    previousCycle: 140,
  },
  { 
    category: "Performance",
    currentCycle: 132,
    previousCycle: 145,
  },
  { 
    category: "Feature Requests",
    currentCycle: 128,
    previousCycle: 110,
  }
];