
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

// Define fallback image paths with low quality parameters
const FALLBACK_IMAGES = [
  "/lovable-uploads/b58d9fe6-a7c6-416a-9594-20451eb86002.png?q=50&w=300", // Added quality and width parameters
  "/lovable-uploads/b96a5830-12f3-497d-966a-b0930df4e6d0.png?q=50&w=300"  // Added quality and width parameters
];

// External placeholder images with low quality
const PLACEHOLDER_IMAGES = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&q=50&w=240", // Low quality, smaller size
  "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&q=50&w=240"  // Low quality, smaller size
];

const Results = () => {
  const { answers } = useSurvey();
  const { toast } = useToast();
  const [showingOffer, setShowingOffer] = useState(false);
  const [iphoneImages, setIphoneImages] = useState<Array<{src: string, alt: string}>>([
    {src: FALLBACK_IMAGES[0], alt: "iPhone 16 Pro colors"},
    {src: FALLBACK_IMAGES[1], alt: "iPhone 16 Pro display"}
  ]); // Initialize with fallback images immediately
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [imageLoadStatus, setImageLoadStatus] = useState<boolean[]>([false, false]);
  const isMobile = useIsMobile();

  // Pre-load the fallback images immediately when component mounts
  useEffect(() => {
    // Also try loading placeholder images from Unsplash as additional fallbacks
    const placeholderImg1 = new Image();
    const placeholderImg2 = new Image();
    
    placeholderImg1.src = PLACEHOLDER_IMAGES[0];
    placeholderImg2.src = PLACEHOLDER_IMAGES[1];
    
    // Start loading both original fallback images in parallel
    const img1 = new Image();
    const img2 = new Image();
    
    img1.onload = () => {
      setImageLoadStatus(prev => [true, prev[1]]);
    };
    
    img2.onload = () => {
      setImageLoadStatus(prev => [prev[0], true]);
    };
    
    // Set src after attaching onload handlers
    img1.src = FALLBACK_IMAGES[0];
    img2.src = FALLBACK_IMAGES[1];
    
    // Mark as loaded after a short timeout to avoid waiting too long
    const timeout = setTimeout(() => {
      setImagesLoaded(true);
    }, 1000); // Reduced from 2000ms to 1000ms for faster display
    
    return () => clearTimeout(timeout);
  }, []);

  const handleClaim = () => {
    toast({
      title: "Offer Claimed!",
      description: "Thank you! Check your email for next steps.",
      duration: 5000,
    });
  };
  
  const handleImagesFetched = (images: Array<{src: string, alt: string}>) => {
    // Add quality and size parameters to fetched images
    if (images && images.length >= 2 && images[0].src && images[1].src) {
      // Use two preselected images with lower quality parameters
      const processImageUrl = (url: string) => {
        // If it's an external URL that supports query parameters
        if (url.includes('unsplash.com') || url.includes('images.')) {
          return url.includes('?') ? 
            `${url}&q=50&w=240` : // Add quality and width params 
            `${url}?q=50&w=240`; // Add quality and width params
        }
        return url;
      };
      
      setIphoneImages([
        {src: processImageUrl(images[0].src), alt: "iPhone 16 Pro colors"},
        {src: processImageUrl(images[1].src), alt: "iPhone 16 Pro display"}
      ]);
    }
  };

  const handleImageLoad = (index: number) => {
    setImageLoadStatus(prev => {
      const newStatus = [...prev];
      newStatus[index] = true;
      return newStatus;
    });
    
    // If both images are loaded, set overall loaded state
    if (index === 0 && imageLoadStatus[1] || index === 1 && imageLoadStatus[0]) {
      setImagesLoaded(true);
    }
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
            
            {/* iPhone Images - optimized for mobile with lower quality */}
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <div className={`flex ${isMobile ? 'flex-col items-center' : 'flex-row justify-center'} gap-2`}>
                <div className={`${isMobile ? 'w-[140px]' : 'w-[120px]'}`}>
                  <AspectRatio ratio={1/1}>
                    {!imageLoadStatus[0] ? (
                      <Skeleton className="w-full h-full rounded-md" />
                    ) : (
                      <img 
                        src={iphoneImages[0]?.src} 
                        alt="iPhone 16 Pro colors" 
                        className="rounded-md object-contain w-full h-full" 
                        loading="eager"
                        width="120"
                        height="120"
                        fetchPriority="high"
                        crossOrigin="anonymous"
                        decoding="async"
                        onLoad={() => handleImageLoad(0)}
                        onError={() => {
                          // If error, try placeholder image first, then fallback
                          const imgPlaceholder = document.createElement('img');
                          imgPlaceholder.onload = () => handleImageLoad(0);
                          imgPlaceholder.onerror = () => {
                            const imgFallback = document.createElement('img');
                            imgFallback.onload = () => handleImageLoad(0);
                            imgFallback.src = FALLBACK_IMAGES[0];
                            setIphoneImages(prev => [
                              {src: FALLBACK_IMAGES[0], alt: "iPhone 16 Pro colors"},
                              prev[1]
                            ]);
                          };
                          imgPlaceholder.src = PLACEHOLDER_IMAGES[0];
                          setIphoneImages(prev => [
                            {src: PLACEHOLDER_IMAGES[0], alt: "iPhone 16 Pro colors"},
                            prev[1]
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
                          src={iphoneImages[1]?.src} 
                          alt="iPhone 16 Pro display" 
                          className="rounded-md object-contain w-full h-full" 
                          loading="eager"
                          width="120"
                          height="120" 
                          fetchPriority="high"
                          crossOrigin="anonymous"
                          decoding="async"
                          onLoad={() => handleImageLoad(1)}
                          onError={() => {
                            // If error, try placeholder image first, then fallback
                            const imgPlaceholder = document.createElement('img');
                            imgPlaceholder.onload = () => handleImageLoad(1);
                            imgPlaceholder.onerror = () => {
                              const imgFallback = document.createElement('img');
                              imgFallback.onload = () => handleImageLoad(1);
                              imgFallback.src = FALLBACK_IMAGES[1];
                              setIphoneImages(prev => [
                                prev[0],
                                {src: FALLBACK_IMAGES[1], alt: "iPhone 16 Pro display"}
                              ]);
                            };
                            imgPlaceholder.src = PLACEHOLDER_IMAGES[1];
                            setIphoneImages(prev => [
                              prev[0],
                              {src: PLACEHOLDER_IMAGES[1], alt: "iPhone 16 Pro display"}
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
