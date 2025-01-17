import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Check, ChevronRight, Loader2 } from "lucide-react";

const Demo = () => {
  const [step, setStep] = useState(1);
  const [isConnecting, setIsConnecting] = useState(false);
  const { toast } = useToast();

  const handleConnect = async () => {
    setIsConnecting(true);
    // Simulate API connection
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsConnecting(false);
    toast({
      title: "Successfully connected!",
      description: "Your Zendesk account has been connected to Hypersight.",
    });
    setStep(2);
  };

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Step 1: Connect Support System */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: step === 1 ? 1 : 0 }}
        className={`fixed inset-0 flex items-center justify-center ${step !== 1 ? 'pointer-events-none' : ''}`}
      >
        <div className="max-w-2xl mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary">
              Connect Your Support System
            </h1>
            <p className="text-xl text-gray-400 mb-8">
              Start by connecting your support platform to unlock powerful insights
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div 
              onClick={handleConnect}
              className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 hover:bg-white/10 transition-colors cursor-pointer border border-white/10 hover:border-primary/50"
            >
              <div className="flex items-center gap-4">
                <img
                  src="/lovable-uploads/ac09c7d8-1ea4-4b5c-805e-1c06a08a158d.png"
                  alt="Zendesk"
                  className="w-12 h-12 object-contain filter brightness-0 invert"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">Zendesk</h3>
                  <p className="text-sm text-gray-400">Connect your Zendesk account</p>
                </div>
                {isConnecting ? (
                  <Loader2 className="w-6 h-6 animate-spin text-primary" />
                ) : (
                  <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
                )}
              </div>
            </div>

            {['Intercom', 'Freshdesk', 'HubSpot'].map((platform, index) => (
              <div 
                key={platform}
                className="relative overflow-hidden rounded-2xl bg-white/5 p-6 opacity-50 cursor-not-allowed border border-white/10"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={`/lovable-uploads/${
                      platform === 'Intercom' ? '0d49ea4a-140e-4f5c-9274-eb01ad8c50f2.png' :
                      platform === 'Freshdesk' ? '7e7127fb-d7da-47c0-828d-fc1724b0c7f3.png' :
                      '82dfe857-3fff-4bc7-92d4-ae7f3829c15d.png'
                    }`}
                    alt={platform}
                    className="w-12 h-12 object-contain filter brightness-0 invert"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{platform}</h3>
                    <p className="text-sm text-gray-400">Coming soon</p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400" />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Step 2: Data Processing Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: step === 2 ? 1 : 0 }}
        className={`fixed inset-0 flex items-center justify-center ${step !== 2 ? 'pointer-events-none' : ''}`}
      >
        <div className="max-w-2xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl" />
            <div className="relative bg-black/50 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h2 className="text-2xl font-bold mb-4">Processing Your Data</h2>
              <p className="text-gray-400 mb-6">
                We're analyzing your support tickets to generate valuable insights.
                This might take a few minutes...
              </p>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-secondary"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, ease: "linear" }}
                  onAnimationComplete={() => setStep(3)}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Demo;