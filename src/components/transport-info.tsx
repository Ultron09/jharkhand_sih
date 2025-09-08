import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { transportOptions } from "@/lib/placeholder-data";
import { Bus, Car, Train } from "lucide-react";

const iconMap = {
    Bus: <Bus className="h-5 w-5 mr-2" />,
    Train: <Train className="h-5 w-5 mr-2" />,
    Taxi: <Car className="h-5 w-5 mr-2" />
};

export function TransportInfo() {
  return (
     <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
            <h2 className="text-2xl font-headline font-bold">Getting Around Jharkhand</h2>
            <p className="text-muted-foreground mt-2">Find information on local transportation options.</p>
        </div>
        <Accordion type="single" collapsible className="w-full">
        {transportOptions.map((option) => (
            <AccordionItem value={`item-${option.id}`} key={option.id}>
            <AccordionTrigger className="text-lg font-headline">
                <div className="flex items-center">
                    {iconMap[option.type as keyof typeof iconMap]}
                    {option.name}
                </div>
            </AccordionTrigger>
            <AccordionContent className="text-base">
                <p className="mb-2">{option.description}</p>
                <p><strong>Availability:</strong> {option.availability}</p>
                <p><strong>Average Cost:</strong> {option.avgCost}</p>
            </AccordionContent>
            </AccordionItem>
        ))}
        </Accordion>
     </div>
  );
}
