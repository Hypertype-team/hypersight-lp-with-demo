export interface Ticket {
  id: string;
  title: string;
  url: string;
  date: string;
}

export interface PriorityIssue {
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