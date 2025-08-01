
'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating alternative text options for posters.
 *
 * The flow takes user-provided text as input and returns a list of alternative text options suitable for use on a poster.
 * This allows the user to have a choice of suitable texts for their poster.
 *
 * @exports {
 *   generateAltText,
 *   GenerateAltTextInput,
 *   GenerateAltTextOutput,
 * }
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import type {GenerateAltTextInput as GenAltTextInput, GenerateAltTextOutput as GenAltTextOutput} from '@/lib/types';

export type GenerateAltTextInput = GenAltTextInput;
export type GenerateAltTextOutput = GenAltTextOutput;

/**
 * Input schema for the generateAltText flow.
 */
const GenerateAltTextInputSchema = z.object({
  text: z.string().describe('The original text for the poster.'),
});

/**
 * Output schema for the generateAltText flow.
 */
const GenerateAltTextOutputSchema = z.object({
  alternatives: z.array(z.string()).describe('An array of alternative text options.'),
});


/**
 * Prompt definition for generating alternative text.
 */
const generateAltTextPrompt = ai.definePrompt({
  name: 'generateAltTextPrompt',
  input: {schema: GenerateAltTextInputSchema},
  output: {schema: GenerateAltTextOutputSchema},
  prompt: `You are a marketing expert skilled at crafting compelling advertising copy.
  Given the following text, generate three alternative versions that would be suitable for use on a promotional poster.  The alternatives should be attention-grabbing and concise.

  Original text: {{{text}}}

  Respond with only an array of strings.`,
});

/**
 * Flow definition for generating alternative text options.
 */
const generateAltTextFlow = ai.defineFlow(
  {
    name: 'generateAltTextFlow',
    inputSchema: GenerateAltTextInputSchema,
    outputSchema: GenerateAltTextOutputSchema,
  },
  async input => {
    const {output} = await generateAltTextPrompt(input);
    return output!;
  }
);


/**
 * Wrapper function for the generateAltTextFlow.
 */
export async function generateAltText(input: GenerateAltTextInput): Promise<GenerateAltTextOutput> {
  return generateAltTextFlow(input);
}
