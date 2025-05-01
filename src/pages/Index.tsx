
import { SurveyProvider } from "@/contexts/SurveyContext";
import SurveyContainer from "@/components/SurveyContainer";
import FAQ from "@/components/FAQ";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 text-center">
      <header className="shadow-sm py-2 bg-white h-24 flex items-center">
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/8c90f432-da05-45a1-81f7-cdbbce1ef2e2.png" 
              alt="Ultimate Phone Program Logo" 
              className="h-20 md:h-24 mr-4"
            />
            <h1 className="text-xl font-bold text-blue-600">Ultimate Phone Program</h1>
            <div className="ml-4">
              <FAQ />
            </div>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto relative">
        <SurveyProvider>
          <SurveyContainer />
        </SurveyProvider>
      </main>

      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-6 text-center">
          {/* Legal Links Section */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3 text-gray-700">Legal Links</h3>
            <div className="flex flex-wrap justify-center gap-6 text-base">
              <Link to="/terms" className="text-blue-600 hover:underline font-medium px-4 py-2 bg-blue-50 rounded-md shadow-sm border border-blue-100 transition-colors hover:bg-blue-100">Terms and Conditions</Link>
              <Link to="/privacy" className="text-blue-600 hover:underline font-medium px-4 py-2 bg-blue-50 rounded-md shadow-sm border border-blue-100 transition-colors hover:bg-blue-100">Privacy Policy</Link>
              <a href="#" className="text-blue-600 hover:underline font-medium px-4 py-2 bg-blue-50 rounded-md shadow-sm border border-blue-100 transition-colors hover:bg-blue-100">Non-Affiliation Disclaimer</a>
            </div>
          </div>
          
          {/* Legal Disclaimers */}
          <div className="text-xs text-gray-600 space-y-2">
            <p>Trade names or rights associated with all trademarks on this website are the property of their respective owners and are not associated with this promotion. This offer ends at the end of 2025.</p>
            <p>This website is not part of the Facebook website or of Facebook Inc.</p>
            <p>Furthermore, this website is not endorsed in any way by Facebook. Facebook is a trademark of Facebook, Inc.</p>
          </div>
          
          {/* Copyright */}
          <p className="text-xs text-center text-gray-500 mt-6">
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
