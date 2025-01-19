import React, { useState } from "react";

const departmentData = [
  { name: "User Authentication & Access", tickets: 245, color: "#4776e6", percentage: "28%", trend: "↑" },
  { name: "Data Integration Issues", tickets: 210, color: "#8a56e9", percentage: "24%", trend: "→" },
  { name: "Performance & Loading", tickets: 156, color: "#9b87f5", percentage: "18%", trend: "↓" },
  { name: "API Connection Errors", tickets: 132, color: "#7E69AB", percentage: "15%", trend: "→" },
  { name: "Feature Requests", tickets: 128, color: "#6c5dd3", percentage: "15%", trend: "↑" }
];

const DepartmentTickets = () => {
  const [showAll, setShowAll] = useState(false);
  const displayData = showAll ? departmentData : departmentData.slice(0, 5);

  return (
    <div className="rounded-xl border bg-white p-4 shadow-lg transition-all duration-200 hover:shadow-xl">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Top Support Categories</h3>
        <p className="text-xs text-gray-500">Current cycle distribution</p>
      </div>
      <div className="space-y-3">
        {displayData.map((dept, index) => (
          <div 
            key={dept.name} 
            className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-gray-500 w-6">
                {index + 1}.
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-900">{dept.name}</span>
                  <span className="text-xs text-gray-500">{dept.trend}</span>
                </div>
                <span className="text-xs text-gray-500">{dept.tickets} tickets this cycle</span>
              </div>
            </div>
            <div 
              className="text-sm font-semibold"
              style={{ color: dept.color }}
            >
              {dept.percentage}
            </div>
          </div>
        ))}
      </div>
      {departmentData.length > 5 && (
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