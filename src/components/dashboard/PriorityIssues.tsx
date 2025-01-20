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
    reason: "Critical authentication system failures affecting enterprise SSO integrations",
    description: "Multiple enterprise customers experiencing severe authentication issues including SSO failures, MFA delays, and session management problems.",
    detailedSummary: "Enterprise customers are reporting widespread authentication challenges affecting their entire organizations. Issues include: 1) Failed SSO integrations preventing team access, 2) Multi-factor authentication delays of up to 10 minutes, 3) Unexpected session timeouts during critical operations, 4) Inconsistent role-based access control enforcement. Several Fortune 500 clients have escalated these issues as business-critical, citing significant productivity impact.",
    department: "Security",
    responsibleDepartment: "Identity & Access Management",
    weeklyTrend: "Increasing",
    totalTickets: 52,
    previousCycle: 38,
    tickets: [
      {
        id: "AUTH-001",
        title: "Enterprise SSO Integration Failure",
        url: "https://app.intercom.com/tickets/AUTH-001",
        date: "2024-03-18",
        issueDetails: "Complete SSO authentication failure for Acme Corp (Enterprise Plan)",
        summary: "Acme Corp (500+ users) reporting complete SSO authentication failure since system upgrade. Error logs show SAML assertion validation errors and timeout issues during authentication attempts. Impact: Entire organization unable to access platform through corporate SSO."
      },
      {
        id: "AUTH-002",
        title: "Critical MFA System Degradation",
        url: "https://app.intercom.com/tickets/AUTH-002",
        date: "2024-03-17",
        issueDetails: "Severe delays in MFA processing affecting multiple enterprise clients",
        summary: "Multiple enterprise clients reporting 5-10 minute delays in MFA code delivery. Issue affects both SMS and email delivery methods. Root cause analysis suggests potential bottleneck in MFA service queue processing. Several timeout errors recorded in monitoring systems."
      },
      {
        id: "AUTH-003",
        title: "RBAC Permission Sync Failure",
        url: "https://app.intercom.com/tickets/AUTH-003",
        date: "2024-03-16",
        issueDetails: "Role-based access control synchronization issues",
        summary: "TechCorp reporting critical issues with RBAC permissions not properly synchronizing after user role updates. Admin changes to user permissions taking up to 1 hour to propagate. Security concern: Some users temporarily retaining access to restricted areas after role downgrades."
      }
    ]
  },
  {
    id: "auth-mobile",
    title: "Mobile Authentication Issues",
    urgencyLevel: "High",
    reason: "Persistent mobile app authentication failures and session handling problems",
    description: "Enterprise users experiencing significant issues with mobile app authentication, including biometric verification failures and token refresh problems.",
    detailedSummary: "The mobile application is experiencing critical authentication challenges specifically affecting enterprise users. Key issues include: 1) Biometric authentication failures on iOS devices, 2) Persistent token refresh errors causing frequent logouts, 3) Sync issues between mobile and web sessions. Multiple enterprise clients have reported these issues as severely impacting their mobile workforce productivity.",
    department: "Security",
    responsibleDepartment: "Mobile Platform Security",
    weeklyTrend: "Stable",
    totalTickets: 34,
    previousCycle: 32,
    tickets: [
      {
        id: "MAUTH-001",
        title: "iOS Biometric Authentication Failure",
        url: "https://app.intercom.com/tickets/MAUTH-001",
        date: "2024-03-18",
        issueDetails: "Face ID and Touch ID authentication consistently failing on iOS devices",
        summary: "Enterprise users on iOS devices reporting consistent failures with biometric authentication. Face ID and Touch ID attempts resulting in fallback to password entry. Issue affecting iOS 16+ devices specifically. Impact: Significant reduction in mobile access efficiency for field teams."
      },
      {
        id: "MAUTH-002",
        title: "Mobile Session Token Refresh Issues",
        url: "https://app.intercom.com/tickets/MAUTH-002",
        date: "2024-03-17",
        issueDetails: "Frequent session timeouts and token refresh failures in mobile app",
        summary: "Users experiencing unexpected logouts and session terminations in mobile app. Token refresh mechanism failing to maintain session continuity. Analysis shows potential race condition in token refresh logic. Critical impact on mobile workforce requiring constant re-authentication."
      }
    ]
  },
  {
    id: "auth-audit",
    title: "Authentication Audit Log Discrepancies",
    urgencyLevel: "Medium",
    reason: "Missing and incomplete authentication audit trails",
    description: "Security teams reporting gaps in authentication audit logs, impacting compliance requirements and security investigations.",
    detailedSummary: "Enterprise security teams have identified significant gaps in authentication audit logging. Issues include: 1) Missing failed login attempts in audit trails, 2) Incomplete session termination logs, 3) Delayed synchronization of audit events across regions. This is causing compliance concerns for regulated industry clients and hampering security investigations.",
    department: "Security",
    responsibleDepartment: "Security Operations",
    weeklyTrend: "Decreasing",
    totalTickets: 28,
    previousCycle: 35,
    tickets: [
      {
        id: "AUDIT-001",
        title: "Missing Failed Authentication Logs",
        url: "https://app.intercom.com/tickets/AUDIT-001",
        date: "2024-03-16",
        issueDetails: "Critical authentication failure events not appearing in audit logs",
        summary: "Security team at FinCorp unable to track failed authentication attempts in audit logs. Investigation reveals gaps in failed login event capturing. Compliance impact: Unable to meet SOC 2 requirements for authentication monitoring."
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