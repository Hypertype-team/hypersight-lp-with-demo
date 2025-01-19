import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { format } from "date-fns";

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
  const [animatingNumbers, setAnimatingNumbers] = useState<{[key: string]: number}>({});
  
  const cycleKey = format(currentCycleStart, "yyyy-MM-dd");
  const departmentData = departmentDataByCycle[cycleKey as keyof typeof departmentDataByCycle] || departmentDataByCycle["2025-01-06"];
  const displayData = showAll ? departmentData : departmentData.slice(0, 3);

  useEffect(() => {
    // Initialize animation values
    const newAnimatingNumbers: {[key: string]: number} = {};
    departmentData.forEach(dept => {
      newAnimatingNumbers[dept.id] = parseInt(dept.percentage);
    });
    setAnimatingNumbers(newAnimatingNumbers);
  }, [cycleKey]);

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

  const getPercentageChange = (dept: any) => {
    if (!prevCycleKey || prevCycleKey === cycleKey) return null;
    const prevData = departmentDataByCycle[prevCycleKey as keyof typeof departmentDataByCycle];
    if (!prevData) return null;
    
    const prevDept = prevData.find(d => d.id === dept.id);
    if (!prevDept) return null;
    
    const current = parseInt(dept.percentage);
    const previous = parseInt(prevDept.percentage);
    return current - previous;
  };

  return (
    <div className="rounded-xl border bg-white p-4 shadow-lg transition-all duration-200 hover:shadow-xl">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Top Support Categories</h3>
        <p className="text-xs text-gray-500">Current cycle distribution</p>
      </div>
      <div className="space-y-4">
        {displayData.map((dept, index) => (
          <motion.div 
            key={dept.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.02,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => scrollToPriorityIssue(dept.id)}
            className={`
              flex items-start gap-4 p-2 rounded-lg 
              cursor-pointer
              transition-all duration-300
              hover:bg-gray-50
              ${selectedId === dept.id ? 'bg-gray-50 ring-2 ring-primary ring-opacity-50' : ''}
            `}
          >
            <span className="text-sm font-medium text-gray-500 mt-1">
              {index + 1}.
            </span>
            <div className="flex items-start gap-4 flex-1">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`${dept.id}-${dept.percentage}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.5 }
                  }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-2xl font-semibold relative"
                  style={{ color: dept.color }}
                >
                  <motion.span
                    initial={{ opacity: 1 }}
                    animate={{ 
                      opacity: 1,
                    }}
                    transition={{ 
                      duration: 0.5,
                      ease: "easeOut"
                    }}
                  >
                    {animatingNumbers[dept.id]}%
                  </motion.span>
                  {getPercentageChange(dept) !== null && (
                    <motion.span
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`absolute -top-3 -right-3 text-xs ${
                        getPercentageChange(dept)! > 0 
                          ? 'text-green-500' 
                          : getPercentageChange(dept)! < 0 
                            ? 'text-red-500' 
                            : 'text-gray-400'
                      }`}
                    >
                      {getPercentageChange(dept)! > 0 ? '+' : ''}
                      {getPercentageChange(dept)}%
                    </motion.span>
                  )}
                </motion.div>
              </AnimatePresence>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className="text-sm text-gray-900 font-medium truncate">{dept.name}</h4>
                  <motion.span 
                    key={`${dept.id}-${dept.trend}`}
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    className={`text-lg ${
                      dept.trend === "↑" ? "text-red-500" : 
                      dept.trend === "↓" ? "text-green-500" : 
                      "text-gray-400"
                    }`}
                  >
                    {dept.trend}
                  </motion.span>
                </div>
                <p className="text-xs text-gray-500 italic">{dept.tickets} Tickets this Cycle</p>
              </div>
            </div>
          </motion.div>
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