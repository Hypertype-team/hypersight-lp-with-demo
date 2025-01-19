import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Demo from "@/pages/Demo";
import Setup from "@/pages/Setup";
import Reports from "@/pages/Reports";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    document.fonts.ready.then(() => {
      console.log('Fonts are loaded');
    }).catch(err => {
      console.error('Error loading fonts:', err);
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/demo" element={<Demo />} />
            <Route path="/setup" element={<Setup />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Reports />} /> {/* Temporarily using Reports component */}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;