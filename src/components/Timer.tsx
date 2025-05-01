
import { useEffect, useState } from "react";

interface TimerProps {
  minutes: number;
}

const Timer = ({ minutes }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(minutes * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft(prev => {
        // Don't go below 0
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-red-50 border border-red-200 rounded-md p-3 text-center my-6">
      <p className="text-sm text-red-700 mb-1">Limited Time Offer</p>
      <div className="text-xl font-bold text-red-700">{formatTime(timeLeft)}</div>
    </div>
  );
};

export default Timer;
