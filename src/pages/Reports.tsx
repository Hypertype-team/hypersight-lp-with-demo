import DashboardLayout from "@/components/layouts/DashboardLayout";
import PriorityIssues from "@/components/dashboard/PriorityIssues";
import DepartmentTickets from "@/components/dashboard/DepartmentTickets";
import SystemPerformanceChart from "@/components/dashboard/SystemPerformanceChart";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { addDays, format, subDays, isAfter } from "date-fns";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

const Reports = () => {
  const [currentCycleStart, setCurrentCycleStart] = useState(new Date(2024, 1, 26)); // Feb 26, 2024
  const cycleLength = 14; // 14 days per cycle
  const futureDataDate = new Date(2025, 0, 20); // Jan 20, 2025

  const handlePreviousCycle = () => {
    setCurrentCycleStart(prevDate => subDays(prevDate, cycleLength));
  };

  const handleNextCycle = () => {
    const nextDate = addDays(currentCycleStart, cycleLength);
    if (!isAfter(nextDate, futureDataDate)) {
      setCurrentCycleStart(nextDate);
    }
  };

  const cycleEndDate = addDays(currentCycleStart, cycleLength - 1);
  const cycleDateRange = `${format(currentCycleStart, 'MMM d')} - ${format(cycleEndDate, 'MMM d, yyyy')}`;
  const isFutureCycle = isAfter(currentCycleStart, futureDataDate);
  const isNextCycleDisabled = isAfter(addDays(currentCycleStart, cycleLength), futureDataDate);

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
              disabled={isNextCycleDisabled}
              className={`flex items-center gap-2 rounded-lg border px-4 py-2 text-sm transition-colors ${
                isNextCycleDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
              }`}
            >
              Next Cycle
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {isFutureCycle ? (
          <div className="flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-b from-blue-50 to-white rounded-lg">
            <div className="max-w-2xl text-center space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon! 🚀</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                We're excited about your enthusiasm! The reports for this cycle will be available starting January 20th, 2025.
                Check back then to explore the latest insights and trends.
              </p>
              <p className="text-lg text-gray-600">
                In the meantime, feel free to explore the previous cycles' data to gain valuable insights into your support performance.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DepartmentTickets />
              <SystemPerformanceChart />
            </div>
            <PriorityIssues />
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Reports;