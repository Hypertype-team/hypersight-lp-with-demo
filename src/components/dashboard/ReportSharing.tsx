import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Slack } from "lucide-react";
import { toast } from "sonner";

const ReportSharing = () => {
  const handleSlackShare = () => {
    toast.success("Demo: Report shared to Slack", {
      description: "In a real implementation, this would share the report to Slack"
    });
  };

  const handleEmailShare = () => {
    toast.success("Demo: Report shared via email", {
      description: "In a real implementation, this would share the report via email"
    });
  };

  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <h3 className="text-lg font-medium mb-4">Share Report</h3>
      <div className="flex gap-4">
        <Button
          variant="outline"
          onClick={handleSlackShare}
          className="flex items-center gap-2"
        >
          <Slack className="h-4 w-4" />
          Share to Slack
        </Button>
        <Button
          variant="outline"
          onClick={handleEmailShare}
          className="flex items-center gap-2"
        >
          <Mail className="h-4 w-4" />
          Share via Email
        </Button>
      </div>
    </div>
  );
};

export default ReportSharing;