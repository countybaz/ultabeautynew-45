
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SurveyHeader from "@/components/SurveyHeader";
import SurveyOption from "@/components/SurveyOption";
import { useSurvey } from "@/contexts/SurveyContext";

const Step2 = () => {
  const { goToNextStep, setAnswer } = useSurvey();
  const [selected, setSelected] = useState<string | null>(null);

  const handleNext = () => {
    if (selected) {
      setAnswer("device_age", selected);
      goToNextStep();
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <SurveyHeader 
        title="Laptop Survey" 
        subtitle="Just a few more questions to go!"
      />
      
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-4">How old is your current device?</h2>
        <div className="space-y-3">
          <SurveyOption 
            label="Less than 1 year" 
            selected={selected === "less_than_1"} 
            onClick={() => setSelected("less_than_1")}
          />
          <SurveyOption 
            label="1-2 years" 
            selected={selected === "1_to_2"} 
            onClick={() => setSelected("1_to_2")}
          />
          <SurveyOption 
            label="3-4 years" 
            selected={selected === "3_to_4"} 
            onClick={() => setSelected("3_to_4")}
          />
          <SurveyOption 
            label="5+ years" 
            selected={selected === "5_plus"} 
            onClick={() => setSelected("5_plus")}
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

export default Step2;
