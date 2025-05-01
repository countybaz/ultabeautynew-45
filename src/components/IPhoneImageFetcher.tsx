
import { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { FirecrawlService } from '@/utils/FirecrawlService';
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Fallback images in case API fails
const fallbackImages = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=400&fit=crop",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=400&fit=crop",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=400&fit=crop",
];

interface IPhoneImage {
  src: string;
  alt: string;
}

export const IPhoneImageFetcher = ({ onComplete }: { onComplete?: (images: IPhoneImage[]) => void }) => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [images, setImages] = useState<IPhoneImage[]>([]);
  const [showApiForn, setShowApiForm] = useState(false);

  useEffect(() => {
    const savedKey = FirecrawlService.getApiKey();
    if (savedKey) {
      setApiKey(savedKey);
      fetchIPhoneImages();
    } else {
      setShowApiForm(true);
    }
  }, []);

  const handleSaveApiKey = async () => {
    if (!apiKey.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid API key",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const isValid = await FirecrawlService.testApiKey(apiKey);
      if (isValid) {
        FirecrawlService.saveApiKey(apiKey);
        toast({
          title: "Success",
          description: "API key saved successfully",
        });
        setShowApiForm(false);
        fetchIPhoneImages();
      } else {
        toast({
          title: "Error",
          description: "Invalid API key",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to validate API key",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const fetchIPhoneImages = async () => {
    setIsLoading(true);
    setProgress(10);
    
    try {
      // Using eBay search for iPhone 16 Pro Max
      const result = await FirecrawlService.crawlWebsite("https://www.ebay.com/sch/i.html?_nkw=iphone+16+pro+max");
      
      if (result.success && result.data) {
        // Parse the HTML to extract image URLs
        const htmlData = result.data.data;
        
        // This is a simplified approach - in real app, parsing needs to be more robust
        const extractedImages = extractImagesFromData(htmlData);
        
        if (extractedImages.length > 0) {
          setImages(extractedImages);
          if (onComplete) onComplete(extractedImages);
          toast({
            title: "Success",
            description: `Found ${extractedImages.length} iPhone images`,
          });
        } else {
          setImages(fallbackImages.map(src => ({ src, alt: "iPhone 16 Pro Max" })));
          if (onComplete) onComplete(fallbackImages.map(src => ({ src, alt: "iPhone 16 Pro Max" })));
          toast({
            title: "Warning",
            description: "No images found, using fallback images",
            variant: "default",
          });
        }
      } else {
        // Use fallback images if API fails
        setImages(fallbackImages.map(src => ({ src, alt: "iPhone 16 Pro Max" })));
        if (onComplete) onComplete(fallbackImages.map(src => ({ src, alt: "iPhone 16 Pro Max" })));
        toast({
          title: "Error",
          description: "Failed to fetch images, using fallback images",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error fetching iPhone images:', error);
      // Use fallback images on error
      setImages(fallbackImages.map(src => ({ src, alt: "iPhone 16 Pro Max" })));
      if (onComplete) onComplete(fallbackImages.map(src => ({ src, alt: "iPhone 16 Pro Max" })));
      toast({
        title: "Error",
        description: "An error occurred, using fallback images",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      setProgress(100);
    }
  };

  const extractImagesFromData = (data: any): IPhoneImage[] => {
    try {
      // In a real app, this would be a proper HTML parser
      // This is just a simplified example
      const tempImages: IPhoneImage[] = [];
      
      if (Array.isArray(data)) {
        data.forEach(item => {
          // Extract image URLs from content
          if (item.content) {
            const imgRegex = /<img[^>]+src="([^">]+)"/g;
            let match;
            while ((match = imgRegex.exec(item.content)) !== null) {
              const src = match[1];
              // Filter for likely product images (larger than thumbnails)
              if (src && !src.includes('thumbs') && !src.includes('icon') && !src.includes('logo')) {
                tempImages.push({
                  src,
                  alt: "iPhone 16 Pro Max"
                });
              }
            }
          }
        });
      }
      
      // If we found at least some images, return them
      if (tempImages.length > 0) {
        return tempImages.slice(0, 10); // Limit to 10 images
      }
      
      return fallbackImages.map(src => ({ src, alt: "iPhone 16 Pro Max" }));
    } catch (error) {
      console.error('Error parsing image data:', error);
      return fallbackImages.map(src => ({ src, alt: "iPhone 16 Pro Max" }));
    }
  };

  return (
    <div className="w-full">
      {showApiForn ? (
        <Card className="p-4">
          <h3 className="font-semibold mb-2">Enter your Firecrawl API Key</h3>
          <p className="text-sm text-gray-600 mb-4">
            To fetch iPhone images from eBay, please enter your Firecrawl API key.
          </p>
          <div className="flex gap-2">
            <Input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              placeholder="Your API Key"
              className="flex-1"
            />
            <Button onClick={handleSaveApiKey} disabled={isLoading}>
              {isLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : "Save"}
            </Button>
          </div>
        </Card>
      ) : (
        <>
          {isLoading ? (
            <div className="w-full py-8 flex flex-col items-center justify-center">
              <Loader2 className="h-8 w-8 animate-spin mb-2" />
              <p className="text-sm text-gray-600">Fetching iPhone 16 Pro Max images...</p>
              <Progress value={progress} className="w-full mt-2" />
            </div>
          ) : images.length > 0 ? (
            <Carousel className="w-full">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="relative h-48 overflow-hidden rounded-lg">
                      <img 
                        src={image.src} 
                        alt={image.alt} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // On error, replace with first fallback image
                          (e.target as HTMLImageElement).src = fallbackImages[0];
                        }}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-2">
                <CarouselPrevious className="static transform-none mx-2" />
                <CarouselNext className="static transform-none mx-2" />
              </div>
            </Carousel>
          ) : (
            <div className="w-full flex justify-center">
              <Button onClick={fetchIPhoneImages}>Refresh iPhone Images</Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default IPhoneImageFetcher;
