import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const mockData = {
  overview: {
    totalTickets: 1250,
    resolvedTickets: 1180,
    averageResponseTime: "2.5 hours",
    customerSatisfaction: 4.8,
  },
  ticketsByCategory: [
    { name: "Technical Issues", value: 450 },
    { name: "Billing", value: 280 },
    { name: "Feature Requests", value: 220 },
    { name: "General Inquiry", value: 180 },
    { name: "Bug Reports", value: 120 },
  ],
};

const Reports = () => {
  const [hasReports] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {!hasReports ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h1 className="text-4xl font-thin mb-8 bg-gradient-to-r from-[#eec5bd] to-[#96a6fd] bg-clip-text text-transparent">
              Your First Report is Coming Soon!
            </h1>
            <Card className="p-8 bg-white/5 backdrop-blur-sm border-white/10">
              <p className="text-xl text-gray-300 mb-6">
                We're analyzing your support tickets and preparing your first comprehensive report. 
                It will be ready in a few days!
              </p>
              <Button
                onClick={() => window.location.href = "#previous-reports"}
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white px-6 py-4"
              >
                View Previous Reports
              </Button>
            </Card>
          </motion.div>
        ) : (
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-thin mb-4 bg-gradient-to-r from-[#eec5bd] to-[#96a6fd] bg-clip-text text-transparent">
                Support Insights Report
              </h1>
              <p className="text-xl text-gray-400">March 1 - March 15, 2024</p>
            </motion.div>

            <Card className="p-8 bg-white/5 backdrop-blur-sm border-white/10">
              <h2 className="text-2xl font-thin mb-8">Ticket Distribution by Category</h2>
              <div className="h-[400px] w-full">
                <ResponsiveContainer>
                  <BarChart data={mockData.ticketsByCategory}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="name" stroke="#666" />
                    <YAxis stroke="#666" />
                    <Tooltip />
                    <Bar dataKey="value" fill="#4776e6" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(mockData.overview).map(([key, value]) => (
                <Card key={key} className="p-6 bg-white/5 backdrop-blur-sm border-white/10">
                  <h3 className="text-lg text-gray-400 mb-2">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <p className="text-3xl font-thin">{value}</p>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;