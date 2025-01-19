import {
  ChartContainer as RechartsContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Legend } from "recharts";
import { ChartContainer } from "./charts/ChartContainer";
import { chartConfig, mockChartData } from "./charts/ChartConfig";

const SystemPerformanceChart = () => {
  return (
    <ChartContainer 
      title="Support Categories Comparison" 
      subtitle="Current vs Previous Cycle"
    >
      <RechartsContainer config={chartConfig}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={mockChartData} 
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
              domain={[0, 'dataMax + 20']}
            />
            <ChartTooltip 
              content={<ChartTooltipContent />}
              wrapperClassName="!rounded-lg !shadow-md !bg-white !text-gray-900 !border !border-gray-200 !p-2"
              contentStyle={{ backgroundColor: 'white', border: 'none' }}
              itemStyle={{ color: '#1f2937' }}
              cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }}
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
      </RechartsContainer>
    </ChartContainer>
  );
};

export default SystemPerformanceChart;