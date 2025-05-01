
import { useState, useEffect } from "react";
import { ThumbsUp, MessageCircle, ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import IPhoneImageFetcher from "@/components/IPhoneImageFetcher";

// Define a review type
type Review = {
  name: string;
  avatar: string;
  time: string;
  text: string;
  likes: number;
  comments: number;
  images: string[];
};

// Define sort types
type SortOption = "newest" | "most-likes" | "most-comments";

const FacebookReviews = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [sortOption, setSortOption] = useState<SortOption>("newest");
  const [iphoneImages, setIphoneImages] = useState<Array<{src: string, alt: string}>>([]);
  const [displayedReviewsData, setDisplayedReviewsData] = useState<Review[]>([]);
  
  // Define all reviews in one array - including the ones with uploaded images and new text-only reviews
  const allReviews: Review[] = [
    {
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/40?img=1",
      time: "2 hours ago",
      text: "I just received my iPhone 16 Pro Max! The survey was super easy and shipping was fast. So happy with this program!",
      likes: 24,
      comments: 2,
      images: ["public/lovable-uploads/b6217fe5-8f9c-4a38-a029-a7f143e799b0.png"]
    },
    {
      name: "Michael Thomas",
      avatar: "https://i.pravatar.cc/40?img=5",
      time: "Yesterday",
      text: "This is legit! Was skeptical at first but decided to try anyway. Got my new iPhone in just 3 days after completing the survey. Amazing service!",
      likes: 42,
      comments: 5,
      images: ["public/lovable-uploads/7839869b-e3e7-40a5-8fe4-5f64abc350a8.png"]
    },
    {
      name: "Jessica Williams",
      avatar: "https://i.pravatar.cc/40?img=8",
      time: "2 days ago",
      text: "Just wow! Survey took less than 5 minutes and the iPhone arrived perfectly packaged. My old phone was dying so this came at the perfect time!",
      likes: 19,
      comments: 1,
      images: ["public/lovable-uploads/21efaadd-c4fe-4381-98db-b5e3524d9aec.png"]
    },
    {
      name: "Robert Chen",
      avatar: "https://i.pravatar.cc/40?img=12",
      time: "3 days ago",
      text: "The whole process was surprisingly simple. I completed the survey during lunch break and received confirmation immediately. Phone arrived few days later. 10/10 would recommend!",
      likes: 38,
      comments: 3,
      images: ["public/lovable-uploads/6efbd04b-9843-49a8-bd07-700d5e08c2b1.png"]
    },
    {
      name: "Amanda Rodriguez",
      avatar: "https://i.pravatar.cc/40?img=22",
      time: "Last week",
      text: "Best decision ever! My iPhone arrived in perfect condition and I love all the new features. The Ultimate Phone Program is amazing - thank you so much!",
      likes: 57,
      comments: 7,
      images: ["public/lovable-uploads/e8ded452-0d3c-44c9-8312-b92eea2579ef.png"]
    },
    {
      name: "David Wilson",
      avatar: "https://i.pravatar.cc/40?img=30",
      time: "Last week",
      text: "I've been wanting the new iPhone 16 Pro Max for months but couldn't afford it. This program made it possible! Shipping was quick and the phone is absolutely perfect.",
      likes: 32,
      comments: 4,
      images: ["public/lovable-uploads/e8ded452-0d3c-44c9-8312-b92eea2579ef.png"]
    },
    {
      name: "Sophia Garcia",
      avatar: "https://i.pravatar.cc/40?img=25",
      time: "2 weeks ago",
      text: "Got my iPhone 16 Pro Max through the Ultimate Phone Program and I couldn't be happier! The camera quality is incredible and the battery lasts all day. Thank you UPP!",
      likes: 45,
      comments: 6,
      images: ["public/lovable-uploads/e8ded452-0d3c-44c9-8312-b92eea2579ef.png"]
    },
    {
      name: "Jason Moore",
      avatar: "https://i.pravatar.cc/40?img=15",
      time: "2 weeks ago",
      text: "No way this was real, but I was wrong! Completed the survey and got my iPhone 16 Pro Max last week. Everything works perfectly and it came with all accessories. Best decision ever!",
      likes: 38,
      comments: 8,
      images: ["public/lovable-uploads/e8ded452-0d3c-44c9-8312-b92eea2579ef.png"]
    },
    // Adding new text-only reviews 
    {
      name: "Emma Peterson",
      avatar: "https://i.pravatar.cc/40?img=3",
      time: "4 days ago",
      text: "Thought it was too good to be true, but I'm literally typing this from my new iPhone 16 Pro Max! The screen is gorgeous and the battery life is insane compared to my old phone.",
      likes: 21,
      comments: 3,
      images: []
    },
    {
      name: "Liam Johnson",
      avatar: "https://i.pravatar.cc/40?img=10",
      time: "5 days ago",
      text: "So grateful for this opportunity! My old phone was on its last legs. The survey was straightforward and my new iPhone came in the mail just 4 days later.",
      likes: 17,
      comments: 2,
      images: []
    },
    {
      name: "Olivia Rodriguez",
      avatar: "https://i.pravatar.cc/40?img=16",
      time: "Last week",
      text: "My friends didn't believe me when I told them about this program, but now they're all signing up after seeing my new iPhone 16 Pro Max! The camera is AMAZING.",
      likes: 29,
      comments: 5,
      images: []
    },
    {
      name: "Noah Martinez",
      avatar: "https://i.pravatar.cc/40?img=20",
      time: "Last week",
      text: "Just got my iPhone 16 Pro Max yesterday. The setup was quick and all my data transferred perfectly. This phone is seriously impressive!",
      likes: 15,
      comments: 1,
      images: []
    },
    {
      name: "Ava Thompson",
      avatar: "https://i.pravatar.cc/40?img=23",
      time: "2 weeks ago",
      text: "After my last phone broke, I couldn't afford a replacement. This program was a lifesaver! The iPhone 16 Pro Max is way better than anything I've had before.",
      likes: 33,
      comments: 4,
      images: []
    },
    {
      name: "Ethan Wright",
      avatar: "https://i.pravatar.cc/40?img=33",
      time: "3 weeks ago",
      text: "I was hesitant but decided to try it anyway. So glad I did! The whole process was smooth and I got my new iPhone right on time as promised.",
      likes: 41,
      comments: 6,
      images: []
    }
  ];

  useEffect(() => {
    // Randomize the reviews on first load
    randomizeReviews();
  }, []);
  
  const randomizeReviews = () => {
    // Create a copy of all reviews and shuffle them
    const shuffled = [...allReviews].sort(() => 0.5 - Math.random());
    // Make sure at least one review with an image is among the first 5 visible reviews
    const hasImageInFirst = shuffled.slice(0, 5).some(review => review.images.length > 0);
    
    if (!hasImageInFirst) {
      // Find the first review with an image
      const firstImageIndex = shuffled.findIndex(review => review.images.length > 0);
      if (firstImageIndex >= 5) {
        // Swap it into the visible area (with the first item)
        const temp = shuffled[0];
        shuffled[0] = shuffled[firstImageIndex];
        shuffled[firstImageIndex] = temp;
      }
    }
    
    setDisplayedReviewsData(shuffled);
  };

  const handleImagesFetched = (images: Array<{src: string, alt: string}>) => {
    // Not using the API-fetched images anymore since we're using the specific uploaded images
    setIphoneImages(images);
  };
  
  // Sort the reviews based on the selected option
  const getSortedReviews = () => {
    switch (sortOption) {
      case "most-likes":
        return [...displayedReviewsData].sort((a, b) => b.likes - a.likes);
      case "most-comments":
        return [...displayedReviewsData].sort((a, b) => b.comments - a.comments);
      case "newest":
      default:
        return displayedReviewsData; // Already randomized or sorted by time
    }
  };
  
  const sortedReviews = getSortedReviews();
  const displayedReviews = showAllReviews ? sortedReviews : sortedReviews.slice(0, 5);
  
  return (
    <div className="mt-8 bg-white rounded-lg shadow-md p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-[#3b5998] rounded-full flex items-center justify-center">
            <span className="text-white font-bold">f</span>
          </div>
          <span className="ml-2 font-semibold text-[#3b5998]">Read what others say about our program:</span>
        </div>
        <span className="text-sm text-gray-600 font-medium">{allReviews.length} comments</span>
      </div>

      {/* Hidden iPhone Image Fetcher */}
      <div className="hidden">
        <IPhoneImageFetcher onComplete={handleImagesFetched} />
      </div>

      <div className="flex items-center justify-between mb-2">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-sm text-gray-500 flex items-center">
            Sort by: {sortOption === "newest" ? "Newest" : sortOption === "most-likes" ? "Highest Liked" : "Most Comments"}
            <ChevronDown className="w-3 h-3 ml-1" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setSortOption("newest")}>
              Newest
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortOption("most-likes")}>
              Highest Liked
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSortOption("most-comments")}>
              Most Comments
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        
        {/* Added randomize button */}
        <button 
          onClick={randomizeReviews}
          className="text-sm text-blue-600 hover:underline"
        >
          Refresh Comments
        </button>
      </div>

      <Separator className="mb-4" />

      {/* Display sorted reviews */}
      {displayedReviews.map((review, index) => (
        <div className="mb-4" key={index}>
          <div className="flex items-start">
            <img src={review.avatar} alt="User" className="w-8 h-8 rounded-full mr-2" />
            <div className="flex-1">
              <div className="flex justify-between">
                <h4 className="font-semibold text-sm">{review.name}</h4>
                <span className="text-xs text-gray-500">{review.time}</span>
              </div>
              <p className="text-sm mt-1">{review.text}</p>
              
              {/* Images if any */}
              {review.images.length > 0 && (
                <div className="mt-2 flex">
                  <div className="relative w-32 h-32 rounded-md overflow-hidden bg-gray-100">
                    <img 
                      src={review.images[0]} 
                      alt="iPhone 16 Pro Max" 
                      className="object-cover w-full h-full" 
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "public/lovable-uploads/e8ded452-0d3c-44c9-8312-b92eea2579ef.png";
                      }}
                    />
                  </div>
                </div>
              )}
              
              <div className="flex items-center mt-1 text-xs text-gray-500">
                <ThumbsUp className="w-3 h-3 mr-1" /> {review.likes}
                <MessageCircle className="w-3 h-3 ml-3 mr-1" /> {review.comments}
              </div>
            </div>
          </div>
          
          {/* Ultimate Phone Program Replies - add random replies to some reviews */}
          {(index === 0 || index === 2 || review.likes > 30) && (
            <div className="ml-10 mt-2 border-l-2 border-gray-200 pl-3">
              <div className="flex items-start">
                <div className="relative">
                  <Avatar className="w-6 h-6 mr-2">
                    <AvatarImage src="/lovable-uploads/8c90f432-da05-45a1-81f7-cdbbce1ef2e2.png" alt="Ultimate Phone Program" />
                    <AvatarFallback>UPP</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full w-2 h-2 border border-white"></div>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <h5 className="text-xs font-semibold text-[#3b5998]">Ultimate Phone Program</h5>
                    <span className="text-[10px] bg-blue-100 text-blue-800 px-1 rounded">Verified</span>
                  </div>
                  <p className="text-xs mt-0.5">
                    {index === 0 
                      ? "Thanks for sharing your experience! 😊 We're thrilled you're enjoying your new iPhone 16 Pro Max. Our team works hard to make shipping as fast as possible!"
                      : index === 2
                      ? "We appreciate your feedback! The iPhone 16 Pro Max is indeed a great device, and we're happy it arrived in perfect condition. Enjoy all the amazing features!"
                      : "We're so glad to hear about your positive experience! Thank you for being part of our program and for the kind feedback. Let us know if there's anything else we can do for you!"
                    }
                  </p>
                  <div className="flex items-center mt-1 text-[10px] text-gray-500">
                    <span>Like</span>
                    <span className="mx-1.5">·</span>
                    <span>Reply</span>
                    <span className="mx-1.5">·</span>
                    <span>{index === 0 ? '1h ago' : index === 2 ? '2d ago' : '5d ago'}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Show more link */}
      <div className="text-center mt-2">
        <button 
          className="text-blue-600 text-sm font-semibold"
          onClick={() => setShowAllReviews(!showAllReviews)}
        >
          {showAllReviews ? 'Show less reviews' : 'Show more reviews'}
        </button>
      </div>
    </div>
  );
};

export default FacebookReviews;
