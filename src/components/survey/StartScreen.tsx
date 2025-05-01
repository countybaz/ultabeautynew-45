
import { Button } from "@/components/ui/button";
import SurveyHeader from "@/components/SurveyHeader";
import { useSurvey } from "@/contexts/SurveyContext";
import { ArrowRight, ThumbsUp, MessageCircle, Image, Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const StartScreen = () => {
  const {
    goToNextStep
  } = useSurvey();
  const [showAllReviews, setShowAllReviews] = useState(false);
  
  const handleStart = () => {
    goToNextStep();
  };
  
  const extraReviews = [
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
  
  return <div className="max-w-md mx-auto">
      <SurveyHeader title="Ultimate Phone Program" subtitle="Get a new iPhone today!" />
      
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <p className="text-center text-lg mb-4">
          Get a new <span className="text-blue-600 font-semibold">iPhone 16 Pro Max</span> with the Ultimate Phone Program. Simply answer 3 short questions about your digital habits and this fantastic chance is yours!
        </p>
        
        <p className="text-center mb-6">
          Ready to take your tech to the next level? Click on the <span className="text-blue-600 font-semibold">Start</span> button below.
        </p>
        
        <p className="text-sm text-red-600 text-center font-medium mb-6">
          As soon as you click the button, a timer starts and you have 3 minutes to complete the process.
        </p>
      </div>

      <Button onClick={handleStart} className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6">
        Start <ArrowRight className="ml-2" />
      </Button>

      {/* Facebook Review Section */}
      <div className="mt-8 bg-white rounded-lg shadow-md p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-[#3b5998] rounded-full flex items-center justify-center">
              <span className="text-white font-bold">f</span>
            </div>
            <span className="ml-2 font-semibold text-[#3b5998]">Facebook Reviews</span>
          </div>
          <div className="flex items-center">
            <span className="text-yellow-500 text-sm mr-1">★★★★★</span>
            <span className="text-sm font-semibold">4.9/5</span>
          </div>
        </div>

        <Separator className="mb-4" />

        {/* Review 1 */}
        <div className="mb-4">
          <div className="flex items-start">
            <img src="https://i.pravatar.cc/40?img=1" alt="User" className="w-8 h-8 rounded-full mr-2" />
            <div className="flex-1">
              <div className="flex justify-between">
                <h4 className="font-semibold text-sm">Sarah Johnson</h4>
                <span className="text-xs text-gray-500">2 hours ago</span>
              </div>
              <p className="text-sm mt-1">I just received my iPhone 16 Pro Max! The survey was super easy and shipping was fast. So happy with this program!</p>
              
              {/* Image of new iPhone */}
              <div className="mt-2 flex space-x-2">
                <div className="relative w-32 h-32 rounded-md overflow-hidden bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop" alt="New iPhone" className="object-cover w-full h-full" />
                </div>
              </div>
              
              <div className="flex items-center mt-1 text-xs text-gray-500">
                <ThumbsUp className="w-3 h-3 mr-1" /> 24
                <MessageCircle className="w-3 h-3 ml-3 mr-1" /> 2
              </div>
            </div>
          </div>
          
          {/* Reply from Ultimate Phone Program */}
          <div className="ml-10 mt-2 border-l-2 border-gray-200 pl-3">
            <div className="flex items-start">
              <Avatar className="w-6 h-6 mr-2">
                <AvatarImage src="/lovable-uploads/8c90f432-da05-45a1-81f7-cdbbce1ef2e2.png" alt="Ultimate Phone Program" />
                <AvatarFallback>UPP</AvatarFallback>
              </Avatar>
              <div>
                <h5 className="text-xs font-semibold text-[#3b5998]">Ultimate Phone Program</h5>
                <p className="text-xs mt-0.5">Thanks for sharing your experience, Sarah! We're thrilled you're enjoying your new iPhone 16 Pro Max. Don't hesitate to reach out if you need any help!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Review 2 */}
        <div className="mb-4">
          <div className="flex items-start">
            <img src="https://i.pravatar.cc/40?img=5" alt="User" className="w-8 h-8 rounded-full mr-2" />
            <div className="flex-1">
              <div className="flex justify-between">
                <h4 className="font-semibold text-sm">Michael Thomas</h4>
                <span className="text-xs text-gray-500">Yesterday</span>
              </div>
              <p className="text-sm mt-1">This is legit! Was skeptical at first but decided to try anyway. Got my new iPhone in just 3 days after completing the survey. Amazing service!</p>
              
              {/* Multiple images of new iPhone */}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <div className="relative w-full h-24 rounded-md overflow-hidden bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=200&fit=crop" alt="New iPhone" className="object-cover w-full h-full" />
                </div>
                <div className="relative w-full h-24 rounded-md overflow-hidden bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=200&fit=crop" alt="New iPhone" className="object-cover w-full h-full" />
                </div>
              </div>
              
              <div className="flex items-center mt-1 text-xs text-gray-500">
                <ThumbsUp className="w-3 h-3 mr-1" /> 42
                <MessageCircle className="w-3 h-3 ml-3 mr-1" /> 5
              </div>
            </div>
          </div>
        </div>

        {/* Review 3 */}
        <div className="mb-4">
          <div className="flex items-start">
            <img src="https://i.pravatar.cc/40?img=8" alt="User" className="w-8 h-8 rounded-full mr-2" />
            <div className="flex-1">
              <div className="flex justify-between">
                <h4 className="font-semibold text-sm">Jessica Williams</h4>
                <span className="text-xs text-gray-500">2 days ago</span>
              </div>
              <p className="text-sm mt-1">Just wow! Survey took less than 5 minutes and the iPhone arrived perfectly packaged. My old phone was dying so this came at the perfect time!</p>
              <div className="flex items-center mt-1 text-xs text-gray-500">
                <ThumbsUp className="w-3 h-3 mr-1" /> 19
                <MessageCircle className="w-3 h-3 ml-3 mr-1" /> 1
              </div>
            </div>
          </div>
        </div>

        {/* Review 4 */}
        <div className="mb-4">
          <div className="flex items-start">
            <img src="https://i.pravatar.cc/40?img=12" alt="User" className="w-8 h-8 rounded-full mr-2" />
            <div className="flex-1">
              <div className="flex justify-between">
                <h4 className="font-semibold text-sm">Robert Chen</h4>
                <span className="text-xs text-gray-500">3 days ago</span>
              </div>
              <p className="text-sm mt-1">The whole process was surprisingly simple. I completed the survey during lunch break and received confirmation immediately. Phone arrived few days later. 10/10 would recommend!</p>
              <div className="flex items-center mt-1 text-xs text-gray-500">
                <ThumbsUp className="w-3 h-3 mr-1" /> 38
                <MessageCircle className="w-3 h-3 ml-3 mr-1" /> 3
              </div>
            </div>
          </div>
        </div>

        {/* Review 5 */}
        <div className="mb-4">
          <div className="flex items-start">
            <img src="https://i.pravatar.cc/40?img=22" alt="User" className="w-8 h-8 rounded-full mr-2" />
            <div className="flex-1">
              <div className="flex justify-between">
                <h4 className="font-semibold text-sm">Amanda Rodriguez</h4>
                <span className="text-xs text-gray-500">Last week</span>
              </div>
              <p className="text-sm mt-1">Best decision ever! My iPhone arrived in perfect condition and I love all the new features. The Ultimate Phone Program is amazing - thank you so much!</p>
              
              {/* Image of new iPhone */}
              <div className="mt-2 flex">
                <div className="relative w-full h-40 rounded-md overflow-hidden bg-gray-100">
                  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop" alt="New iPhone" className="object-cover w-full h-full" />
                </div>
              </div>
              
              <div className="flex items-center mt-1 text-xs text-gray-500">
                <ThumbsUp className="w-3 h-3 mr-1" /> 57
                <MessageCircle className="w-3 h-3 ml-3 mr-1" /> 7
              </div>
            </div>
          </div>
          
          {/* Reply from Ultimate Phone Program */}
          <div className="ml-10 mt-2 border-l-2 border-gray-200 pl-3">
            <div className="flex items-start">
              <Avatar className="w-6 h-6 mr-2">
                <AvatarImage src="/lovable-uploads/8c90f432-da05-45a1-81f7-cdbbce1ef2e2.png" alt="Ultimate Phone Program" />
                <AvatarFallback>UPP</AvatarFallback>
              </Avatar>
              <div>
                <h5 className="text-xs font-semibold text-[#3b5998]">Ultimate Phone Program</h5>
                <p className="text-xs mt-0.5">We're delighted to hear you're enjoying all the features of your new iPhone, Amanda! Thank you for being part of our program!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional reviews that show when "Show more reviews" is clicked */}
        {showAllReviews && (
          <>
            {extraReviews.map((review, index) => (
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
              </div>
            ))}
          </>
        )}

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

      {/* Add some space at the bottom */}
      <div className="h-10"></div>
    </div>;
};
export default StartScreen;
