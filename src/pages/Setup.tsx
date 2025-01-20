import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Setup = () => {
  const [companyName, setCompanyName] = useState("");
  const [teamSize, setTeamSize] = useState("");
  const navigate = useNavigate();

  const handleSave = () => {
    navigate("/demo");
  };

  const handleConnect = () => {
    navigate("/demo");
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Setup</h1>
          <p className="text-gray-400">Configure your Hypersight instance</p>
        </div>

        <Card className="bg-zinc-900 border-zinc-800">
          <CardHeader>
            <CardTitle>Company Details</CardTitle>
            <CardDescription className="text-gray-400">
              Enter your company information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="bg-zinc-800 border-zinc-700"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="team-size">Team Size</Label>
              <Input
                id="team-size"
                value={teamSize}
                onChange={(e) => setTeamSize(e.target.value)}
                className="bg-zinc-800 border-zinc-700"
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between items-center">
          <Button
            onClick={handleConnect}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-6 text-lg rounded-lg"
          >
            Connect Your Support System
          </Button>
          <Button
            onClick={handleSave}
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-8 py-6 text-lg rounded-lg"
          >
            Save And Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Setup;