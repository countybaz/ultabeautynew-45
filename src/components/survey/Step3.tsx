
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SurveyHeader from "@/components/SurveyHeader";
import SurveyOption from "@/components/SurveyOption";
import { useSurvey } from "@/contexts/SurveyContext";

const Step3 = () => {
  const { goToNextStep, setAnswer } = useSurvey();
  const [selected, setSelected] = useState<string | null>(null);

  const handleNext = () => {
    if (selected) {
      setAnswer("usage_purpose", selected);
      goToNextStep();
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <SurveyHeader 
        title="Laptop Survey" 
        subtitle="We're making progress!"
      />
      
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-4">What do you primarily use your device for?</h2>
        <div className="space-y-3">
          <SurveyOption 
            label="Work/Professional" 
            selected={selected === "work"} 
            onClick={() => setSelected("work")}
          />
          <SurveyOption 
            label="Personal/Everyday Use" 
            selected={selected === "personal"} 
            onClick={() => setSelected("personal")}
          />
          <SurveyOption 
            label="Gaming" 
            selected={selected === "gaming"} 
            onClick={() => setSelected("gaming")}
          />
          <SurveyOption 
            label="Creative Work (Design, Video, etc.)" 
            selected={selected === "creative"} 
            onClick={() => setSelected("creative")}
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

export default Step3;
