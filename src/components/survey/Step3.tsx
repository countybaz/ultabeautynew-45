
import { useState } from "react";
import { Button } from "@/components/ui/button";
import SurveyHeader from "@/components/SurveyHeader";
import SurveyOption from "@/components/SurveyOption";
import { useSurvey } from "@/contexts/SurveyContext";
import { useIsMobile } from "@/hooks/use-mobile";

const Step3 = () => {
  const { goToNextStep, setAnswer } = useSurvey();
  const [selected, setSelected] = useState<string | null>(null);
  const isMobile = useIsMobile();

  const handleNext = () => {
    if (selected) {
      setAnswer("shopping_frequency", selected);
      goToNextStep();
    }
  };

  return (
    <div className="max-w-md mx-auto pb-20 md:pb-0">
      <SurveyHeader 
        title=""
        subtitle="We're making progress!"
      />
      
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-4">How often do you shop for beauty products?</h2>
        <div className="space-y-3">
          <SurveyOption 
            label="Every month" 
            selected={selected === "every_month"} 
            onClick={() => setSelected("every_month")}
          />
          <SurveyOption 
            label="Every few months" 
            selected={selected === "every_few_months"} 
            onClick={() => setSelected("every_few_months")}
          />
          <SurveyOption 
            label="Rarely shop" 
            selected={selected === "rarely"} 
            onClick={() => setSelected("rarely")}
          />
        </div>
      </div>

      <Button 
        onClick={handleNext} 
        disabled={!selected}
        className={`w-full py-5 text-lg bg-orange-500 hover:bg-orange-600 shadow-lg ${isMobile ? 'fixed bottom-4 left-0 right-0 max-w-xs mx-auto z-10' : ''}`}
      >
        Continue
      </Button>
    </div>
  );
};

export default Step3;
