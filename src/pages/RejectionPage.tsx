
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RejectionPage = () => {
  const navigate = useNavigate();
  
  const handleTryAgain = () => {
    // Navigate back to the main page
    navigate("/");
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="shadow-sm py-2 bg-white h-24 flex items-center">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <img 
            src="/lovable-uploads/8c90f432-da05-45a1-81f7-cdbbce1ef2e2.png" 
            alt="Ultimate Phone Program Logo" 
            className="h-20 md:h-24 mr-4"
          />
          <h1 className="text-xl font-bold text-blue-600">Ultimate Phone Program</h1>
        </div>
      </header>
      
      <main className="container mx-auto py-12">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold mb-2">We're sorry</h1>
            <p className="text-gray-600">
              Based on your quiz answers, you are not suitable for the requirements of this campaign.
            </p>
          </div>
          
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
      </main>
      
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center">
          <div className="text-xs text-gray-600 space-y-2">
            <p>© {new Date().getFullYear()} Ultimate Phone Program. All rights reserved.</p>
            <p>This is a limited time promotional offer. Terms and conditions apply.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RejectionPage;
