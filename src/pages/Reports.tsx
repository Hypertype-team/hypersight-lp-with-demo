import DashboardLayout from "@/components/layouts/DashboardLayout";
import PriorityIssues from "@/components/dashboard/PriorityIssues";
import DepartmentTickets from "@/components/dashboard/DepartmentTickets";
import SystemPerformanceChart from "@/components/dashboard/SystemPerformanceChart";
import ReportSharing from "@/components/dashboard/ReportSharing";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { addDays, format, subDays, isAfter } from "date-fns";
import { FutureDataMessage } from "@/components/dashboard/FutureDataMessage";

const Reports = () => {
  const [currentCycleStart, setCurrentCycleStart] = useState(() => new Date(2025, 0, 6));
  
  const cycleLength = 14;
  const futureDataDate = new Date(2025, 1, 3);

  const handlePreviousCycle = () => {
    setCurrentCycleStart(prevDate => subDays(prevDate, cycleLength));
  };

  const handleNextCycle = () => {
    const nextDate = addDays(currentCycleStart, cycleLength);
    if (!isAfter(nextDate, addDays(futureDataDate, -cycleLength))) {
      setCurrentCycleStart(nextDate);
    }
  };

  const cycleEndDate = addDays(currentCycleStart, cycleLength - 1);
  const cycleDateRange = `${format(currentCycleStart, 'MMM d')} - ${format(cycleEndDate, 'MMM d, yyyy')}`;
  const isFutureCycle = isAfter(currentCycleStart, new Date(2025, 0, 19));
  const isNextCycleDisabled = isAfter(addDays(currentCycleStart, cycleLength), addDays(futureDataDate, -cycleLength));

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Support Analytics Reports</h1>
            <p className="text-gray-600">Detailed analysis and insights from your support data</p>
          </div>
          <ReportSharing />
        </div>

        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-4">
            <Button 
              onClick={handlePreviousCycle}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous Cycle
            </Button>
            <div className="text-sm font-medium">
              Cycle: {cycleDateRange}
            </div>
            <Button 
              onClick={handleNextCycle}
              disabled={isNextCycleDisabled}
              variant="outline"
              className={`flex items-center gap-2 ${
                isNextCycleDisabled ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Next Cycle
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {isFutureCycle ? (
          <FutureDataMessage />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DepartmentTickets currentCycleStart={currentCycleStart} />
              <SystemPerformanceChart currentCycleStart={currentCycleStart} />
            </div>
            <PriorityIssues currentCycleStart={currentCycleStart} />
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Reports;