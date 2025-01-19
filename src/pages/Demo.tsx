import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Demo = () => {
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

    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsConnecting(false);
    setConnectingPlatform(null);
    toast({
      title: "Connection Successful",
      description: "Your account has been connected successfully. Redirecting to dashboard...",
      duration: 5000,
    });
    
    navigate('/reports');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Connect Your Support System</h1>
          <p className="text-xl text-gray-600">
            Choose your support platform to get started
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {platforms.map((platform) => (
            <div 
              key={platform.name}
              onClick={() => handleConnect(platform.name)}
              className="group relative overflow-hidden rounded-xl bg-white p-6 hover:shadow-lg transition-shadow cursor-pointer border border-gray-200"
            >
              <div className="flex items-center gap-4">
                <img
                  src={platform.logo}
                  alt={platform.name}
                  className="w-12 h-12 object-contain"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{platform.name}</h3>
                  <p className="text-sm text-gray-600">Connect your {platform.name} account</p>
                </div>
                {connectingPlatform === platform.name && (
                  <Loader2 className="w-6 h-6 animate-spin text-primary" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Demo;