
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { HelpCircle } from "lucide-react";
import { Button } from "./ui/button";

const FAQ = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="rounded-full bg-blue-600 shadow-lg hover:bg-blue-700 transition-all"
          style={{ width: "3.5rem", height: "3.5rem" }}
        >
          <HelpCircle className="h-10 w-10 text-white" />
          <span className="sr-only">FAQ</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full max-w-md rounded-xl border-0 shadow-lg">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-center text-blue-600 text-2xl">Frequently Asked Questions</DialogTitle>
        </DialogHeader>
        
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
      </DialogContent>
    </Dialog>
  );
};

export default FAQ;
