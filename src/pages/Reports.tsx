import DashboardLayout from "@/components/layouts/DashboardLayout";
import PriorityIssues from "@/components/dashboard/PriorityIssues";
import DepartmentTickets from "@/components/dashboard/DepartmentTickets";
import SystemPerformanceChart from "@/components/dashboard/SystemPerformanceChart";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { addDays, format, subDays } from "date-fns";

const Reports = () => {
  const [currentCycleStart, setCurrentCycleStart] = useState(new Date(2024, 1, 26)); // Feb 26, 2024
  const cycleLength = 14; // 14 days per cycle

  const handlePreviousCycle = () => {
    setCurrentCycleStart(prevDate => subDays(prevDate, cycleLength));
  };

  const handleNextCycle = () => {
    setCurrentCycleStart(prevDate => addDays(prevDate, cycleLength));
  };

  const cycleEndDate = addDays(currentCycleStart, cycleLength - 1);
  const cycleDateRange = `${format(currentCycleStart, 'MMM d')} - ${format(cycleEndDate, 'MMM d, yyyy')}`;

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Support Analytics Reports</h1>
          <p className="text-gray-600">Detailed analysis and insights from your support data</p>
        </div>

        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={handlePreviousCycle}
              className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous Cycle
            </button>
            <div className="text-sm font-medium">
              Cycle: {cycleDateRange}
            </div>
            <button 
              onClick={handleNextCycle}
              className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-gray-50 transition-colors"
            >
              Next Cycle
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DepartmentTickets />
          <SystemPerformanceChart />
        </div>
        <PriorityIssues />
      </div>
    </DashboardLayout>
  );
};

export default Reports;