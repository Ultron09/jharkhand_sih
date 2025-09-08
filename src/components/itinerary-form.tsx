"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { generatePersonalizedItineraries } from "@/ai/flows/generate-personalized-itineraries";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Wand2 } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import { marked } from "marked";

const formSchema = z.object({
  preferences: z.string().min(10, {
    message: "Please tell us a bit more about your interests.",
  }),
  availableTime: z.string({
    required_error: "Please select the duration of your trip.",
  }),
  additionalConstraints: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ItineraryForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [itinerary, setItinerary] = useState("");

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      preferences: "",
      availableTime: "",
      additionalConstraints: "",
    },
  });

  async function onSubmit(values: FormValues) {
    setIsLoading(true);
    setItinerary("");
    try {
      const result = await generatePersonalizedItineraries(values);
      const htmlItinerary = await marked(result.itinerary);
      setItinerary(htmlItinerary);
    } catch (error) {
      console.error("Failed to generate itinerary:", error);
      setItinerary(
        "<p>We encountered an error while creating your itinerary. Please try again.</p>"
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-headline font-bold">AI Itinerary Planner</h2>
        <p className="text-muted-foreground mt-2">
          Let our AI craft the perfect Jharkhand adventure for you.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 mt-6">
            <FormField
              control={form.control}
              name="preferences"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>What are your interests?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., interested in wildlife, waterfalls, temples, and local tribal culture."
                      {...field}
                      rows={4}
                    />
                  </FormControl>
                  <FormDescription>
                    Describe the types of activities and places you enjoy.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="availableTime"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>How long is your trip?</FormLabel>
                   <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select trip duration" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="2 days">1-2 Days</SelectItem>
                      <SelectItem value="4 days">3-4 Days</SelectItem>
                      <SelectItem value="1 week">About a week</SelectItem>
                      <SelectItem value="2 weeks">More than a week</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="additionalConstraints"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Any special requirements?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., family with kids, budget travel, accessibility needs."
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Mention anything else we should consider.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Wand2 className="mr-2 h-4 w-4" />
              )}
              Generate Itinerary
            </Button>
          </form>
        </Form>
      </div>

      <Card className="flex flex-col">
        <CardHeader>
          <CardTitle className="font-headline">Your Personalized Itinerary</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 flex">
          <ScrollArea className="flex-1">
            <div className="prose prose-sm dark:prose-invert max-w-none">
              {isLoading && (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-muted-foreground">
                    <Loader2 className="h-8 w-8 animate-spin" />
                    <p>Crafting your perfect journey...</p>
                </div>
              )}
              {!isLoading && !itinerary && (
                 <div className="flex items-center justify-center h-full text-center text-muted-foreground">
                    <p>Your generated trip plan will appear here.</p>
                </div>
              )}
              {itinerary && <div dangerouslySetInnerHTML={{ __html: itinerary }} className="font-body text-sm" />}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
