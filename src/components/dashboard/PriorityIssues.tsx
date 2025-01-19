import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Ticket {
  id: string;
  title: string;
  url: string;
  date: string;
}

interface PriorityIssue {
  id: string;
  title: string;
  urgencyLevel: string;
  reason: string;
  description: string;
  detailedSummary: string;
  department: string;
  responsibleDepartment: string;
  weeklyTrend: string;
  totalTickets: number;
  previousCycle: number;
  tickets: Ticket[];
}

const priorityIssues: PriorityIssue[] = [
  {
    id: "auth",
    title: "User Authentication & Access",
    urgencyLevel: "High",
    reason: "High customer dissatisfaction and potential loss of trust in product reliability",
    description: "Customers reported concerns about authentication performance, network balancing, and integration issues. Some queries highlight delays in functionality visibility within the app.",
    detailedSummary: "Multiple users have reported persistent issues with the authentication system, particularly during peak usage hours. The problems range from delayed login responses to complete authentication failures. Users are experiencing intermittent session timeouts and difficulties with password reset workflows. The mobile app authentication seems to be more severely affected than the web platform. These issues are causing significant user frustration and impacting their ability to access critical features of the platform.",
    department: "Hardware",
    responsibleDepartment: "Product & Tech",
    weeklyTrend: "Increasing",
    totalTickets: 45,
    previousCycle: 32,
    tickets: [
      {
        id: "T-001",
        title: "Unable to authenticate with app",
        url: "https://app.intercom.com/tickets/T-001",
        date: "2024-03-15"
      },
      {
        id: "T-002",
        title: "Login issues after update",
        url: "https://app.intercom.com/tickets/T-002",
        date: "2024-03-14"
      }
    ]
  },
  {
    id: "data",
    title: "Data Integration Issues",
    urgencyLevel: "High",
    reason: "Direct impact on home comfort and system efficiency",
    description: "Critical cases of non-functioning or inefficient data integrations with questions about proper configuration and usage.",
    detailedSummary: "The data integration system is experiencing significant challenges with real-time synchronization between different platform components. Users are reporting delays in data updates, particularly affecting energy consumption metrics and smart device status updates. Several instances of data inconsistency have been noted, where information displayed in different parts of the system shows conflicting values. This is causing confusion among users and affecting their ability to make informed decisions about their energy usage.",
    department: "Operations",
    responsibleDepartment: "Product & Tech",
    weeklyTrend: "Stable",
    totalTickets: 38,
    previousCycle: 36,
    tickets: [
      {
        id: "T-003",
        title: "Data sync failing between app and grid",
        url: "https://app.intercom.com/tickets/T-003",
        date: "2024-03-13"
      }
    ]
  },
  {
    id: "api",
    title: "API Connection Errors",
    urgencyLevel: "Medium",
    reason: "Affects system efficiency and customer satisfaction",
    description: "Concerns about API reliability and efficiency in data transfer, with unclear expectations for performance.",
    detailedSummary: "The API infrastructure is showing signs of strain during high-traffic periods, resulting in increased response times and occasional timeout errors. Users are experiencing delays in data retrieval and updates, particularly when accessing historical energy consumption data. The system's real-time monitoring capabilities are being affected, with some users reporting delays of up to 30 seconds in receiving updates. These issues are most prominent during peak usage hours and are affecting the platform's ability to provide timely information to users.",
    department: "Installation",
    responsibleDepartment: "Backend Team",
    weeklyTrend: "Decreasing",
    totalTickets: 28,
    previousCycle: 41,
    tickets: [
      {
        id: "T-004",
        title: "API timeout during peak hours",
        url: "https://app.intercom.com/tickets/T-004",
        date: "2024-03-12"
      }
    ]
  },
];

const PriorityIssues = () => {
  const [expandedCards, setExpandedCards] = useState<string[]>([]);
  const [expandedTickets, setExpandedTickets] = useState<string[]>([]);

  const toggleCard = (issueId: string) => {
    setExpandedCards(prev => 
      prev.includes(issueId) 
        ? prev.filter(id => id !== issueId)
        : [...prev, issueId]
    );
  };

  const toggleTickets = (issueId: string) => {
    setExpandedTickets(prev => 
      prev.includes(issueId) 
        ? prev.filter(id => id !== issueId)
        : [...prev, issueId]
    );
  };

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-medium">Priority Issues</h3>
        <div className="flex gap-4">
          <select className="rounded-lg border px-4 py-2 text-sm">
            <option>Urgency</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
          <select className="rounded-lg border px-4 py-2 text-sm">
            <option>All Teams</option>
            <option>Hardware</option>
            <option>Operations</option>
            <option>Installation</option>
          </select>
          <select className="rounded-lg border px-4 py-2 text-sm">
            <option>All Issues</option>
            <option>Battery</option>
            <option>Heat Pump</option>
            <option>Solar Panel</option>
          </select>
        </div>
      </div>
      <div className="space-y-4">
        {priorityIssues.map((issue) => (
          <motion.div
            key={issue.id}
            id={`priority-${issue.id}`}
            initial={{ opacity: 0.6 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-gray-200 transition-all duration-300 hover:shadow-md">
              <CardHeader 
                className="flex flex-row items-center justify-between space-y-0 pb-2 cursor-pointer"
                onClick={() => toggleCard(issue.id)}
              >
                <div>
                  <CardTitle className="text-xl font-semibold">
                    {issue.title}
                  </CardTitle>
                  <CardDescription className="mt-2">
                    {issue.description}
                  </CardDescription>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`rounded-full px-3 py-1 text-sm ${
                    issue.urgencyLevel === "High" 
                      ? "bg-red-100 text-red-700" 
                      : "bg-yellow-100 text-yellow-700"
                  }`}>
                    {issue.urgencyLevel}
                  </span>
                  {expandedCards.includes(issue.id) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </CardHeader>
              <AnimatePresence>
                {expandedCards.includes(issue.id) && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">Detailed Summary</h4>
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
                            onClick={() => toggleTickets(issue.id)}
                            variant="outline"
                            className="w-full justify-between hover:bg-gray-50 border-primary text-primary hover:text-primary-foreground hover:bg-primary"
                          >
                            View Tickets
                            {expandedTickets.includes(issue.id) ? (
                              <ChevronUp className="h-4 w-4" />
                            ) : (
                              <ChevronDown className="h-4 w-4" />
                            )}
                          </Button>
                          
                          <AnimatePresence>
                            {expandedTickets.includes(issue.id) && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <div className="space-y-2 pt-4">
                                  {issue.tickets.map((ticket) => (
                                    <div
                                      key={ticket.id}
                                      className="rounded-lg border border-gray-200 overflow-hidden"
                                    >
                                      <div
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
                        </div>
                      </div>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PriorityIssues;
