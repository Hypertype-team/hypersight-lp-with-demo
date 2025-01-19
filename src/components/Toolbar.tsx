import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const Toolbar = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/30 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center justify-center w-48">
          <img
            src="/lovable-uploads/99af36c9-7743-4308-adc1-ee20870b7654.png"
            alt="Hypersight Logo"
            className="w-44 object-contain"
          />
        </div>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('features')} 
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('pricing')} 
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Pricing
            </button>
            <button 
              onClick={() => navigate('/demo')}
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Demo
            </button>
            <a 
              href="https://www.hypertype.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-white transition-colors text-sm font-medium"
            >
              Hypertype
            </a>
          </nav>
          <Button
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white px-6 py-2 text-sm font-medium"
            onClick={() => window.location.href = 'https://hypertype.fillout.com/talktosales?_gl=1*1e9dlxb*_gcl_au*MTQxOTAzNDA1OC4xNzMxNTgzNTYz'}
          >
            Book a demo
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Toolbar;