import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Mail, Slack } from "lucide-react";
import { PriorityIssue } from "@/types/priority-issues";
import TicketList from "./TicketList";
import { toast } from "sonner";

interface IssueDetailsProps {
  issue: PriorityIssue;
  isExpanded: boolean;
  showTickets: boolean;
  onToggleTickets: () => void;
}

const IssueDetails = ({ issue, isExpanded, showTickets, onToggleTickets }: IssueDetailsProps) => {
  if (!isExpanded) return null;

  const handleSlackShare = () => {
    toast.success("Demo: Report shared to Slack", {
      description: `The ${issue.title} report has been shared to Slack`
    });
  };

  const handleEmailShare = () => {
    toast.success("Demo: Report shared via email", {
      description: `The ${issue.title} report has been shared via email`
    });
  };

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="space-y-6 p-6">
        <div>
          <h4 className="font-medium text-gray-700 mb-4">Detailed Summary</h4>
          <p className="text-sm text-gray-600 leading-relaxed">
            {issue.detailedSummary}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium text-gray-700">Urgency Reason</p>
            <p className="text-gray-600">{issue.reason}</p>
          </div>
          <div>
            <p className="font-medium text-gray-700">Department</p>
            <p className="text-gray-600">{issue.department}</p>
          </div>
        </div>
        <div>
          <p className="font-medium text-gray-700">Responsible Department</p>
          <p className="text-gray-600">{issue.responsibleDepartment}</p>
        </div>
        
        <div className="space-y-4">
          <Button
            onClick={onToggleTickets}
            variant="outline"
            className="w-full justify-between bg-white text-primary hover:bg-gray-50 hover:text-primary border border-gray-200 hover:border-gray-300 transition-all duration-200"
          >
            View Tickets
            {showTickets ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </Button>
          
          <TicketList tickets={issue.tickets} isExpanded={showTickets} />

          <div className="flex gap-3 pt-2">
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
      </div>
    </motion.div>
  );
};

export default IssueDetails;