import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Ticket } from "@/types/priority-issues";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface TicketListProps {
  tickets: Ticket[];
  isExpanded: boolean;
}

const ITEMS_PER_PAGE = 10;

const TicketList = ({ tickets, isExpanded }: TicketListProps) => {
  const [expandedTickets, setExpandedTickets] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const toggleTicket = (ticketId: string) => {
    setExpandedTickets(prev =>
      prev.includes(ticketId)
        ? prev.filter(id => id !== ticketId)
        : [...prev, ticketId]
    );
  };

  const totalPages = Math.ceil(tickets.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentTickets = tickets.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setExpandedTickets([]); // Reset expanded state when changing pages
  };

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
            {currentTickets.map((ticket) => (
              <div
                key={ticket.id}
                className="rounded-lg border border-gray-200 overflow-hidden"
              >
                <div
                  onClick={() => toggleTicket(ticket.id)}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 transition-colors cursor-pointer"
                >
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
                    {expandedTickets.includes(ticket.id) ? (
                      <ChevronUp className="h-4 w-4 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-gray-500" />
                    )}
                  </div>
                </div>
                
                <AnimatePresence>
                  {expandedTickets.includes(ticket.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="border-t border-gray-200 bg-gray-50"
                    >
                      <div className="p-4 space-y-3">
                        {ticket.issueDetails && (
                          <div>
                            <h4 className="text-sm font-medium text-gray-700">Ticket Issue</h4>
                            <p className="text-sm text-gray-600 mt-1">{ticket.issueDetails}</p>
                          </div>
                        )}
                        {ticket.summary && (
                          <div>
                            <h4 className="text-sm font-medium text-gray-700">Summary</h4>
                            <p className="text-sm text-gray-600 mt-1">{ticket.summary}</p>
                          </div>
                        )}
                        <div className="pt-2">
                          <a
                            href={ticket.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                          >
                            View Issue <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-4">
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious 
                      onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                      className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <PaginationItem key={page}>
                      <PaginationLink
                        onClick={() => handlePageChange(page)}
                        isActive={currentPage === page}
                        className="cursor-pointer"
                      >
                        {page}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  
                  <PaginationItem>
                    <PaginationNext 
                      onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                      className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TicketList;