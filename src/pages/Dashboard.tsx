import DashboardLayout from "@/components/layouts/DashboardLayout";
import DashboardMetrics from "@/components/dashboard/DashboardMetrics";
import SystemPerformanceChart from "@/components/dashboard/SystemPerformanceChart";
import DepartmentTickets from "@/components/dashboard/DepartmentTickets";
import TeamPerformance from "@/components/dashboard/TeamPerformance";

const Dashboard = () => {
  const defaultCycleStart = new Date(2025, 0, 6); // January 6th, 2025

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Dashboard Overview</h1>
          <p className="text-gray-600">Welcome to your support analytics dashboard</p>
        </div>
        
        <DashboardMetrics currentCycleStart={defaultCycleStart} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SystemPerformanceChart currentCycleStart={defaultCycleStart} />
          <DepartmentTickets currentCycleStart={defaultCycleStart} />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TeamPerformance />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;