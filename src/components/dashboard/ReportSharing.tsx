import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const ReportSharing = () => {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium">Want to know more?</h3>
          <p className="text-xs text-gray-500 mt-1">Talk to our team</p>
        </div>
        <Button
          size="sm"
          className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white"
          onClick={() => window.open('https://hypertype.fillout.com/talktosales?_gl=1*fyovem*_gcl_au*MTQxOTAzNDA1OC4xNzMxNTgzNTYz', '_blank')}
        >
          <MessageSquare className="mr-2 h-3 w-3" />
          Contact Sales
        </Button>
      </div>
    </div>
  );
};

export default ReportSharing;