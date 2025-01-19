import React from "react";
import { format, isEqual } from "date-fns";

interface DashboardMetricsProps {
  currentCycleStart: Date;
}

const cycleData = {
  "2025-01-06": {
    totalTickets: 1234,
    ticketsChange: 12,
    responseTime: 2.4,
    responseTimeChange: -5,
    satisfaction: 94,
    satisfactionChange: 3
  },
  "2024-12-23": {
    totalTickets: 1102,
    ticketsChange: 8,
    responseTime: 2.5,
    responseTimeChange: -2,
    satisfaction: 91,
    satisfactionChange: 1
  }
};

const DashboardMetrics = ({ currentCycleStart }: DashboardMetricsProps) => {
  const cycleKey = format(currentCycleStart, "yyyy-MM-dd");
  const metrics = cycleData[cycleKey as keyof typeof cycleData] || cycleData["2025-01-06"];

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h3 className="text-sm font-medium text-gray-500">Total Tickets</h3>
        <p className="mt-2 text-3xl font-bold">{metrics.totalTickets}</p>
        <p className={`mt-1 text-sm ${metrics.ticketsChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {metrics.ticketsChange >= 0 ? '↑' : '↓'} {Math.abs(metrics.ticketsChange)}% from last cycle
        </p>
      </div>
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h3 className="text-sm font-medium text-gray-500">Response Time</h3>
        <p className="mt-2 text-3xl font-bold">{metrics.responseTime}h</p>
        <p className={`mt-1 text-sm ${metrics.responseTimeChange <= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {metrics.responseTimeChange <= 0 ? '↓' : '↑'} {Math.abs(metrics.responseTimeChange)}% from last cycle
        </p>
      </div>
      <div className="rounded-xl border bg-white p-6 shadow-sm">
        <h3 className="text-sm font-medium text-gray-500">Customer Satisfaction</h3>
        <p className="mt-2 text-3xl font-bold">{metrics.satisfaction}%</p>
        <p className={`mt-1 text-sm ${metrics.satisfactionChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {metrics.satisfactionChange >= 0 ? '↑' : '↓'} {Math.abs(metrics.satisfactionChange)}% from last cycle
        </p>
      </div>
    </div>
  );
};

export default DashboardMetrics;