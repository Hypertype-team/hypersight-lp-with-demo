import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Ticket } from "@/types/priority-issues";

interface TicketListProps {
  tickets: Ticket[];
  isExpanded: boolean;
}

const TicketList = ({ tickets, isExpanded }: TicketListProps) => {
  return (
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <div className="space-y-2 pt-4">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="rounded-lg border border-gray-200 overflow-hidden"
              >
                <div className="flex items-center justify-between p-3 hover:bg-gray-50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-700">
                      {ticket.id}
                    </span>
                    <span className="text-sm text-gray-600">
                      {ticket.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500">
                      {ticket.date}
                    </span>
                    <a
                      href={ticket.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TicketList;