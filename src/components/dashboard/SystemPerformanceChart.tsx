import React from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend } from "recharts";

const chartData = [
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

const config = {
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

const SystemPerformanceChart = () => {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-lg transition-all duration-200 hover:shadow-xl">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Support Categories Comparison</h3>
        <p className="mt-1 text-sm text-gray-500">Current vs Previous Cycle</p>
      </div>
      <div className="relative aspect-[16/9] w-full max-h-[300px]">
        <ChartContainer config={config}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={chartData} 
              margin={{ top: 20, right: 30, left: 20, bottom: 70 }}
              barGap={8}
            >
              <XAxis 
                dataKey="category" 
                tickLine={false}
                axisLine={true}
                angle={-45}
                textAnchor="end"
                height={70}
                dy={35}
                tick={{ fill: '#6b7280', fontSize: 12 }}
              />
              <YAxis 
                tickLine={false}
                axisLine={true}
                dx={-10}
                tick={{ fill: '#6b7280', fontSize: 12 }}
              />
              <ChartTooltip 
                content={<ChartTooltipContent />}
                wrapperClassName="rounded-lg shadow-md bg-white/90 backdrop-blur-sm border border-gray-100 p-2"
              />
              <Legend 
                verticalAlign="top"
                height={36}
                wrapperStyle={{
                  paddingBottom: '20px'
                }}
              />
              <Bar
                dataKey="currentCycle"
                fill="#4776e6"
                name="Current Cycle"
                radius={[4, 4, 0, 0]}
                maxBarSize={40}
              />
              <Bar
                dataKey="previousCycle"
                fill="#9b87f5"
                name="Previous Cycle"
                radius={[4, 4, 0, 0]}
                maxBarSize={40}
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default SystemPerformanceChart;