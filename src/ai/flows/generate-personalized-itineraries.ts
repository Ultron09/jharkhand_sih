'use server';
/**
 * @fileOverview AI agent that generates personalized trip itineraries for tourists in Jharkhand.
 *
 * - generatePersonalizedItineraries - A function that generates personalized trip itineraries.
 * - GeneratePersonalizedItinerariesInput - The input type for the generatePersonalizedItineraries function.
 * - GeneratePersonalizedItinerariesOutput - The return type for the generatePersonalizedItineraries function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedItinerariesInputSchema = z.object({
  preferences: z
    .string()
    .describe('The preferences of the tourist, such as interests and desired activities.'),
  availableTime: z.string().describe('The available time for the trip (e.g., number of days).'),
  additionalConstraints: z
    .string()
    .optional()
    .describe('Any additional constraints or requirements for the itinerary.'),
});
export type GeneratePersonalizedItinerariesInput = z.infer<
  typeof GeneratePersonalizedItinerariesInputSchema
>;

const GeneratePersonalizedItinerariesOutputSchema = z.object({
  itinerary: z.string().describe('The generated personalized trip itinerary.'),
});
export type GeneratePersonalizedItinerariesOutput = z.infer<
  typeof GeneratePersonalizedItinerariesOutputSchema
>;

export async function generatePersonalizedItineraries(
  input: GeneratePersonalizedItinerariesInput
): Promise<GeneratePersonalizedItinerariesOutput> {
  return generatePersonalizedItinerariesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedItinerariesPrompt',
  input: {schema: GeneratePersonalizedItinerariesInputSchema},
  output: {schema: GeneratePersonalizedItinerariesOutputSchema},
  prompt: `You are an AI travel assistant specializing in creating personalized trip itineraries for tourists visiting Jharkhand, India.

  Based on the tourist's preferences, available time, and any additional constraints, generate a detailed and engaging itinerary that includes:
  - Destination suggestions
  - Activities
  - Estimated time spent at each destination

  Preferences: {{{preferences}}}
  Available Time: {{{availableTime}}}
  Additional Constraints: {{{additionalConstraints}}}

  Provide the itinerary in a well-structured format for easy readability.
  `,
});

const generatePersonalizedItinerariesFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedItinerariesFlow',
    inputSchema: GeneratePersonalizedItinerariesInputSchema,
    outputSchema: GeneratePersonalizedItinerariesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
