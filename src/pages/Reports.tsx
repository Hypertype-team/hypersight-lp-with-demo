import DashboardLayout from "@/components/layouts/DashboardLayout";
import PriorityIssues from "@/components/dashboard/PriorityIssues";

const Reports = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">Support Analytics Reports</h1>
          <p className="text-gray-600">Detailed analysis and insights from your support data</p>
        </div>

        <div className="flex gap-4 mb-6">
          <select className="rounded-lg border px-4 py-2 text-sm">
            <option>All Departments</option>
            <option>Product Development</option>
            <option>Operations</option>
            <option>Customer Support</option>
          </select>
          <select className="rounded-lg border px-4 py-2 text-sm">
            <option>Last 30 Days</option>
            <option>Last Quarter</option>
            <option>Last Year</option>
            <option>Custom Range</option>
          </select>
          <button className="rounded-lg bg-primary text-white px-4 py-2 text-sm hover:bg-primary/90 transition-colors">
            Generate Report
          </button>
        </div>

        <PriorityIssues />
      </div>
    </DashboardLayout>
  );
};

export default Reports;