import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const priorityIssues = [
  {
    id: "auth",
    title: "User Authentication & Access",
    urgencyLevel: "High",
    reason: "High customer dissatisfaction and potential loss of trust in product reliability",
    description: "Customers reported concerns about authentication performance, network balancing, and integration issues. Some queries highlight delays in functionality visibility within the app.",
    department: "Hardware",
    weeklyTrend: "Increasing",
    totalTickets: 45,
    previousCycle: 32,
  },
  {
    id: "data",
    title: "Data Integration Issues",
    urgencyLevel: "High",
    reason: "Direct impact on home comfort and system efficiency",
    description: "Critical cases of non-functioning or inefficient data integrations with questions about proper configuration and usage.",
    department: "Operations",
    weeklyTrend: "Stable",
    totalTickets: 38,
    previousCycle: 36,
  },
  {
    id: "api",
    title: "API Connection Errors",
    urgencyLevel: "Medium",
    reason: "Affects system efficiency and customer satisfaction",
    description: "Concerns about API reliability and efficiency in data transfer, with unclear expectations for performance.",
    department: "Installation",
    weeklyTrend: "Decreasing",
    totalTickets: 28,
    previousCycle: 41,
  },
];

const PriorityIssues = () => {
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
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                  <CardTitle className="text-xl font-semibold">
                    {issue.title}
                  </CardTitle>
                  <CardDescription>
                    Trend: {issue.weeklyTrend} ({issue.totalTickets} tickets this cycle, {issue.previousCycle} previous cycle)
                  </CardDescription>
                </div>
                <span className={`rounded-full px-3 py-1 text-sm ${
                  issue.urgencyLevel === "High" 
                    ? "bg-red-100 text-red-700" 
                    : "bg-yellow-100 text-yellow-700"
                }`}>
                  {issue.urgencyLevel}
                </span>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">
                    Urgency Reason: {issue.reason}
                  </p>
                  <p className="text-sm text-gray-600">
                    {issue.description}
                  </p>
                  <p className="text-sm text-gray-500">
                    Department: {issue.department}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PriorityIssues;