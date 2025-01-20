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

interface PriorityIssuesProps {
  currentCycleStart: Date;
}

const priorityIssues: PriorityIssue[] = [
  {
    id: "auth",
    title: "User Authentication & Access",
    urgencyLevel: "High",
    reason: "Critical system access issues affecting multiple enterprise customers",
    description: "Multiple enterprise customers reporting authentication failures and intermittent access issues across platform features.",
    detailedSummary: "Enterprise customers are experiencing significant authentication challenges, particularly during peak business hours. Issues include session timeouts, MFA verification delays, and inconsistent access to critical features. Several high-priority clients have reported that these issues are impacting their operations and team productivity. The mobile app authentication is particularly affected, with users reporting longer than usual login times and occasional complete authentication failures.",
    department: "Security",
    responsibleDepartment: "Platform Engineering",
    weeklyTrend: "Increasing",
    totalTickets: 52,
    previousCycle: 38,
    tickets: [
      {
        id: "SEC-001",
        title: "Enterprise SSO Integration Failure",
        url: "https://app.intercom.com/tickets/SEC-001",
        date: "2024-03-18",
        issueDetails: "Critical SSO authentication failure affecting multiple enterprise users",
        summary: "Multiple users from Enterprise client ABC Corp reporting complete SSO authentication failure. Users unable to access the platform through their corporate SSO integration. Initial investigation suggests potential SAML configuration issue."
      },
      {
        id: "SEC-002",
        title: "MFA Verification Delays",
        url: "https://app.intercom.com/tickets/SEC-002",
        date: "2024-03-17",
        issueDetails: "Significant delays in MFA code delivery and verification",
        summary: "Users experiencing delays of up to 5 minutes in receiving MFA codes. Some users report codes expiring before they arrive. Issue appears to be affecting both SMS and email delivery methods."
      }
    ]
  },
  {
    id: "data",
    title: "Data Integration Issues",
    urgencyLevel: "High",
    reason: "Data inconsistencies affecting customer reporting and analytics",
    description: "Widespread data synchronization issues causing discrepancies in customer analytics and reporting dashboards.",
    detailedSummary: "Multiple customers are reporting significant delays and inconsistencies in their data synchronization processes. This is causing discrepancies between real-time data displays and generated reports. The issue is particularly impacting customers who rely on our platform for critical business analytics and decision-making. Several enterprise clients have reported that these inconsistencies are affecting their ability to make data-driven decisions and track key performance metrics.",
    department: "Data Engineering",
    responsibleDepartment: "Data Platform",
    weeklyTrend: "Stable",
    totalTickets: 43,
    previousCycle: 41,
    tickets: [
      {
        id: "DATA-001",
        title: "Real-time Analytics Delay",
        url: "https://app.intercom.com/tickets/DATA-001",
        date: "2024-03-16",
        issueDetails: "Significant lag in real-time analytics updates",
        summary: "Enterprise customer XYZ Industries reporting 30+ minute delays in their real-time analytics dashboard updates. Critical business metrics are not reflecting current operations, impacting decision-making processes."
      }
    ]
  },
  {
    id: "api",
    title: "API Performance Issues",
    urgencyLevel: "Medium",
    reason: "Degraded API response times impacting application performance",
    description: "Increasing reports of API latency and occasional timeout errors during peak usage periods.",
    detailedSummary: "Users are experiencing degraded performance when accessing certain API endpoints, particularly during high-traffic periods. Response times have increased significantly for some operations, with occasional timeout errors being reported. The issues are most pronounced during peak business hours and are affecting the overall user experience of the platform. Several customers have reported that these delays are impacting their workflow efficiency.",
    department: "Backend",
    responsibleDepartment: "Platform Engineering",
    weeklyTrend: "Decreasing",
    totalTickets: 31,
    previousCycle: 45,
    tickets: [
      {
        id: "API-001",
        title: "Bulk Operation Timeouts",
        url: "https://app.intercom.com/tickets/API-001",
        date: "2024-03-15",
        issueDetails: "Bulk API operations timing out during peak hours",
        summary: "Multiple customers reporting timeout errors when performing bulk operations through the API. Operations affected include batch data updates and mass record retrievals. Issue appears to be correlated with high system load during business hours."
      }
    ]
  }
];

const PriorityIssues = ({ currentCycleStart }: PriorityIssuesProps) => {
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
