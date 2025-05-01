
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Privacy Policy</h1>
          <p className="text-center text-gray-600 mb-8">Effective date: 3 December 2023</p>
          
          <div className="prose prose-blue max-w-none text-gray-700">
            <p className="mb-4">
              We operate the website (hereinafter referred to as the "Service").
            </p>
            
            <p className="mb-4">
              This page informs you of our policies regarding the collection, use, and disclosure of personal 
              information when you use our Service and the choices you have associated with that information.
            </p>
            
            <p className="mb-6">
              We use your information to provide and improve the Service. By using the Service, you agree to the collection 
              and use of information in accordance with this Policy. Unless otherwise defined in this Privacy Policy, terms 
              used in this Privacy Policy have the same meanings as in our Terms of Service, accessible on our website.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4 text-gray-800">Collection and Use of Information</h2>
            <p className="mb-4">
              We collect different types of information for different purposes to provide and improve our Service to you.
            </p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3 text-gray-800">Types of Data Collected</h3>
            
            <h4 className="text-md font-semibold mt-4 mb-2 text-gray-800">Personal Data</h4>
            <p className="mb-4">
              While using our Service, we may ask you to provide us with certain personally identifiable information that can be 
              used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Cookies and Usage Data</li>
            </ul>
            
            <h4 className="text-md font-semibold mt-4 mb-2 text-gray-800">Usage Data</h4>
            <p className="mb-4">
              We may also collect information about how the Service is accessed and used ("Usage Data"). This Usage Data may include 
              information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages 
              of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers 
              and other diagnostic data.
            </p>
            
            <h4 className="text-md font-semibold mt-4 mb-2 text-gray-800">Tracking & Cookie Data</h4>
            <p className="mb-4">
              We use cookies and similar tracking technologies to track the activity on our Service and store certain information. 
              Cookies are small files that may include an anonymous unique identifier. Cookies are sent to your browser from a website 
              and stored on your device. Tracking technologies also used include beacons, tags, and scripts to collect and track information 
              and to improve and analyze our Service. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
              However, if you do not accept cookies, you may not be able to use some parts of our Service. For more information about how to manage cookies, 
              see the Browser Cookies Guide
            </p>
            
            <p className="mb-4">Examples of cookies we use:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>Session cookies. We use session cookies to operate our Service.</li>
              <li>Preference cookies. We use preference cookies to store your preferences and various settings.</li>
              <li>Security cookies. We use security cookies for security purposes.</li>
            </ul>
            
            <h3 className="text-lg font-semibold mt-6 mb-3 text-gray-800">Use of Data</h3>
            <p className="mb-4">Our website uses the data collected for various purposes:</p>
            <ul className="list-disc pl-6 mb-6">
              <li>To provide and maintain the Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service, when you choose to do so</li>
              <li>To provide customer care and support</li>
              <li>To provide analytics or valuable information so that we can improve the Service</li>
              <li>To monitor the usage of the Service</li>
              <li>To detect technical problems, prevent and resolve issues</li>
            </ul>
            
            <h3 className="text-lg font-semibold mt-6 mb-3 text-gray-800">Transfer of Data</h3>
            <p className="mb-4">
              Your information, including Personal Data, may be transferred to — and to — transferred to and maintained on computers 
              located outside of your state, province, country or other governmental jurisdiction where the data protection laws may 
              differ than those from your jurisdiction.
            </p>
            
            <p className="mb-4">
              If you are located outside Angola and choose to transfer information to us, please be aware that we transfer the data, 
              including Personal Data, to Angola and process it there.
            </p>
            
            <p className="mb-6">
              Your consent to this Privacy Policy followed by your submission of such information constitutes your consent to that transfer.
            </p>
            
            <p className="mb-6">
              Our website will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this 
              Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate 
              controls in place including the security of your data and other personal information.
            </p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3 text-gray-800">Disclosure of Data</h3>
            <h4 className="text-md font-semibold mt-4 mb-2 text-gray-800">Legal Requirements</h4>
            <p className="mb-4">
              Our website may disclose your Personal Information in the good faith belief that such action is necessary to:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>To comply with a legal obligation</li>
              <li>To protect and defend the rights or property of our website</li>
              <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
              <li>To protect the personal safety of users of the Service or the public</li>
              <li>To protect against legal liability</li>
            </ul>
            
            <h3 className="text-lg font-semibold mt-6 mb-3 text-gray-800">Security of Data</h3>
            <p className="mb-6">
              The security of your data is important to us, but remember that no method of transmission over the Internet, 
              or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your 
              Personal Information, we cannot guarantee its absolute security.
            </p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3 text-gray-800">Service Providers</h3>
            <p className="mb-4">
              We may employ third party companies and individuals to facilitate our Service ("Service Providers"), 
              to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
            </p>
            <p className="mb-6">
              These third parties have access to your Personal Information only to perform these tasks on our behalf 
              and are obligated not to disclose or use it for any other purpose.
            </p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3 text-gray-800">Links to Other Sites</h3>
            <p className="mb-4">
              Our Service may contain links to other sites that are not operated by us. When you click on a third-party link, 
              you will be directed to that site. We strongly advise you to review the privacy policy of every site you visit.
            </p>
            <p className="mb-6">
              We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any 
              third-party sites or services.
            </p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3 text-gray-800">Children's Privacy</h3>
            <p className="mb-4">
              Our Service is not directed to anyone under the age of 18 ("Children").
            </p>
            <p className="mb-6">
              We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent 
              or guardian and you are aware that your Children has provided us with Personal Information, please contact us. 
              If we discover that we have collected Personal Information from children without verification of parental consent, 
              we take steps to remove that information from our servers.
            </p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3 text-gray-800">Changes to this Privacy Policy</h3>
            <p className="mb-4">
              We may update our Privacy Policy from time to time. We will alert you about any changes by posting the new 
              Privacy Policy on this page.
            </p>
            <p className="mb-4">
              We will notify you via email and/or a prominent notice on our Service, prior to the change becoming effective and 
              update the "Effective Date" at the top of this Privacy Policy.
            </p>
            <p className="mb-6">
              You should frequently check this Privacy Policy for changes. Changes to this Privacy Policy are effective when posted on this page.
            </p>
            
            <h3 className="text-lg font-semibold mt-6 mb-3 text-gray-800">Contact Us</h3>
            <p className="mb-4">
              If you have any questions about this Non-Affiliation Notice, please contact us via email.
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

export default PrivacyPolicy;
