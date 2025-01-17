import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Check, ChevronRight, Loader2, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Demo = () => {
  const [step, setStep] = useState(1);
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectingPlatform, setConnectingPlatform] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const platforms = [
    { name: "Zendesk", logo: "/lovable-uploads/ac09c7d8-1ea4-4b5c-805e-1c06a08a158d.png" },
    { name: "Intercom", logo: "/lovable-uploads/0d49ea4a-140e-4f5c-9274-eb01ad8c50f2.png" },
    { name: "Freshdesk", logo: "/lovable-uploads/7e7127fb-d7da-47c0-828d-fc1724b0c7f3.png" },
    { name: "HubSpot", logo: "/lovable-uploads/82dfe857-3fff-4bc7-92d4-ae7f3829c15d.png" },
    { name: "Salesforce", logo: "/lovable-uploads/14e8106c-3784-42e4-a732-6674b1e928e7.png" },
  ];

  const handleConnect = async (platform: string) => {
    setIsConnecting(true);
    setConnectingPlatform(platform);
    
    toast({
      title: "API Key Required",
      description: `Please provide your ${platform} API key to connect your account.`,
      duration: 5000,
    });

    // Simulate waiting for API key input
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsConnecting(false);
    setConnectingPlatform(null);
    toast({
      title: "Connection Instructions",
      description: "For this demo, we'll simulate a successful connection. In production, you would need to enter your API key.",
      duration: 5000,
    });
    
    // Continue with demo flow
    setStep(2);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen bg-background text-white">
      {/* Back Button */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed top-6 left-6 z-50"
      >
        <Button
          variant="ghost"
          onClick={handleBack}
          className="text-white/80 hover:text-white flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Button>
      </motion.div>

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
            {platforms.map((platform) => (
              <div 
                key={platform.name}
                onClick={() => handleConnect(platform.name)}
                className="group relative overflow-hidden rounded-2xl bg-white/5 p-6 hover:bg-white/10 transition-colors cursor-pointer border border-white/10 hover:border-primary/50"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className="w-12 h-12 object-contain filter brightness-0 invert"
                  />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{platform.name}</h3>
                    <p className="text-sm text-gray-400">Connect your {platform.name} account</p>
                  </div>
                  {connectingPlatform === platform.name ? (
                    <Loader2 className="w-6 h-6 animate-spin text-primary" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors" />
                  )}
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