
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useSurvey } from "@/contexts/SurveyContext";
import ProductOffer from "@/components/ProductOffer";
import SurveyHeader from "@/components/SurveyHeader";
import { useToast } from "@/components/ui/use-toast";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import IPhoneImageFetcher from "@/components/IPhoneImageFetcher";

const Results = () => {
  const { answers } = useSurvey();
  const { toast } = useToast();
  const [showingOffer, setShowingOffer] = useState(false);
  const [iphoneImages, setIphoneImages] = useState<Array<{src: string, alt: string}>>([]);

  const handleClaim = () => {
    toast({
      title: "Offer Claimed!",
      description: "Thank you! Check your email for next steps.",
      duration: 5000,
    });
  };
  
  const handleImagesFetched = (images: Array<{src: string, alt: string}>) => {
    if (images.length >= 2) {
      // Get two random images for the display
      const shuffled = [...images].sort(() => 0.5 - Math.random());
      setIphoneImages(shuffled.slice(0, 2));
    } else {
      setIphoneImages(images);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      {!showingOffer ? (
        <>
          <SurveyHeader 
            title="Congratulations!" 
            subtitle="Fantastic news! Your participation is confirmed. Continue to the next step to receive your iPhone 16 Pro:"
            className="mb-4"
          />
          
          <div className="mb-4 space-y-3">
            {/* Hidden iPhone Image Fetcher */}
            <div className="hidden">
              <IPhoneImageFetcher onComplete={handleImagesFetched} />
            </div>
            
            {/* iPhone Images */}
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <div className="flex flex-row justify-center gap-2">
                <div className="w-[120px]">
                  <AspectRatio ratio={1/1}>
                    <img 
                      src={iphoneImages[0]?.src || "/lovable-uploads/b58d9fe6-a7c6-416a-9594-20451eb86002.png"} 
                      alt="iPhone 16 Pro colors" 
                      className="rounded-md object-contain w-full h-full" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/lovable-uploads/b58d9fe6-a7c6-416a-9594-20451eb86002.png";
                      }}
                    />
                  </AspectRatio>
                </div>
                <div className="w-[120px]">
                  <AspectRatio ratio={1/1}>
                    <img 
                      src={iphoneImages[1]?.src || "/lovable-uploads/b96a5830-12f3-497d-966a-b0930df4e6d0.png"} 
                      alt="iPhone 16 Pro display" 
                      className="rounded-md object-contain w-full h-full" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/lovable-uploads/b96a5830-12f3-497d-966a-b0930df4e6d0.png";
                      }}
                    />
                  </AspectRatio>
                </div>
              </div>
            </div>
            
            {/* Blue promotional text */}
            <div className="text-center px-3 py-2 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-blue-600 font-medium text-sm">
                Upgrade your tech and Cash In! Claim $1000 Towards a iPhone 16 Pro Max Elevate your productivity and your wallet!
              </p>
            </div>
          </div>
          
          <a 
            href="https://unlockrwrd.com/nqA5Sq7" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block w-full"
          >
            <Button 
              className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg animate-pulse"
            >
              Continue to Claim Your Reward
            </Button>
          </a>
          
          <p className="text-sm text-center text-gray-500 mt-4">
            Limited time offer. Your reward is reserved for the time shown in the timer.
          </p>
        </>
      ) : (
        <ProductOffer onClaim={handleClaim} />
      )}
    </div>
  );
};

export default Results;
