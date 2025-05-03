
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

// Define fallback image paths with aggressive quality reduction
const FALLBACK_IMAGES = [
  "/lovable-uploads/07bbc17e-ed17-4c74-bca2-bcb1eb25135f.png?q=25&w=180", // Very low quality
  "/lovable-uploads/07bbc17e-ed17-4c74-bca2-bcb1eb25135f.png?q=25&w=180"  // Very low quality
];

// External placeholder images with very low quality
const PLACEHOLDER_IMAGES = [
  "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&q=25&w=180", // Ultra-low quality
  "https://images.unsplash.com/photo-1583704361523-de2f7106861a?auto=format&q=25&w=180"  // Ultra-low quality
];

const Results = () => {
  const { answers } = useSurvey();
  const { toast } = useToast();
  const [showingOffer, setShowingOffer] = useState(false);
  const [iphoneImages, setIphoneImages] = useState<Array<{src: string, alt: string}>>([
    {src: FALLBACK_IMAGES[0], alt: "Ulta Beauty gift card"},
    {src: FALLBACK_IMAGES[1], alt: "Ulta Beauty products"}
  ]); // Initialize with fallback images immediately
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [imageLoadStatus, setImageLoadStatus] = useState<boolean[]>([false, false]);
  const isMobile = useIsMobile();

  // Immediately start loading all fallback images in parallel
  useEffect(() => {
    // Load all images in parallel for maximum speed
    const loadAllImages = () => {
      const placeholderPromises = PLACEHOLDER_IMAGES.map((src, index) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve();
          img.src = src;
        });
      });

      const fallbackPromises = FALLBACK_IMAGES.map((src, index) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => {
            setImageLoadStatus(prev => {
              const newStatus = [...prev];
              newStatus[index] = true;
              return newStatus;
            });
            resolve();
          };
          img.onerror = () => resolve();
          img.src = src;
        });
      });

      // Execute all image loading in parallel
      Promise.all([...placeholderPromises, ...fallbackPromises]).then(() => {
        setImagesLoaded(true);
      });
    };

    loadAllImages();
    
    // Ultra-fast timeout for immediate display even if images are still loading
    const timeout = setTimeout(() => {
      setImagesLoaded(true);
    }, 300); // Super fast timeout
    
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
    // Add aggressive quality reduction for better performance
    if (images && images.length >= 2 && images[0].src && images[1].src) {
      const processImageUrl = (url: string) => {
        if (url.includes('unsplash.com') || url.includes('images.')) {
          return url.includes('?') ? 
            `${url}&q=25&w=180` : // Very low quality, small size
            `${url}?q=25&w=180`; // Very low quality, small size
        }
        return url;
      };
      
      setIphoneImages([
        {src: processImageUrl(images[0].src), alt: "Ulta Beauty gift card"},
        {src: processImageUrl(images[1].src), alt: "Ulta Beauty products"}
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
            subtitle="Fantastic news! Your participation is confirmed. Continue to the next step to receive your $500 Ulta Beauty gift card:"
            className="mb-4"
          />
          
          <div className="mb-4 space-y-3">
            {/* Hidden iPhone Image Fetcher - load in background */}
            <div className="hidden">
              <IPhoneImageFetcher onComplete={handleImagesFetched} />
            </div>
            
            {/* Product Images - optimized for mobile with ultra-low quality */}
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <div className={`flex ${isMobile ? 'flex-col items-center' : 'flex-row justify-center'} gap-2`}>
                <div className={`${isMobile ? 'w-[140px]' : 'w-[120px]'}`}>
                  <AspectRatio ratio={1/1}>
                    {!imageLoadStatus[0] ? (
                      <Skeleton className="w-full h-full rounded-md" />
                    ) : (
                      <img 
                        src={iphoneImages[0]?.src} 
                        alt="Ulta Beauty gift card" 
                        className="rounded-md object-contain w-full h-full" 
                        loading="eager"
                        width="120"
                        height="120"
                        fetchPriority="high"
                        crossOrigin="anonymous"
                        decoding="async"
                        onLoad={() => handleImageLoad(0)}
                        onError={() => {
                          setIphoneImages(prev => [
                            {src: FALLBACK_IMAGES[0], alt: "Ulta Beauty gift card"},
                            prev[1]
                          ]);
                          handleImageLoad(0);
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
                          alt="Ulta Beauty products" 
                          className="rounded-md object-contain w-full h-full" 
                          loading="eager"
                          width="120"
                          height="120" 
                          fetchPriority="high"
                          crossOrigin="anonymous"
                          decoding="async"
                          onLoad={() => handleImageLoad(1)}
                          onError={() => {
                            setIphoneImages(prev => [
                              prev[0],
                              {src: FALLBACK_IMAGES[1], alt: "Ulta Beauty products"}
                            ]);
                            handleImageLoad(1);
                          }}
                        />
                      )}
                    </AspectRatio>
                  </div>
                )}
              </div>
            </div>
            
            {/* Orange promotional text */}
            <div className="text-center px-3 py-2 bg-orange-50 rounded-lg border border-orange-100">
              <p className="text-orange-600 font-medium text-sm">
                Upgrade your beauty routine! Claim $500 towards Ulta Beauty products and elevate your self-care!
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
                className={`w-full bg-orange-500 hover:bg-orange-600 py-6 text-lg ${isMobile ? 'shadow-lg' : ''}`}
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
