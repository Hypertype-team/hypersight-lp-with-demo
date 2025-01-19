import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { PriorityIssue } from "@/types/priority-issues";
import TicketList from "./TicketList";

interface IssueDetailsProps {
  issue: PriorityIssue;
  isExpanded: boolean;
  showTickets: boolean;
  onToggleTickets: () => void;
}

const IssueDetails = ({ issue, isExpanded, showTickets, onToggleTickets }: IssueDetailsProps) => {
  if (!isExpanded) return null;

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
        
        <div className="pt-2">
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
        </div>
      </div>
    </motion.div>
  );
};

export default IssueDetails;