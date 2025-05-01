
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NonAffiliationDisclaimer = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Non-Affiliation Disclaimer</h1>
          <p className="text-center text-gray-600 mb-8">Effective date: 3 December 2023</p>
          
          <div className="prose prose-blue max-w-none text-gray-700">
            <p className="mb-4">
              We operate the website (hereinafter referred to as the "Service").
            </p>
            
            <p className="mb-6">
              All trademarks, companies, images, logos, products, videos, and other copyrights or trademarks displayed, mentioned, 
              or referred to within our Service and/or on any social media pages are the property of their respective copyright or 
              trademark owners. The use of a trade name, copyright, or trademark on our Service is for identification and reference 
              purposes only, and does not imply any association with the copyright or trademark owner of their product or brand. 
              Our Service is not affiliated, associated, authorized, maintained, sponsored, or in any way officially connected with 
              these copyright or trademark owners. These copyright or trademark owners do not sponsor or endorse any of our products 
              or comments.
            </p>
            
            <p className="mb-6">
              We declare no affiliation, sponsorship, or partnership with any copyright or trademark owner.
            </p>
            
            <p className="mb-6">
              If you have any questions or concerns, please contact us.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this non-affiliation statement, please contact us by email.
            </p>
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild variant="outline">
              <Link to="/">Return to Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonAffiliationDisclaimer;
