import DashboardLayout from "@/components/layouts/DashboardLayout";
import PriorityIssues from "@/components/dashboard/PriorityIssues";
import DepartmentTickets from "@/components/dashboard/DepartmentTickets";
import SystemPerformanceChart from "@/components/dashboard/SystemPerformanceChart";
import DashboardMetrics from "@/components/dashboard/DashboardMetrics";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
import { useState, useEffect } from "react";
import { addDays, format, subDays, isAfter } from "date-fns";

const Reports = () => {
  const [currentCycleStart, setCurrentCycleStart] = useState(() => new Date(2025, 0, 6)); // January 6th, 2025
  const [isStaringContestActive, setIsStaringContestActive] = useState(false);
  const [staringTime, setStaringTime] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'lost'>('idle');
  
  const cycleLength = 14;
  const futureDataDate = new Date(2025, 1, 3); // February 3rd, 2025

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isStaringContestActive) {
      intervalId = setInterval(() => {
        setStaringTime(prev => prev + 0.1);
      }, 100);
    }
    return () => clearInterval(intervalId);
  }, [isStaringContestActive]);

  const handlePreviousCycle = () => {
    setCurrentCycleStart(prevDate => subDays(prevDate, cycleLength));
  };

  const handleNextCycle = () => {
    const nextDate = addDays(currentCycleStart, cycleLength);
    if (!isAfter(nextDate, addDays(futureDataDate, -cycleLength))) {
      setCurrentCycleStart(nextDate);
    }
  };

  const startStaringContest = () => {
    setIsStaringContestActive(true);
    setGameState('playing');
    setStaringTime(0);
  };

  const endStaringContest = () => {
    setIsStaringContestActive(false);
    setGameState('lost');
    if (staringTime > bestScore) {
      setBestScore(staringTime);
    }
  };

  const cycleEndDate = addDays(currentCycleStart, cycleLength - 1);
  const cycleDateRange = `${format(currentCycleStart, 'MMM d')} - ${format(cycleEndDate, 'MMM d, yyyy')}`;
  const isFutureCycle = isAfter(currentCycleStart, new Date(2025, 0, 19)); // After January 19th, 2025
  const isNextCycleDisabled = isAfter(addDays(currentCycleStart, cycleLength), addDays(futureDataDate, -cycleLength));

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Support Analytics Reports</h1>
            <p className="text-gray-600">Detailed analysis and insights from your support data</p>
          </div>
        </div>

        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-4">
            <Button 
              onClick={handlePreviousCycle}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous Cycle
            </Button>
            <div className="text-sm font-medium">
              Cycle: {cycleDateRange}
            </div>
            <Button 
              onClick={handleNextCycle}
              disabled={isNextCycleDisabled}
              variant="outline"
              className={`flex items-center gap-2 ${
                isNextCycleDisabled ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              Next Cycle
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {isFutureCycle ? (
          <div className="flex flex-col items-center justify-center py-16 px-4 bg-gradient-to-b from-blue-50 to-white rounded-lg">
            <div className="max-w-2xl text-center space-y-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Time Travel Not Available... Yet! 🚀</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                We get that you're excited about the future, but sorry - we're no time travelers! 
                The reports for this cycle will be available starting February 3rd, 2025.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                In the meantime, why not challenge our mascot Hyper in a staring contest? 
                May the best one win! 👀
              </p>
              
              <div className="flex flex-col items-center space-y-6">
                <div className="relative">
                  <div className={`w-48 h-48 rounded-full bg-gradient-to-b from-purple-100 to-purple-200 flex items-center justify-center transition-transform duration-300 ${gameState === 'playing' ? 'animate-float' : ''}`}>
                    <div className="relative">
                      <Eye className="w-24 h-24 text-purple-600" />
                      {gameState === 'playing' && (
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full" />
                      )}
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-xl font-bold text-purple-600">Hyper</p>
                    <p className="text-sm text-gray-600">Professional Staring Champion</p>
                  </div>
                </div>

                {gameState === 'idle' && (
                  <Button 
                    onClick={startStaringContest}
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
                  >
                    Start Staring Contest
                  </Button>
                )}

                {gameState === 'playing' && (
                  <div className="space-y-4">
                    <p className="text-2xl font-bold text-purple-600">
                      {staringTime.toFixed(1)}s
                    </p>
                    <p className="text-sm text-gray-600">Don't move your mouse or touch the screen!</p>
                    <div 
                      className="fixed inset-0 z-50 cursor-none"
                      onMouseMove={endStaringContest}
                      onTouchStart={endStaringContest}
                    />
                  </div>
                )}

                {gameState === 'lost' && (
                  <div className="space-y-4">
                    <p className="text-xl text-gray-700">
                      You lasted {staringTime.toFixed(1)} seconds!
                    </p>
                    {staringTime > bestScore - 0.1 && (
                      <p className="text-lg text-purple-600 font-semibold">New Personal Best! 🎉</p>
                    )}
                    <p className="text-sm text-gray-600">
                      Best Score: {bestScore.toFixed(1)}s
                    </p>
                    <Button 
                      onClick={() => {
                        setGameState('idle');
                        setStaringTime(0);
                      }}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors"
                    >
                      Try Again
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <>
            <DashboardMetrics currentCycleStart={currentCycleStart} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DepartmentTickets currentCycleStart={currentCycleStart} />
              <SystemPerformanceChart currentCycleStart={currentCycleStart} />
            </div>
            <PriorityIssues currentCycleStart={currentCycleStart} />
          </>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Reports;
