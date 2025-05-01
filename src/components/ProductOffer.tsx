
import { Button } from "@/components/ui/button";
import Timer from "@/components/Timer";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import IPhoneImageFetcher from "@/components/IPhoneImageFetcher";
import { Skeleton } from "@/components/ui/skeleton";

interface ProductOfferProps {
  onClaim: () => void;
}

interface IPhoneImage {
  src: string;
  alt: string;
}

// Define guaranteed working fallback image
const FALLBACK_IMAGE = "/lovable-uploads/e8ded452-0d3c-44c9-8312-b92eea2579ef.png";

const ProductOffer = ({ onClaim }: ProductOfferProps) => {
  const [selectedImage, setSelectedImage] = useState<string>(FALLBACK_IMAGE);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  // Preload the fallback image
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageLoaded(true);
    img.src = FALLBACK_IMAGE;
  }, []);
  
  const handleImagesFetched = (images: IPhoneImage[]) => {
    if (images.length > 0) {
      // Randomly select one image
      const randomIndex = Math.floor(Math.random() * images.length);
      setSelectedImage(images[randomIndex].src);
    }
  };
  
  return (
    <div className="border border-gray-200 rounded-lg shadow-lg p-6 max-w-md mx-auto bg-white">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-gray-900">Congratulations!</h3>
        <p className="text-green-600 font-medium">You've qualified for our special offer!</p>
      </div>

      <div className="mb-6">
        {/* Hidden image fetcher that provides images */}
        <div className="hidden">
          <IPhoneImageFetcher onComplete={handleImagesFetched} />
        </div>
        
        {/* Display the selected image */}
        {!imageLoaded ? (
          <Skeleton className="w-full h-48 rounded-md" />
        ) : (
          <img 
            src={selectedImage} 
            alt="iPhone 16 Pro Max" 
            className="w-full h-48 object-cover rounded-md" 
            loading="eager"
            fetchPriority="high"
            crossOrigin="anonymous"
            onError={() => {
              setSelectedImage(FALLBACK_IMAGE);
            }}
          />
        )}
      </div>

      <div className="mb-6">
        <h4 className="font-bold text-lg mb-2">iPhone 16 Pro Max</h4>
        <div className="flex items-center mb-1">
          <Check className="h-4 w-4 text-green-500 mr-2" />
          <span className="text-gray-700">Latest A18 Pro chip</span>
        </div>
        <div className="flex items-center mb-1">
          <Check className="h-4 w-4 text-green-500 mr-2" />
          <span className="text-gray-700">48MP camera system</span>
        </div>
        <div className="flex items-center mb-1">
          <Check className="h-4 w-4 text-green-500 mr-2" />
          <span className="text-gray-700">All-day battery life</span>
        </div>
      </div>

      <div className="mb-6 text-center">
        <div className="flex items-center justify-center">
          <span className="text-gray-500 line-through text-lg mr-2">$1299.99</span>
          <span className="text-2xl font-bold text-green-600">$299.99</span>
        </div>
        <p className="text-blue-700 font-medium text-sm mt-1">+ FREE Shipping</p>
      </div>

      <Timer minutes={15} />

      <Button 
        onClick={onClaim} 
        className="w-full py-6 text-lg bg-green-600 hover:bg-green-700"
      >
        CLAIM NOW
      </Button>

      <p className="text-xs text-center text-gray-500 mt-4">
        Limited quantity available. Offer valid while supplies last.
      </p>
    </div>
  );
};

export default ProductOffer;
