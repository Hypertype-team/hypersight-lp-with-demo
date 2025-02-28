import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import DepartmentItem from "./department-tickets/DepartmentItem";

const departmentDataByCycle = {
  "2025-01-06": [
    { name: "User Authentication & Access", tickets: 245, color: "#4776e6", percentage: "28", trend: "↑", id: "auth" },
    { name: "Data Integration Issues", tickets: 210, color: "#8a56e9", percentage: "24", trend: "↓", id: "data" },
    { name: "API Connection Errors", tickets: 155, color: "#9b87f5", percentage: "18", trend: "→", id: "api" },
    { name: "Performance & Loading", tickets: 132, color: "#7E69AB", percentage: "15", trend: "→", id: "performance" },
    { name: "Feature Requests", tickets: 128, color: "#6c5dd3", percentage: "15", trend: "↑", id: "features" }
  ],
  "2024-12-23": [
    { name: "User Authentication & Access", tickets: 220, color: "#4776e6", percentage: "25", trend: "→", id: "auth" },
    { name: "Data Integration Issues", tickets: 235, color: "#8a56e9", percentage: "27", trend: "↑", id: "data" },
    { name: "API Connection Errors", tickets: 145, color: "#9b87f5", percentage: "17", trend: "↓", id: "api" },
    { name: "Performance & Loading", tickets: 142, color: "#7E69AB", percentage: "16", trend: "↑", id: "performance" },
    { name: "Feature Requests", tickets: 132, color: "#6c5dd3", percentage: "15", trend: "→", id: "features" }
  ]
};

interface DepartmentTicketsProps {
  currentCycleStart: Date;
}

const DepartmentTickets = ({ currentCycleStart }: DepartmentTicketsProps) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [prevCycleKey, setPrevCycleKey] = useState<string>("");
  
  const cycleKey = format(currentCycleStart, "yyyy-MM-dd");
  const departmentData = departmentDataByCycle[cycleKey as keyof typeof departmentDataByCycle] || departmentDataByCycle["2025-01-06"];
  const displayData = showAll ? departmentData : departmentData.slice(0, 3);

  useEffect(() => {
    setPrevCycleKey(cycleKey);
  }, [cycleKey]);

  const scrollToPriorityIssue = (id: string) => {
    const element = document.getElementById(`priority-${id}`);
    if (element) {
      setSelectedId(id);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getPreviousPercentage = (dept: any) => {
    if (!prevCycleKey || prevCycleKey === cycleKey) return undefined;
    const prevData = departmentDataByCycle[prevCycleKey as keyof typeof departmentDataByCycle];
    if (!prevData) return undefined;
    
    const prevDept = prevData.find(d => d.id === dept.id);
    return prevDept ? parseInt(prevDept.percentage) : undefined;
  };

  return (
    <div className="rounded-xl border bg-white p-4 shadow-lg transition-all duration-200 hover:shadow-xl">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Top Support Categories</h3>
        <p className="text-xs text-gray-500">Current cycle distribution</p>
      </div>
      <div className="space-y-4">
        {displayData.map((dept, index) => (
          <DepartmentItem
            key={dept.id}
            {...dept}
            index={index}
            selectedId={selectedId}
            previousPercentage={getPreviousPercentage(dept)}
            onItemClick={scrollToPriorityIssue}
          />
        ))}
      </div>
      {departmentData.length > 3 && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowAll(!showAll)}
          className="mt-4 text-sm text-primary hover:text-primary/80 transition-colors"
        >
          {showAll ? "Show Less" : "Show More"}
        </motion.button>
      )}
    </div>
  );
};

export default DepartmentTickets;