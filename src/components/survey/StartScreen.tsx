
import { Button } from "@/components/ui/button";
import SurveyHeader from "@/components/SurveyHeader";
import { useSurvey } from "@/contexts/SurveyContext";
import { ArrowRight } from "lucide-react";
const StartScreen = () => {
  const {
    goToNextStep
  } = useSurvey();
  const handleStart = () => {
    goToNextStep();
  };
  return <div className="max-w-md mx-auto">
      <SurveyHeader title="Ultimate Phone Program" subtitle="Get a new iPhone today!" />
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <p className="text-center text-lg mb-4">
          Get a new <span className="text-blue-600 font-semibold">iPhone 16 Pro Max</span> with the Ultimate Phone Program. Simply answer 3 short questions about your digital habits and this fantastic chance is yours!
        </p>
        
        <p className="text-center mb-6">
          Ready to take your tech to the next level? Click on the <span className="text-blue-600 font-semibold">Start</span> button below.
        </p>
        
        <p className="text-sm text-red-600 text-center font-medium mb-6">
          As soon as you click the button, a timer starts and you have 3 minutes to complete the process.
        </p>
      </div>

      <Button onClick={handleStart} className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
        Start <ArrowRight className="ml-2" />
      </Button>
    </div>;
};
export default StartScreen;
