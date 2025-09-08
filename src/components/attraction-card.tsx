"use client";

import Image from "next/image";
import type { Attraction } from "@/lib/placeholder-data";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export function AttractionCard({ attraction }: { attraction: Attraction }) {
  return (
    <Card className="flex flex-col overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={attraction.imageUrl}
            alt={attraction.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            data-ai-hint={attraction.dataAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4">
        <CardTitle className="text-xl font-headline mb-2">{attraction.name}</CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {attraction.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              View Details
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <div className="relative aspect-video w-full mb-4 rounded-lg overflow-hidden">
                 <Image
                    src={attraction.imageUrl}
                    alt={attraction.name}
                    fill
                    className="object-cover"
                    data-ai-hint={attraction.dataAiHint}
                  />
              </div>
              <DialogTitle className="text-2xl font-headline">{attraction.name}</DialogTitle>
              <div className="flex items-center gap-4 pt-2">
                 <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < attraction.rating ? "text-primary fill-primary" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {attraction.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
              </div>
              <DialogDescription className="pt-4 text-base text-foreground">
                {attraction.description}
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
