import React, { useState } from "react";

const departmentData = [
  { name: "User Authentication & Access", tickets: 245, color: "#4776e6", percentage: "28%", trend: "↑" },
  { name: "Data Integration Issues", tickets: 210, color: "#8a56e9", percentage: "24%", trend: "↓" },
  { name: "API Connection Errors", tickets: 155, color: "#9b87f5", percentage: "18%", trend: "→" },
  { name: "Performance & Loading", tickets: 132, color: "#7E69AB", percentage: "15%", trend: "→" },
  { name: "Feature Requests", tickets: 128, color: "#6c5dd3", percentage: "15%", trend: "↑" }
];

const DepartmentTickets = () => {
  const [showAll, setShowAll] = useState(false);
  const displayData = showAll ? departmentData : departmentData.slice(0, 3);

  return (
    <div className="rounded-xl border bg-white p-4 shadow-lg transition-all duration-200 hover:shadow-xl">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Top Support Categories</h3>
        <p className="text-xs text-gray-500">Current cycle distribution</p>
      </div>
      <div className="space-y-4">
        {displayData.map((dept, index) => (
          <div 
            key={dept.name} 
            className="flex items-start gap-4 p-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm font-medium text-gray-500 mt-1">
              {index + 1}.
            </span>
            <div className="flex items-start gap-4 flex-1">
              <div 
                className="text-2xl font-semibold"
                style={{ color: dept.color }}
              >
                {dept.percentage}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm text-gray-900 font-medium truncate">{dept.name}</h4>
                  <span className={`text-lg ${
                    dept.trend === "↑" ? "text-red-500" : 
                    dept.trend === "↓" ? "text-green-500" : 
                    "text-gray-400"
                  }`}>
                    {dept.trend}
                  </span>
                </div>
                <p className="text-xs text-gray-500 italic">{dept.tickets} Tickets this Cycle</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {departmentData.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-4 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default DepartmentTickets;