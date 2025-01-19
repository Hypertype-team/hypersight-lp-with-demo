import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { PriorityIssue } from "@/types/priority-issues";
import IssueDetails from "./priority-issues/IssueDetails";
import IssueFilters from "./priority-issues/IssueFilters";

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
        title: "Battery functionality uncertainty and Virtual Grid connection issues",
        url: "https://app.intercom.com/tickets/T-001",
        date: "2024-03-15",
        issueDetails: "Osäkerhet kring batterifunktion och anslutningsproblem med Virtuellt Kraftnät",
        summary: "A user expressed uncertainty about their battery functionality and questioned their connection to a virtual power grid. They also mentioned issues connecting a Pixii unit due to a missing QR code and expressed concerns about their investment."
      },
      {
        id: "T-002",
        title: "Authentication failure during peak hours",
        url: "https://app.intercom.com/tickets/T-002",
        date: "2024-03-14",
        issueDetails: "Authentication system completely unresponsive",
        summary: "Multiple users reported complete authentication system failure during peak usage hours, preventing access to critical features."
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
        date: "2024-03-13",
        issueDetails: "Data synchronization failures",
        summary: "Multiple instances of data synchronization failures between the app and grid system, causing inconsistent readings and user confusion."
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
        date: "2024-03-12",
        issueDetails: "API response delays and timeouts",
        summary: "Users experiencing significant delays and timeouts when accessing API endpoints during peak usage hours."
      }
    ]
  }
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
        <IssueFilters />
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
              <IssueDetails 
                issue={issue}
                isExpanded={expandedCards.includes(issue.id)}
                showTickets={expandedTickets.includes(issue.id)}
                onToggleTickets={() => toggleTickets(issue.id)}
              />
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PriorityIssues;