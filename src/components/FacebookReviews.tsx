import React from "react";

const FacebookReviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      date: "2 days ago",
      content: "I was skeptical at first, but I actually received my iPhone 15 Pro Max! The survey was quick and the shipping was faster than expected. Thank you Ultimate Phone Program!",
      likes: 47,
      replies: 5
    },
    {
      name: "Michael Thompson",
      date: "1 week ago",
      content: "Just got my new phone yesterday! The whole process was smooth and the customer service team was very helpful when I had questions. Highly recommend!",
      likes: 32,
      replies: 3
    },
    {
      name: "Jessica Williams",
      date: "3 days ago",
      content: "I thought this was too good to be true, but my phone arrived this morning! The survey only took me about 5 minutes to complete. So happy with my new device!",
      likes: 28,
      replies: 2
    }
  ];

  return (
    <div className="mt-8 mb-4">
      <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="bg-[#3b5998] text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">
              <span className="text-xl font-bold">f</span>
            </div>
            <div>
              <h5 className="text-xs font-semibold text-[#3b5998]">Ultimate Phone Program</h5>
              <p className="text-xs text-gray-500">Sponsored</p>
            </div>
          </div>
          <div className="text-[#3b5998] text-xs font-medium">Follow</div>
        </div>
        
        <p className="text-sm mb-4">
          Users are loving their experience with our program! Check out what people are saying about the Ultimate Phone Program:
        </p>
        
        <div className="space-y-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-50 rounded p-3">
              <div className="flex items-center mb-2">
                <div className="bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                  <span className="text-gray-600 font-bold">{review.name.charAt(0)}</span>
                </div>
                <div>
                  <p className="text-sm font-medium">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
              </div>
              <p className="text-sm mb-2">{review.content}</p>
              <div className="flex items-center text-xs text-gray-500">
                <span className="mr-3">Like ({review.likes})</span>
                <span>Reply ({review.replies})</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 text-center">
          <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium">
            Take Survey Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacebookReviews;
