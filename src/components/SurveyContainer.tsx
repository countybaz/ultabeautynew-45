
import { useEffect } from "react";
import { useSurvey } from "@/contexts/SurveyContext";
import SurveyProgress from "@/components/SurveyProgress";
import StartScreen from "@/components/survey/StartScreen";
import Step1 from "@/components/survey/Step1";
import Step2 from "@/components/survey/Step2";
import Step3 from "@/components/survey/Step3";
import Step5 from "@/components/survey/Step5";
import Results from "@/components/survey/Results";
import Timer from "@/components/Timer";
import FacebookReviews from "@/components/FacebookReviews";

const SurveyContainer = () => {
  const { currentStep, totalSteps } = useSurvey();

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-8">
      {/* Timer only visible during active survey steps (not on start screen) */}
      {currentStep > 0 && <Timer minutes={3} />}
      
      {/* Progress bar only shown during active survey steps */}
      {currentStep > 0 && currentStep <= totalSteps && (
        <SurveyProgress currentStep={currentStep} totalSteps={totalSteps} />
      )}
      
      {/* Survey steps */}
      {currentStep === 0 && <StartScreen />}
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
      {currentStep === 3 && <Step3 />}
      {currentStep === 4 && <Step5 />}
      {currentStep === 5 && <Results />}
      
      {/* Facebook Reviews - shown in all steps */}
      {currentStep !== 0 && <FacebookReviews />}
    </div>
  );
};

export default SurveyContainer;
