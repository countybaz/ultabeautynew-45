
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SurveyHeader from "@/components/SurveyHeader";
import SurveyOption from "@/components/SurveyOption";
import { useSurvey } from "@/contexts/SurveyContext";

const Step4 = () => {
  const { goToNextStep, setAnswer } = useSurvey();
  const [selected, setSelected] = useState<string | null>(null);

  const handleNext = () => {
    if (selected) {
      setAnswer("budget", selected);
      goToNextStep();
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <SurveyHeader 
        title="iPhone Program Survey"
        subtitle="Almost there!"
      />
      
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-4">What's your budget for a new laptop?</h2>
        <div className="space-y-3">
          <SurveyOption 
            label="Less than $500" 
            selected={selected === "under_500"} 
            onClick={() => setSelected("under_500")}
          />
          <SurveyOption 
            label="$500-$999" 
            selected={selected === "500_to_999"} 
            onClick={() => setSelected("500_to_999")}
          />
          <SurveyOption 
            label="$1000-$1499" 
            selected={selected === "1000_to_1499"} 
            onClick={() => setSelected("1000_to_1499")}
          />
          <SurveyOption 
            label="$1500+" 
            selected={selected === "1500_plus"} 
            onClick={() => setSelected("1500_plus")}
          />
        </div>
      </div>

      <Button 
        onClick={handleNext} 
        disabled={!selected}
        className="w-full bg-blue-600 hover:bg-blue-700"
      >
        Continue
      </Button>
    </div>
  );
};

export default Step4;
