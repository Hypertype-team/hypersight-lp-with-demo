import { format } from "date-fns";

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

const mockDataByCycle = {
  "2025-01-06": [
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
  ],
  "2024-12-23": [
    { 
      category: "User Authentication",
      currentCycle: 220,
      previousCycle: 195,
    },
    { 
      category: "Data Integration",
      currentCycle: 235,
      previousCycle: 180,
    },
    { 
      category: "API Connection",
      currentCycle: 145,
      previousCycle: 160,
    },
    { 
      category: "Performance",
      currentCycle: 142,
      previousCycle: 130,
    },
    { 
      category: "Feature Requests",
      currentCycle: 132,
      previousCycle: 125,
    }
  ]
};

export const getMockChartData = (currentCycleStart: Date) => {
  const cycleKey = format(currentCycleStart, "yyyy-MM-dd");
  return mockDataByCycle[cycleKey as keyof typeof mockDataByCycle] || mockDataByCycle["2025-01-06"];
};