import React from "react";
import { Ticket } from "@/types/priority-issues";
import { motion } from "framer-motion";

interface TicketListProps {
  tickets: Ticket[];
  isExpanded: boolean;
}

const TicketList = ({ tickets, isExpanded }: TicketListProps) => {
  if (!isExpanded) return null;

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="space-y-4 mt-4"
    >
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          className="rounded-lg border border-gray-200 p-4 bg-white shadow-sm"
        >
          <div className="flex justify-between items-start mb-2">
            <h4 className="text-sm font-medium text-gray-900">{ticket.title}</h4>
            <span className="text-xs text-gray-500">{ticket.date}</span>
          </div>
          <p className="text-sm text-gray-600 mb-2">{ticket.issueDetails}</p>
          {ticket.summary && (
            <p className="text-sm text-gray-500">{ticket.summary}</p>
          )}
          <a
            href={ticket.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:text-primary/80 mt-2 inline-block"
          >
            View Ticket #{ticket.id}
          </a>
        </div>
      ))}
    </motion.div>
  );
};

export default TicketList;