
import { Button } from "@/components/ui/button";
import Timer from "@/components/Timer";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import IPhoneImageFetcher from "@/components/IPhoneImageFetcher";
import { Skeleton } from "@/components/ui/skeleton";
import { useIsMobile } from "@/hooks/use-mobile";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface ProductOfferProps {
  onClaim: () => void;
}

interface IPhoneImage {
  src: string;
  alt: string;
}

// Define guaranteed working fallback image with size optimization
const BEAUTY_IMAGE = "/lovable-uploads/e69b8efa-60ee-44d2-9a0f-535b8bcaefd6.png?q=25&w=400";

const ProductOffer = ({ onClaim }: ProductOfferProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const isMobile = useIsMobile();
  
  // Preload fallback image immediately
  useEffect(() => {
    // Load the beauty image
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = BEAUTY_IMAGE;
    
    // Set a shorter timeout for faster initial render
    const timeout = setTimeout(() => {
      setImageLoaded(true);
    }, 300); // Faster timeout for better UX
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div className="border border-gray-200 rounded-lg shadow-lg p-6 max-w-md mx-auto bg-white pb-20 md:pb-6">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-gray-900">Congratulations!</h3>
        <p className="text-green-600 font-medium">You've qualified for our special offer!</p>
      </div>

      <div className="mb-6">
        {/* Display the single beauty image with proper aspect ratio */}
        <div className="w-full relative rounded-md overflow-hidden">
          <AspectRatio ratio={4/3} className="bg-muted">
            {!imageLoaded ? (
              <Skeleton className="w-full h-full absolute inset-0 rounded-md" />
            ) : null}
            <img 
              src={BEAUTY_IMAGE} 
              alt="Ulta Beauty Products" 
              className={`w-full h-full object-cover rounded-md ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ transition: 'opacity 0.1s' }} // Faster transition
              width="400"
              height="300"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              onLoad={() => setImageLoaded(true)}
            />
          </AspectRatio>
        </div>
      </div>

      <div className="mb-6">
        <h4 className="font-bold text-lg mb-2">Ulta Beauty Gift Card</h4>
        <div className="flex items-center mb-1">
          <Check className="h-4 w-4 text-green-500 mr-2" />
          <span className="text-gray-700">Premium beauty products</span>
        </div>
        <div className="flex items-center mb-1">
          <Check className="h-4 w-4 text-green-500 mr-2" />
          <span className="text-gray-700">Skincare & makeup essentials</span>
        </div>
        <div className="flex items-center mb-1">
          <Check className="h-4 w-4 text-green-500 mr-2" />
          <span className="text-gray-700">Use in-store or online</span>
        </div>
      </div>

      <div className="mb-6 text-center">
        <div className="flex items-center justify-center">
          <span className="text-gray-500 line-through text-lg mr-2">$500.00</span>
          <span className="text-2xl font-bold text-green-600">$29.99</span>
        </div>
        <p className="text-orange-500 font-medium text-sm mt-1">+ FREE Shipping</p>
      </div>

      <Timer minutes={15} />

      <a 
        href="https://glstrck.com/aff_c?offer_id=839&aff_id=25969&source=OldFunnel" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block w-full"
      >
        <Button 
          className={`w-full py-6 text-lg bg-green-600 hover:bg-green-700 shadow-lg ${isMobile ? 'fixed bottom-4 left-0 right-0 max-w-xs mx-auto z-10' : 'mt-6'}`}
        >
          CLAIM NOW
        </Button>
      </a>

      <p className="text-xs text-center text-gray-500 mt-4">
        Limited quantity available. Offer valid while supplies last.
      </p>
    </div>
  );
};

export default ProductOffer;
