
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SurveyHeader from "@/components/SurveyHeader";
import { useSurvey } from "@/contexts/SurveyContext";
import { useToast } from "@/components/ui/use-toast";

const Step5 = () => {
  const { goToStep, setAnswer } = useSurvey();
  const { toast } = useToast();
  
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    setAnswer("email", email);

    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      goToStep(6); // Go to results/offer page
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto">
      <SurveyHeader 
        title="One Last Step!" 
        subtitle="Enter your email to see if you qualify for our exclusive offer"
      />
      
      <div className="mb-6">
        <h2 className="text-lg font-medium mb-4">Where should we send your results?</h2>
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your.email@example.com"
              className="w-full"
              required
            />
            <p className="mt-1 text-xs text-gray-500">
              We respect your privacy. Your information will not be shared.
            </p>
          </div>
        </div>
      </div>

      <Button 
        onClick={handleSubmit} 
        disabled={isSubmitting}
        className="w-full bg-blue-600 hover:bg-blue-700"
      >
        {isSubmitting ? "Processing..." : "See My Results"}
      </Button>
    </div>
  );
};

export default Step5;
