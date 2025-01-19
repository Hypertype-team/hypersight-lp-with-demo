import { StaringContest } from "./staring-contest/StaringContest";

export const FutureDataMessage = () => {
  return (
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
        
        <StaringContest />
      </div>
    </div>
  );
};