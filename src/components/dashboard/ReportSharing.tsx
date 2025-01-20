import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const ReportSharing = () => {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h3 className="text-lg font-medium mb-2">Need More?</h3>
      <p className="text-gray-600 mb-4">
        Looking for custom integrations or specific features? Our team is here to help you get the most out of our platform.
      </p>
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          Custom support integrations
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          Tailored reporting features
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          Enterprise-grade solutions
        </div>
      </div>
      <Button
        className="w-full mt-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
        onClick={() => window.open('https://hypertype.fillout.com/talktosales?_gl=1*fyovem*_gcl_au*MTQxOTAzNDA1OC4xNzMxNTgzNTYz', '_blank')}
      >
        <MessageSquare className="mr-2 h-4 w-4" />
        Talk to Sales
      </Button>
    </div>
  );
};

export default ReportSharing;