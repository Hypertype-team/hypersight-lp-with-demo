import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

const Setup = () => {
  const navigate = useNavigate();
  const [frequency, setFrequency] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [step, setStep] = useState(1);

  const handleConnect = () => {
    toast.success("Successfully connected to your support system!");
    setStep(2);
  };

  const handleSave = () => {
    if (!frequency || !dayOfWeek) {
      toast.error("Please select both frequency and day of the week");
      return;
    }
    toast.success("Settings saved successfully!");
    navigate('/demo');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-20">
        {step === 1 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-thin mb-8 bg-gradient-to-r from-[#eec5bd] to-[#96a6fd] bg-clip-text text-transparent">
              Welcome to Hypersight
            </h1>
            <p className="text-xl text-gray-400 mb-12">
              Let's get started by connecting your support system to unlock valuable insights.
            </p>
            <Button
              onClick={handleConnect}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-6 text-lg rounded-lg"
            >
              Connect Your Support System
            </Button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-thin mb-8 text-center bg-gradient-to-r from-[#eec5bd] to-[#96a6fd] bg-clip-text text-transparent">
              Configure Your Reports
            </h2>
            <div className="space-y-8 bg-white/5 p-8 rounded-xl backdrop-blur-sm">
              <div className="space-y-4">
                <label className="block text-lg text-gray-300">Report Frequency</label>
                <Select onValueChange={setFrequency}>
                  <SelectTrigger className="w-full bg-black/50 border-white/10">
                    <SelectValue placeholder="Select frequency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="biweekly">Bi-weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-4">
                <label className="block text-lg text-gray-300">Delivery Day</label>
                <Select onValueChange={setDayOfWeek}>
                  <SelectTrigger className="w-full bg-black/50 border-white/10">
                    <SelectValue placeholder="Select day of week" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monday">Monday</SelectItem>
                    <SelectItem value="tuesday">Tuesday</SelectItem>
                    <SelectItem value="wednesday">Wednesday</SelectItem>
                    <SelectItem value="thursday">Thursday</SelectItem>
                    <SelectItem value="friday">Friday</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleSave}
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white py-6 text-lg rounded-lg mt-8"
              >
                Save and Continue
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Setup;
