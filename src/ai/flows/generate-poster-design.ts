
'use server';

/**
 * @fileOverview Flow for generating poster designs based on user input.
 *
 * - generatePosterDesign - A function that generates poster designs.
 * - GeneratePosterDesignInput - The input type for the generatePosterDesign function.
 * - GeneratePosterDesignOutput - The return type for the generatePosterDesign function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import type {GeneratePosterDesignInput as GenPosterDesignInput, GeneratePosterDesignOutput as GenPosterDesignOutput} from '@/lib/types';

export type GeneratePosterDesignInput = GenPosterDesignInput;
export type GeneratePosterDesignOutput = GenPosterDesignOutput;

const GeneratePosterDesignInputSchema = z.object({
  textPrompt: z.string().describe('Text content for the poster.'),
  imagePrompt: z.string().describe('A description of the image to include in the poster.'),
  dimensions: z.string().describe('The desired dimensions of the poster (e.g., "A4", "11x17").'),
  referenceImage: z.string().optional().describe(
    "A reference image for the poster, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
  ),
});

const GeneratePosterDesignOutputSchema = z.object({
  posterDesigns: z.array(
    z.object({
      imageUrl: z.string().describe('URL of the generated poster image.'),
    })
  ).describe('Array of generated poster design image URLs.'),
});

export async function generatePosterDesign(input: GeneratePosterDesignInput): Promise<GeneratePosterDesignOutput> {
  return generatePosterDesignFlow(input);
}

const generatePosterDesignFlow = ai.defineFlow(
  {
    name: 'generatePosterDesignFlow',
    inputSchema: GeneratePosterDesignInputSchema,
    outputSchema: GeneratePosterDesignOutputSchema,
  },
  async input => {
    const numPosters = 2; // Generate two posters.
    const posterDesigns = [];

    const promptItems = [
        {text: `Generate a poster with the following characteristics:\nText: ${input.textPrompt}\nImage description: ${input.imagePrompt}\nDimensions: ${input.dimensions}.\nMake it visually appealing and suitable for promoting an event or product.`}
    ];

    if (input.referenceImage) {
        promptItems.unshift({media: {url: input.referenceImage}});
    }

    for (let i = 0; i < numPosters; i++) {
      const {media} = await ai.generate({
        // IMPORTANT: ONLY the googleai/gemini-2.0-flash-preview-image-generation model is able to generate images. You MUST use exactly this model to generate images.
        model: 'googleai/gemini-2.0-flash-preview-image-generation',
        prompt: promptItems, // Refine prompts as needed
        config: {
          responseModalities: ['TEXT', 'IMAGE'], // MUST provide both TEXT and IMAGE, IMAGE only won't work
        },
      });

      if (media?.url) {
        posterDesigns.push({imageUrl: media.url});
      }
    }

    return {posterDesigns};
  }
);
