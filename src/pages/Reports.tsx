import DashboardLayout from "@/components/layouts/DashboardLayout";
import PriorityIssues from "@/components/dashboard/PriorityIssues";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Reports = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Support Analytics Reports</h1>
          <p className="text-gray-600">Detailed analysis and insights from your support data</p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex gap-4">
            <select className="rounded-lg border px-4 py-2 text-sm">
              <option>All Departments</option>
              <option>Product Development</option>
              <option>Operations</option>
              <option>Customer Support</option>
            </select>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-gray-50">
              <ChevronLeft className="h-4 w-4" />
              Previous Cycle
            </button>
            <div className="text-sm font-medium">
              Cycle: Feb 26 - Mar 11, 2024
            </div>
            <button className="flex items-center gap-2 rounded-lg border px-4 py-2 text-sm hover:bg-gray-50">
              Next Cycle
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <PriorityIssues />
      </div>
    </DashboardLayout>
  );
};

export default Reports;