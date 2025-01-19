import { useState, useEffect } from "react";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StaringContestProps {
  className?: string;
}

export const StaringContest = ({ className }: StaringContestProps) => {
  const [isStaringContestActive, setIsStaringContestActive] = useState(false);
  const [staringTime, setStaringTime] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'lost'>('idle');

  useEffect(() => {
    let timer: number;
    if (isStaringContestActive && gameState === 'playing') {
      timer = window.setInterval(() => {
        setStaringTime(prev => prev + 0.1);
      }, 100);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isStaringContestActive, gameState]);

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

  return (
    <div className={`flex flex-col items-center space-y-6 ${className}`}>
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
  );
};