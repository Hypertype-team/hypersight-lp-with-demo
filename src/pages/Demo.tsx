import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ReportSharing from "@/components/dashboard/ReportSharing";

const Demo = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectingPlatform, setConnectingPlatform] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const platforms = [
    { name: "Zendesk", logo: "/lovable-uploads/62919e1e-3c27-42c2-b50a-ea9cdc0f3b32.png" },
    { name: "Intercom", logo: "/lovable-uploads/cf09e092-5b2f-463b-a672-412bd05e8d2b.png" },
    { name: "Freshdesk", logo: "/lovable-uploads/53c5ac88-9160-48e1-9bec-8ea19182fc9d.png" },
    { name: "HubSpot", logo: "/lovable-uploads/280302d9-6a01-4d19-87c3-7ec069e94cf7.png" },
    { name: "Salesforce", logo: "/lovable-uploads/44bc1b08-ca81-4a08-b5e1-1639878a90cf.png" },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
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

        <div className="mt-8">
          <ReportSharing />
        </div>
      </div>
    </div>
  );
};

export default Demo;