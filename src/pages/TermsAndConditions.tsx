
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Terms of Use ("Terms")</h1>
          <p className="text-center text-gray-600 mb-8">Effective date: 3 December 2023</p>
          
          <div className="prose prose-blue max-w-none text-gray-700">
            <p className="mb-4">
              Please read these Terms of Use ("Terms", "Terms of Use") carefully before using our website ("Service") operated by us.
            </p>
            
            <p className="mb-4">
              Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. 
              These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
            
            <p className="mb-6">
              By accessing or using the Service, you agree to be bound by these Terms. 
              If you disagree with any part of the terms, you may not access the Service.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Links to Other Sites</h2>
            <p className="mb-4">
              Our Service may contain links to third-party web sites or services that are not owned or controlled by our Website.
            </p>
            
            <p className="mb-4">
              Our Website has no control over, and assumes no responsibility for, the content, privacy policies, 
              or practices of any third-party web sites or services. You further acknowledge and agree that our website 
              shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged 
              to be caused by use of or reliance on any such content, goods or services available on or through any such web sites or services.
            </p>
            
            <p className="mb-6">
              We strongly advise you to read the terms of use and privacy policies of any third-party website or service that you visit.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Governing Law</h2>
            <p className="mb-4">
              Our Service may contain links to third-party web sites or services that are not owned or controlled by our website.
            </p>
            
            <p className="mb-6">
              These Terms shall be governed by and construed in accordance with the laws of Angola, without regard to its conflict of law provisions.
              Our failure to enforce any right or provision of these Terms shall not be deemed a waiver of such rights. 
              If any provision of these Terms is held by a court to be invalid or unenforceable, the remaining provisions 
              of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, 
              and supersede any prior agreements we might have had between us regarding the Service.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Changes</h2>
            <p className="mb-4">
              We reserve the right, at our sole discretion, to change or replace these Terms at any time. 
              If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect. 
              What constitutes a material change will be determined in our sole discretion.
            </p>
            
            <p className="mb-6">
              By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. 
              If you do not agree to the new terms, please discontinue using the Service.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this Non-Affiliation Agreement, please contact us by email.
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

export default TermsAndConditions;
