import React from "react";
import { PriorityIssue } from "@/types/priority-issues";
import IssueDetails from "./IssueDetails";

const mockIssues: PriorityIssue[] = [
  {
    id: "AUTH-001",
    title: "Enterprise SSO Integration Failure",
    priority: "high",
    status: "open",
    category: "User Authentication & Access",
    description: "Multiple enterprise customers reporting intermittent SSO authentication failures during peak hours. Users are being logged out unexpectedly and unable to re-authenticate through their identity provider.",
    impact: "Affecting 3 enterprise clients with total of 2,500+ users",
    reportedAt: "2024-03-15T09:30:00Z",
    assignedTo: "Alice Smith"
  },
  {
    id: "AUTH-002",
    title: "MFA Token Synchronization Issue",
    priority: "medium",
    status: "investigating",
    category: "User Authentication & Access",
    description: "Users experiencing delays in receiving MFA tokens, causing authentication timeouts. Investigation shows potential time synchronization issues between auth servers and client devices.",
    impact: "Approximately 150 users affected across multiple organizations",
    reportedAt: "2024-03-14T15:45:00Z",
    assignedTo: "Bob Johnson"
  },
  {
    id: "AUTH-003",
    title: "Session Token Expiration Bug",
    priority: "high",
    status: "in-progress",
    category: "User Authentication & Access",
    description: "Session tokens are expiring prematurely despite valid refresh tokens being present. Users are forced to log in multiple times per day, disrupting their workflow.",
    impact: "Widespread issue affecting ~20% of active users",
    reportedAt: "2024-03-13T11:20:00Z",
    assignedTo: "Carol Williams"
  }
];

const TicketList = () => {
  return (
    <div className="space-y-4">
      {mockIssues.map((issue) => (
        <IssueDetails key={issue.id} issue={issue} />
      ))}
    </div>
  );
};

export default TicketList;