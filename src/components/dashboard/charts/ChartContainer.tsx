import { ReactNode } from "react";

interface ChartContainerProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export const ChartContainer = ({ title, subtitle, children }: ChartContainerProps) => {
  return (
    <div className="rounded-xl border bg-white p-6 shadow-lg transition-all duration-200 hover:shadow-xl">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
      </div>
      <div className="relative aspect-[16/9] w-full max-h-[400px]">
        {children}
      </div>
    </div>
  );
};