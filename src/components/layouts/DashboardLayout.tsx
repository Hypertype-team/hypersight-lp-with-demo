import { Home, BarChart2, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 p-4">
        <div className="mb-8 px-4">
          <img
            src="/lovable-uploads/99af36c9-7743-4308-adc1-ee20870b7654.png"
            alt="Hypersight Logo"
            className="w-32"
          />
        </div>
        <nav className="space-y-2">
          <Link
            to="/dashboard"
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
              isActive('/dashboard') 
                ? 'bg-primary text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
          <Link
            to="/reports"
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
              isActive('/reports') 
                ? 'bg-primary text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <BarChart2 className="w-5 h-5" />
            <span>Reports</span>
          </Link>
          <Link
            to="/settings"
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
              isActive('/settings') 
                ? 'bg-primary text-white' 
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="pl-64">
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;