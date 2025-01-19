import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const departmentData = [
  { name: "Product Development", tickets: 245, color: "#4776e6", percentage: "31%" },
  { name: "Operations", tickets: 180, color: "#8a56e9", percentage: "23%" },
  { name: "Payment Processing", tickets: 156, color: "#9b87f5", percentage: "20%" },
  { name: "Customer Support", tickets: 210, color: "#7E69AB", percentage: "26%" }
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-lg shadow-md p-2">
        <p className="font-medium text-sm text-gray-800">{payload[0].name}</p>
        <p className="text-xs text-gray-600">
          <span className="font-medium">{payload[0].value}</span> tickets ({payload[0].payload.percentage})
        </p>
      </div>
    );
  }
  return null;
};

const DepartmentTickets = () => {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-lg transition-all duration-200 hover:shadow-xl">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Top Department Issues</h3>
        <p className="text-xs text-gray-500">Distribution of support tickets</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="w-1/2 h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={departmentData}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={4}
                dataKey="tickets"
                nameKey="name"
              >
                {departmentData.map((entry) => (
                  <Cell 
                    key={entry.name} 
                    fill={entry.color}
                    stroke="white"
                    strokeWidth={2}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="w-1/2 space-y-2">
          {departmentData.map((dept) => (
            <div key={dept.name} className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div 
                  className="w-2 h-2 rounded-full" 
                  style={{ backgroundColor: dept.color }}
                />
                <span className="text-gray-700">{dept.name}</span>
              </div>
              <span className="font-medium text-gray-900">{dept.percentage}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepartmentTickets;