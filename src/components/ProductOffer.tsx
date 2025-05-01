
import { Button } from "@/components/ui/button";
import Timer from "@/components/Timer";
import { Check } from "lucide-react";

interface ProductOfferProps {
  onClaim: () => void;
}

const ProductOffer = ({ onClaim }: ProductOfferProps) => {
  return (
    <div className="border border-gray-200 rounded-lg shadow-lg p-6 max-w-md mx-auto bg-white">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-gray-900">Congratulations!</h3>
        <p className="text-green-600 font-medium">You've qualified for our special offer!</p>
      </div>

      <div className="mb-6">
        <img 
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
          alt="Laptop" 
          className="w-full h-48 object-cover rounded-md" 
        />
      </div>

      <div className="mb-6">
        <h4 className="font-bold text-lg mb-2">Brand New Laptop</h4>
        <div className="flex items-center mb-1">
          <Check className="h-4 w-4 text-green-500 mr-2" />
          <span className="text-gray-700">High performance specs</span>
        </div>
        <div className="flex items-center mb-1">
          <Check className="h-4 w-4 text-green-500 mr-2" />
          <span className="text-gray-700">Latest operating system</span>
        </div>
        <div className="flex items-center mb-1">
          <Check className="h-4 w-4 text-green-500 mr-2" />
          <span className="text-gray-700">1-year warranty included</span>
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
