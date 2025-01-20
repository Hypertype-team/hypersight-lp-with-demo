import { MobileWarningDialog } from "@/components/MobileWarningDialog";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { useEffect, useState } from "react";
import { addDays } from "date-fns";
import DashboardMetrics from "@/components/dashboard/DashboardMetrics";
import DepartmentTickets from "@/components/dashboard/DepartmentTickets";
import SystemPerformanceChart from "@/components/dashboard/SystemPerformanceChart";
import TeamPerformance from "@/components/dashboard/TeamPerformance";

const Demo = () => {
  const [currentCycleStart] = useState(() => new Date(2025, 0, 6));

  useEffect(() => {
    document.title = "Demo - Hypersight";
  }, []);

  return (
    <>
      <MobileWarningDialog />
      <DashboardLayout>
        <div className="space-y-8">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Support Analytics Demo</h1>
            <p className="text-gray-600">Example dashboard with sample support data</p>
          </div>
          <DashboardMetrics currentCycleStart={currentCycleStart} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DepartmentTickets currentCycleStart={currentCycleStart} />
            <SystemPerformanceChart currentCycleStart={currentCycleStart} />
          </div>
          <TeamPerformance />
        </div>
      </DashboardLayout>
    </>
  );
};

export default Demo;