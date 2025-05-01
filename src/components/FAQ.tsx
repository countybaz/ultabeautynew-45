
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger
} from "@/components/ui/sheet";
import { HelpCircle } from "lucide-react";
import { Button } from "./ui/button";

const FAQ = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute top-4 right-4 rounded-full bg-white shadow-md"
        >
          <HelpCircle className="h-6 w-6 text-blue-600" />
          <span className="sr-only">FAQ</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md overflow-y-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-center text-blue-600 text-2xl">Frequently Asked Questions</SheetTitle>
        </SheetHeader>
        
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-semibold">
              WHAT ARE THE PARTICIPATION REQUIREMENTS?
            </AccordionTrigger>
            <AccordionContent>
              You must be over 18 years old and live in the US.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-semibold">
              WHAT CAN I GET FROM THIS PROGRAM?
            </AccordionTrigger>
            <AccordionContent>
              By participating in this Program, you can receive $1000 towards the purchase of an iPhone 16 Pro Max. 
              The iPhone 16 Pro Max offers exceptional performance, sleek design, and advanced features for all your digital needs.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-semibold">
              WHAT HAPPENS IF I APPLY WITHOUT MEETING THE REQUIREMENTS?
            </AccordionTrigger>
            <AccordionContent>
              Our applications are reviewed daily by our team and those who do not meet the requirements will not be accepted, 
              but we will contact them as soon as they are able to participate.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </SheetContent>
    </Sheet>
  );
};

export default FAQ;
