import React from "react";

interface ProgressBarProps {
  progress: number; // Current progress value
  maxValue: number; // Maximum value (e.g., total days)
  color?: string; // Optional color for the progress bar
  width?: string; // Optional width for the progress bar
  height?: string; // Optional height for the progress bar
  label?: string; // Optional label for context (e.g., "days completed")
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  maxValue,
  color = "bg-blue-600",
  width = "w-full",
  height = "h-4",
  label = "",
}) => {
  // Calculate the percentage based on progress and maxValue
  const percentage = maxValue > 0 ? (progress / maxValue) * 100 : 0;
  // Ensure the percentage is between 0 and 100
  const clampedPercentage = Math.max(0, Math.min(percentage, 100));

  return (
    <div className={`relative ${width} max-w-smmx-auto`}>
      <p className="mb-[2px] text-right font-[400] text-[9px] leading-[10.89px]">
        {label} {clampedPercentage.toFixed(1)}% Complete
      </p>
      <div className={`bg-gray-200 rounded-full ${height}`}>
        <div
          className={`${color} h-full rounded-full transition-all duration-300`}
          style={{ width: `${clampedPercentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
