
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SurveyHeader from "@/components/SurveyHeader";
import SurveyOption from "@/components/SurveyOption";
import { useSurvey } from "@/contexts/SurveyContext";

const Step1 = () => {
  const { goToNextStep, setAnswer } = useSurvey();
  const [selected, setSelected] = useState<string | null>(null);

  const handleNext = () => {
    if (selected) {
      setAnswer("device_type", selected);
      goToNextStep();
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <SurveyHeader 
        title="Laptop Survey" 
        subtitle="Answer a few questions to see if you qualify for a special offer!"
      />
      
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-4">What type of device do you primarily use?</h2>
        <div className="space-y-3">
          <SurveyOption 
            label="Laptop" 
            selected={selected === "laptop"} 
            onClick={() => setSelected("laptop")}
          />
          <SurveyOption 
            label="Desktop" 
            selected={selected === "desktop"} 
            onClick={() => setSelected("desktop")}
          />
          <SurveyOption 
            label="Tablet" 
            selected={selected === "tablet"} 
            onClick={() => setSelected("tablet")}
          />
          <SurveyOption 
            label="Smartphone" 
            selected={selected === "smartphone"} 
            onClick={() => setSelected("smartphone")}
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

export default Step1;
