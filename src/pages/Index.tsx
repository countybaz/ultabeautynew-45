
import { SurveyProvider } from "@/contexts/SurveyContext";
import SurveyContainer from "@/components/SurveyContainer";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="shadow-sm py-2 bg-white h-24 flex items-center">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/8c90f432-da05-45a1-81f7-cdbbce1ef2e2.png" 
              alt="Ultimate Phone Program Logo" 
              className="h-20 md:h-24 mr-4"
            />
            <h1 className="text-xl font-bold text-blue-600">Ultimate Phone Program</h1>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto relative">
        <FAQ />
        <SurveyProvider>
          <SurveyContainer />
        </SurveyProvider>
      </main>

      <footer className="mt-12 py-4 border-t bg-white">
        <div className="container mx-auto px-4">
          <p className="text-xs text-center text-gray-500">
            © {new Date().getFullYear()} Ultimate Phone Program. All rights reserved.
            <br />
            This is a limited time promotional offer. Terms and conditions apply.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
