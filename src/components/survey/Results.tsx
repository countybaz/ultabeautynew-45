
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useSurvey } from "@/contexts/SurveyContext";
import ProductOffer from "@/components/ProductOffer";
import SurveyHeader from "@/components/SurveyHeader";
import { useToast } from "@/components/ui/use-toast";

const Results = () => {
  const { answers } = useSurvey();
  const { toast } = useToast();
  const [showingOffer, setShowingOffer] = useState(false);

  const handleClaim = () => {
    toast({
      title: "Offer Claimed!",
      description: "Thank you! Check your email for next steps.",
      duration: 5000,
    });
  };

  return (
    <div className="max-w-md mx-auto">
      {!showingOffer ? (
        <>
          <SurveyHeader 
            title="Analyzing Your Responses" 
            subtitle="Please wait while we process your survey results..."
          />
          
          <div className="mb-8">
            <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-600 w-full animate-pulse"></div>
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            <div className="border border-gray-200 rounded p-4 animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
            <div className="border border-gray-200 rounded p-4 animate-pulse">
              <div className="h-6 bg-gray-200 rounded w-2/3 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/5"></div>
            </div>
          </div>

          <Button 
            onClick={() => setShowingOffer(true)} 
            className="w-full bg-blue-600 hover:bg-blue-700"
            disabled
          >
            Analyzing...
          </Button>
          
          {/* Auto-progress to offer after 3 seconds */}
          {setTimeout(() => setShowingOffer(true), 3000)}
        </>
      ) : (
        <ProductOffer onClaim={handleClaim} />
      )}
    </div>
  );
};

export default Results;
