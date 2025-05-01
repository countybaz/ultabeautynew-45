
import { SurveyProvider } from "@/contexts/SurveyContext";
import SurveyContainer from "@/components/SurveyContainer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="shadow-sm bg-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-center text-xl font-bold">Laptop Survey - Special Offer</h1>
        </div>
      </header>
      
      <main className="container mx-auto">
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
