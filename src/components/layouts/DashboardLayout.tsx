import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useLocation, Link } from "react-router-dom";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white border-r border-gray-200 fixed left-0 top-0">
          <div className="p-6">
            <img
              src="/lovable-uploads/99af36c9-7743-4308-adc1-ee20870b7654.png"
              alt="Hypersight Logo"
              className="w-32 mb-8"
            />
            <nav className="space-y-2">
              <Link to="/dashboard">
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    isActiveRoute("/dashboard") && "bg-gray-100"
                  )}
                >
                  Home
                </Button>
              </Link>
              <Link to="/reports">
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start",
                    isActiveRoute("/reports") && "bg-gray-100"
                  )}
                >
                  Reports
                </Button>
              </Link>
            </nav>
          </div>
        </div>

        {/* Main content */}
        <div className="ml-64 flex-1 p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;