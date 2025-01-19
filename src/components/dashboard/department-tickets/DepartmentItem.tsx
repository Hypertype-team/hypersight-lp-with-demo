import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

interface DepartmentItemProps {
  name: string;
  tickets: number;
  color: string;
  percentage: string;
  trend: string;
  id: string;
  index: number;
  selectedId: string | null;
  previousPercentage?: number;
  onItemClick: (id: string) => void;
}

const DepartmentItem = ({
  name,
  tickets,
  color,
  percentage,
  trend,
  id,
  index,
  selectedId,
  previousPercentage,
  onItemClick
}: DepartmentItemProps) => {
  const currentPercentage = parseInt(percentage);
  const hasChanged = previousPercentage !== undefined && previousPercentage !== currentPercentage;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onItemClick(id)}
      className={`
        flex items-start gap-4 p-2 rounded-lg 
        cursor-pointer
        transition-all duration-300
        hover:bg-gray-50
        ${selectedId === id ? 'bg-gray-50 ring-2 ring-primary ring-opacity-50' : ''}
      `}
    >
      <span className="text-sm font-medium text-gray-500 mt-1">
        {index + 1}.
      </span>
      <div className="flex items-start gap-4 flex-1">
        <motion.div 
          key={`${id}-${percentage}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5 }
          }}
          exit={{ opacity: 0, y: -10 }}
          className="text-2xl font-semibold relative"
          style={{ color }}
        >
          <CountUp
            start={previousPercentage || currentPercentage}
            end={currentPercentage}
            duration={1}
            decimals={0}
            suffix="%"
            useEasing={true}
          />
          {hasChanged && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`absolute -top-3 -right-3 text-xs ${
                currentPercentage > (previousPercentage || 0)
                  ? 'text-green-500' 
                  : currentPercentage < (previousPercentage || 0)
                    ? 'text-red-500' 
                    : 'text-gray-400'
              }`}
            >
              {currentPercentage > (previousPercentage || 0) ? '+' : ''}
              {currentPercentage - (previousPercentage || 0)}%
            </motion.span>
          )}
        </motion.div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h4 className="text-sm text-gray-900 font-medium truncate">{name}</h4>
            <motion.span 
              key={`${id}-${trend}`}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              className={`text-lg ${
                trend === "↑" ? "text-red-500" : 
                trend === "↓" ? "text-green-500" : 
                "text-gray-400"
              }`}
            >
              {trend}
            </motion.span>
          </div>
          <p className="text-xs text-gray-500 italic">{tickets} Tickets this Cycle</p>
        </div>
      </div>
    </motion.div>
  );
};

export default DepartmentItem;