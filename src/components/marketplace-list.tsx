import Image from "next/image";
import { marketplaceItems } from "@/lib/placeholder-data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function MarketplaceList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {marketplaceItems.map((item) => (
        <Card key={item.id} className="flex flex-col overflow-hidden">
          <CardHeader className="p-0">
            <div className="relative aspect-square w-full">
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                data-ai-hint={item.dataAiHint}
              />
              {item.tag && <Badge className="absolute top-2 right-2">{item.tag}</Badge>}
            </div>
          </CardHeader>
          <CardContent className="flex-grow p-4">
            <CardTitle className="text-lg font-headline mb-1">{item.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{item.seller}</p>
          </CardContent>
          <CardFooter className="p-4 pt-0 flex justify-between items-center">
            <p className="text-lg font-semibold text-primary">{item.price}</p>
            <Button>Buy Now</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
