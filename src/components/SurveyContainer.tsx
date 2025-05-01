
import { useEffect } from "react";
import { useSurvey } from "@/contexts/SurveyContext";
import SurveyProgress from "@/components/SurveyProgress";
import Step1 from "@/components/survey/Step1";
import Step2 from "@/components/survey/Step2";
import Step3 from "@/components/survey/Step3";
import Step4 from "@/components/survey/Step4";
import Step5 from "@/components/survey/Step5";
import Results from "@/components/survey/Results";

const SurveyContainer = () => {
  const { currentStep, totalSteps } = useSurvey();

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentStep]);

  return (
    <div className="w-full max-w-lg mx-auto px-4 py-8">
      {currentStep <= totalSteps && <SurveyProgress currentStep={currentStep} totalSteps={totalSteps} />}
      
      {/* Survey steps */}
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}
      {currentStep === 3 && <Step3 />}
      {currentStep === 4 && <Step4 />}
      {currentStep === 5 && <Step5 />}
      {currentStep === 6 && <Results />}
    </div>
  );
};

export default SurveyContainer;
