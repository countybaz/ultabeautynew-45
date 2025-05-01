
import { useState } from "react";
import { ThumbsUp, MessageCircle, ChevronDown } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  
  // Define all reviews in one array
  const allReviews: Review[] = [
    {
      name: "Sarah Johnson",
      avatar: "https://i.pravatar.cc/40?img=1",
      time: "2 hours ago",
      text: "I just received my iPhone 16 Pro Max! The survey was super easy and shipping was fast. So happy with this program!",
      likes: 24,
      comments: 2,
      images: ["https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop"]
    },
    {
      name: "Michael Thomas",
      avatar: "https://i.pravatar.cc/40?img=5",
      time: "Yesterday",
      text: "This is legit! Was skeptical at first but decided to try anyway. Got my new iPhone in just 3 days after completing the survey. Amazing service!",
      likes: 42,
      comments: 5,
      images: [
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop", 
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop"
      ]
    },
    {
      name: "Jessica Williams",
      avatar: "https://i.pravatar.cc/40?img=8",
      time: "2 days ago",
      text: "Just wow! Survey took less than 5 minutes and the iPhone arrived perfectly packaged. My old phone was dying so this came at the perfect time!",
      likes: 19,
      comments: 1,
      images: []
    },
    {
      name: "Robert Chen",
      avatar: "https://i.pravatar.cc/40?img=12",
      time: "3 days ago",
      text: "The whole process was surprisingly simple. I completed the survey during lunch break and received confirmation immediately. Phone arrived few days later. 10/10 would recommend!",
      likes: 38,
      comments: 3,
      images: []
    },
    {
      name: "Amanda Rodriguez",
      avatar: "https://i.pravatar.cc/40?img=22",
      time: "Last week",
      text: "Best decision ever! My iPhone arrived in perfect condition and I love all the new features. The Ultimate Phone Program is amazing - thank you so much!",
      likes: 57,
      comments: 7,
      images: ["https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop"]
    },
    {
      name: "David Wilson",
      avatar: "https://i.pravatar.cc/40?img=30",
      time: "Last week",
      text: "I've been wanting the new iPhone 16 Pro Max for months but couldn't afford it. This program made it possible! Shipping was quick and the phone is absolutely perfect.",
      likes: 32,
      comments: 4,
      images: ["https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop"]
    },
    {
      name: "Sophia Garcia",
      avatar: "https://i.pravatar.cc/40?img=25",
      time: "2 weeks ago",
      text: "Got my iPhone 16 Pro Max through the Ultimate Phone Program and I couldn't be happier! The camera quality is incredible and the battery lasts all day. Thank you UPP!",
      likes: 45,
      comments: 6,
      images: ["https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop", "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop"]
    },
    {
      name: "Jason Moore",
      avatar: "https://i.pravatar.cc/40?img=15",
      time: "2 weeks ago",
      text: "No way this was real, but I was wrong! Completed the survey and got my iPhone 16 Pro Max last week. Everything works perfectly and it came with all accessories. Best decision ever!",
      likes: 38,
      comments: 8,
      images: []
    }
  ];
  
  // Sort the reviews based on the selected option
  const getSortedReviews = () => {
    switch (sortOption) {
      case "most-likes":
        return [...allReviews].sort((a, b) => b.likes - a.likes);
      case "most-comments":
        return [...allReviews].sort((a, b) => b.comments - a.comments);
      case "newest":
      default:
        return allReviews; // Already in newest order
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
        <span className="text-sm text-gray-600 font-medium">130 comments</span>
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
                <div className={`mt-2 ${review.images.length > 1 ? 'grid grid-cols-2 gap-2' : 'flex'}`}>
                  {review.images.map((img, imgIndex) => (
                    <div key={imgIndex} className={`relative ${review.images.length > 1 ? 'w-full h-24' : 'w-32 h-32'} rounded-md overflow-hidden bg-gray-100`}>
                      <img src={img} alt="New iPhone" className="object-cover w-full h-full" />
                    </div>
                  ))}
                </div>
              )}
              
              <div className="flex items-center mt-1 text-xs text-gray-500">
                <ThumbsUp className="w-3 h-3 mr-1" /> {review.likes}
                <MessageCircle className="w-3 h-3 ml-3 mr-1" /> {review.comments}
              </div>
            </div>
          </div>
          
          {/* Ultimate Phone Program Replies - only for first and last visible review */}
          {(index === 0 || index === displayedReviews.length - 1) && (
            <div className="ml-10 mt-2 border-l-2 border-gray-200 pl-3">
              <div className="flex items-start">
                <Avatar className="w-6 h-6 mr-2">
                  <AvatarImage src="/lovable-uploads/8c90f432-da05-45a1-81f7-cdbbce1ef2e2.png" alt="Ultimate Phone Program" />
                  <AvatarFallback>UPP</AvatarFallback>
                </Avatar>
                <div>
                  <h5 className="text-xs font-semibold text-[#3b5998]">Ultimate Phone Program</h5>
                  <p className="text-xs mt-0.5">
                    {index === 0 
                      ? "Thanks for sharing your experience! We're thrilled you're enjoying your new iPhone 16 Pro Max. Don't hesitate to reach out if you need any help!"
                      : "We're delighted to hear you're enjoying your new iPhone! Thank you for being part of our program!"
                    }
                  </p>
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
