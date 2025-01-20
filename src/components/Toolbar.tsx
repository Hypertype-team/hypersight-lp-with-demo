import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Toolbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isDemoPage = location.pathname === "/demo";

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-black/0 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10"
            onClick={() => navigate("/")}
          >
            <span className="font-bold text-xl bg-gradient-to-r from-[#eec5bd] to-[#96a6fd] bg-clip-text text-transparent">
              Hypersight
            </span>
          </Button>
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10"
            onClick={() => navigate("/reports")}
          >
            Reports
          </Button>
        </div>
      </div>
      
      {/* Back to Website Button - Only shown on Demo page */}
      {isDemoPage && (
        <a
          href="https://hypersight.se"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 left-6 z-50"
        >
          <Button
            variant="outline"
            className="bg-white/10 hover:bg-white/20 text-white border-white/20 gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Website
          </Button>
        </a>
      )}
    </motion.div>
  );
};

export default Toolbar;