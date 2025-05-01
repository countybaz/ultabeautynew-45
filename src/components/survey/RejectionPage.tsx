
import { Button } from "@/components/ui/button";
import SurveyHeader from "@/components/SurveyHeader";
import { useSurvey } from "@/contexts/SurveyContext";
import { RefreshCw } from "lucide-react";

const RejectionPage = () => {
  const { goToStep } = useSurvey();
  
  const handleTryAgain = () => {
    goToStep(0); // Go to the start screen
  };
  
  return (
    <div className="max-w-md mx-auto">
      <SurveyHeader 
        title="We're sorry"
        subtitle="Based on your quiz answers, you are not suitable for the requirements of this campaign."
      />
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <p className="text-center mb-6">
          If you think you made a mistake and want to retake the quiz, click the button below:
        </p>
      </div>

      <Button 
        onClick={handleTryAgain} 
        className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
      >
        Try Again <RefreshCw className="ml-2" size={20} />
      </Button>
    </div>
  );
};

export default RejectionPage;
