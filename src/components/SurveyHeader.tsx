
import { cn } from "@/lib/utils";

interface SurveyHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

const SurveyHeader = ({ title, subtitle, className }: SurveyHeaderProps) => {
  return (
    <div className={cn("text-center mb-8", className)}>
      <img 
        src="/lovable-uploads/8c90f432-da05-45a1-81f7-cdbbce1ef2e2.png" 
        alt="Ultimate Phone Program" 
        className="mx-auto h-16 mb-4" 
      />
      <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">{title}</h1>
      {subtitle && <p className="text-gray-600 md:text-lg">{subtitle}</p>}
    </div>
  );
};

export default SurveyHeader;
