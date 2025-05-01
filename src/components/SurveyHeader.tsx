
import { cn } from "@/lib/utils";
interface SurveyHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}
const SurveyHeader = ({
  title,
  subtitle,
  className
}: SurveyHeaderProps) => {
  return <div className={cn("text-center mb-8", className)}>
      
      <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">Great news! You are among the first to join our Ultimate MacBook Program!</h1>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </div>;
};
export default SurveyHeader;
