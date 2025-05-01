
import { cn } from "@/lib/utils";

interface SurveyProgressProps {
  currentStep: number;
  totalSteps: number;
}

const SurveyProgress = ({ currentStep, totalSteps }: SurveyProgressProps) => {
  return (
    <div className="w-full mb-6">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium">Step {currentStep} of {totalSteps}</span>
        <span className="text-sm font-medium">{Math.floor((currentStep / totalSteps) * 100)}% Complete</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-blue-600 transition-all duration-300 ease-in-out"
          style={{ width: `${(currentStep / totalSteps) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SurveyProgress;
