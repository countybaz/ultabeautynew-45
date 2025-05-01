
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useSurvey } from "@/contexts/SurveyContext";
import ProductOffer from "@/components/ProductOffer";
import SurveyHeader from "@/components/SurveyHeader";
import { useToast } from "@/components/ui/use-toast";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import IPhoneImageFetcher from "@/components/IPhoneImageFetcher";
import { useIsMobile } from "@/hooks/use-mobile";
import { Skeleton } from "@/components/ui/skeleton";

// Define fallback image paths for faster loading
const FALLBACK_IMAGES = [
  "/lovable-uploads/b58d9fe6-a7c6-416a-9594-20451eb86002.png",
  "/lovable-uploads/b96a5830-12f3-497d-966a-b0930df4e6d0.png"
];

const Results = () => {
  const { answers } = useSurvey();
  const { toast } = useToast();
  const [showingOffer, setShowingOffer] = useState(false);
  const [iphoneImages, setIphoneImages] = useState<Array<{src: string, alt: string}>>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [imageLoadStatus, setImageLoadStatus] = useState<boolean[]>([false, false]);
  const isMobile = useIsMobile();

  // Pre-load the fallback images
  useEffect(() => {
    const preloadImages = () => {
      // Use the uploaded images directly - these are guaranteed to work
      const fallbackSources = [
        {src: "/lovable-uploads/b58d9fe6-a7c6-416a-9594-20451eb86002.png", alt: "iPhone 16 Pro colors"},
        {src: "/lovable-uploads/b96a5830-12f3-497d-966a-b0930df4e6d0.png", alt: "iPhone 16 Pro display"}
      ];
      
      setIphoneImages(fallbackSources);
      
      // Preload images
      const imagePromises = fallbackSources.map((item, index) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = () => {
            setImageLoadStatus(prev => {
              const newStatus = [...prev];
              newStatus[index] = true;
              return newStatus;
            });
            resolve(true);
          };
          img.onerror = () => resolve(false);
          img.src = item.src;
        });
      });
      
      Promise.all(imagePromises).then(() => {
        setImagesLoaded(true);
      });
    };
    
    preloadImages();
  }, []);

  const handleClaim = () => {
    toast({
      title: "Offer Claimed!",
      description: "Thank you! Check your email for next steps.",
      duration: 5000,
    });
  };
  
  const handleImagesFetched = (images: Array<{src: string, alt: string}>) => {
    // Only update if we received valid images
    if (images && images.length >= 2 && images[0].src && images[1].src) {
      // Get two random images for the display
      const shuffled = [...images].sort(() => 0.5 - Math.random());
      setIphoneImages(shuffled.slice(0, 2));
    }
  };

  const handleImageLoad = (index: number) => {
    setImageLoadStatus(prev => {
      const newStatus = [...prev];
      newStatus[index] = true;
      return newStatus;
    });
  };

  return (
    <div className="max-w-md mx-auto px-4">
      {!showingOffer ? (
        <>
          <SurveyHeader 
            title="Congratulations!" 
            subtitle="Fantastic news! Your participation is confirmed. Continue to the next step to receive your iPhone 16 Pro:"
            className="mb-4"
          />
          
          <div className="mb-4 space-y-3">
            {/* Hidden iPhone Image Fetcher - load in background */}
            <div className="hidden">
              <IPhoneImageFetcher onComplete={handleImagesFetched} />
            </div>
            
            {/* iPhone Images - optimized for mobile */}
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <div className={`flex ${isMobile ? 'flex-col items-center' : 'flex-row justify-center'} gap-2`}>
                <div className={`${isMobile ? 'w-[140px]' : 'w-[120px]'}`}>
                  <AspectRatio ratio={1/1}>
                    {!imageLoadStatus[0] ? (
                      <Skeleton className="w-full h-full rounded-md" />
                    ) : (
                      <img 
                        src={iphoneImages[0]?.src || FALLBACK_IMAGES[0]} 
                        alt="iPhone 16 Pro colors" 
                        className="rounded-md object-contain w-full h-full" 
                        loading="eager"
                        fetchPriority="high"
                        crossOrigin="anonymous"
                        onLoad={() => handleImageLoad(0)}
                        onError={() => {
                          // If error, use the first fallback image
                          const img = document.createElement('img');
                          img.onload = () => handleImageLoad(0);
                          img.src = FALLBACK_IMAGES[0];
                          setIphoneImages(prev => [
                            {src: FALLBACK_IMAGES[0], alt: "iPhone 16 Pro colors"},
                            prev[1] || {src: FALLBACK_IMAGES[1], alt: "iPhone 16 Pro display"}
                          ]);
                        }}
                      />
                    )}
                  </AspectRatio>
                </div>
                
                {!isMobile && (
                  <div className="w-[120px]">
                    <AspectRatio ratio={1/1}>
                      {!imageLoadStatus[1] ? (
                        <Skeleton className="w-full h-full rounded-md" />
                      ) : (
                        <img 
                          src={iphoneImages[1]?.src || FALLBACK_IMAGES[1]} 
                          alt="iPhone 16 Pro display" 
                          className="rounded-md object-contain w-full h-full" 
                          loading="eager"
                          fetchPriority="high"
                          crossOrigin="anonymous"
                          onLoad={() => handleImageLoad(1)}
                          onError={() => {
                            // If error, use the second fallback image
                            const img = document.createElement('img');
                            img.onload = () => handleImageLoad(1);
                            img.src = FALLBACK_IMAGES[1];
                            setIphoneImages(prev => [
                              prev[0] || {src: FALLBACK_IMAGES[0], alt: "iPhone 16 Pro colors"},
                              {src: FALLBACK_IMAGES[1], alt: "iPhone 16 Pro display"}
                            ]);
                          }}
                        />
                      )}
                    </AspectRatio>
                  </div>
                )}
              </div>
            </div>
            
            {/* Blue promotional text */}
            <div className="text-center px-3 py-2 bg-blue-50 rounded-lg border border-blue-100">
              <p className="text-blue-600 font-medium text-sm">
                Upgrade your tech and Cash In! Claim $1000 Towards a iPhone 16 Pro Max Elevate your productivity and your wallet!
              </p>
            </div>
          </div>
          
          {/* Fixed CTA button for mobile */}
          <div className={isMobile ? "sticky bottom-4 z-10 mt-4" : ""}>
            <a 
              href="https://unlockrwrd.com/Jp6DC41Fn" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full"
            >
              <Button 
                className={`w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg animate-pulse ${isMobile ? 'shadow-lg' : ''}`}
              >
                Continue to Claim Your Reward
              </Button>
            </a>
          </div>
          
          <p className="text-sm text-center text-gray-500 mt-4 pb-16">
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
