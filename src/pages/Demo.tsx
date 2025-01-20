import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ReportSharing from "@/components/dashboard/ReportSharing";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

const Demo = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectingPlatform, setConnectingPlatform] = useState<string | null>(null);
  const [cyclePeriod, setCyclePeriod] = useState<string>("");
  const [showDialog, setShowDialog] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  const platforms = [
    { name: "Zendesk", logo: "/lovable-uploads/62919e1e-3c27-42c2-b50a-ea9cdc0f3b32.png" },
    { name: "Intercom", logo: "/lovable-uploads/cf09e092-5b2f-463b-a672-412bd05e8d2b.png" },
    { name: "Freshdesk", logo: "/lovable-uploads/53c5ac88-9160-48e1-9bec-8ea19182fc9d.png" },
    { name: "HubSpot", logo: "/lovable-uploads/280302d9-6a01-4d19-87c3-7ec069e94cf7.png" },
    { name: "Salesforce", logo: "/lovable-uploads/44bc1b08-ca81-4a08-b5e1-1639878a90cf.png" },
  ];

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform);
    setShowDialog(true);
  };

  const handleConnect = async () => {
    if (!cyclePeriod) {
      toast({
        title: "Cycle Period Required",
        description: "Please select a cycle period before connecting.",
        variant: "destructive",
      });
      return;
    }

    setShowDialog(false);
    setIsConnecting(true);
    setConnectingPlatform(selectedPlatform);
    
    toast({
      title: "API Key Required",
      description: `Please provide your ${selectedPlatform} API key to connect your account.`,
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
    
    localStorage.setItem('cyclePeriod', cyclePeriod);
    navigate('/reports');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent animate-gradient-shift">
            Connect Your Support System
          </h1>
          <p className="text-xl text-gray-600 mb-8 animate-fade-up">
            Choose your support platform to get started
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {platforms.map((platform) => (
            <div 
              key={platform.name}
              onClick={() => handlePlatformSelect(platform.name)}
              className="group relative overflow-hidden rounded-xl bg-white p-6 hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-200 animate-fade-up hover:scale-105 hover:border-primary/50"
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

        <Dialog open={showDialog} onOpenChange={setShowDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Select Reporting Cycle</DialogTitle>
              <DialogDescription>
                Choose how often you'd like to receive reports from {selectedPlatform}
              </DialogDescription>
            </DialogHeader>
            <div className="p-4">
              <RadioGroup
                value={cyclePeriod}
                onValueChange={setCyclePeriod}
                className="gap-4"
              >
                <div className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <RadioGroupItem value="weekly" id="weekly" />
                  <Label htmlFor="weekly" className="text-sm font-medium cursor-pointer">
                    Weekly Reports
                  </Label>
                </div>
                <div className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <RadioGroupItem value="biweekly" id="biweekly" />
                  <Label htmlFor="biweekly" className="text-sm font-medium cursor-pointer">
                    Biweekly Reports
                  </Label>
                </div>
                <div className="flex items-center space-x-3 hover:bg-gray-50 p-2 rounded-lg transition-colors">
                  <RadioGroupItem value="monthly" id="monthly" />
                  <Label htmlFor="monthly" className="text-sm font-medium cursor-pointer">
                    Monthly Reports
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowDialog(false)}
              >
                Cancel
              </Button>
              <Button
                type="button"
                onClick={handleConnect}
                disabled={!cyclePeriod}
              >
                Connect
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <div className="mt-8">
          <ReportSharing />
        </div>
      </div>
    </div>
  );
};

export default Demo;