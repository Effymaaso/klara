import { z } from "zod";

export const posterSchema = z.object({
  textPrompt: z
    .string()
    .min(5, { message: "Please enter text with at least 5 characters." }),
  referenceImage: z.any().optional(),
  imagePrompt: z
    .string()
    .min(5, { message: "Please describe the image in at least 5 characters." }),
  dimensions: z.string(),
  style: z.string(),
});

export interface ActionState {
  error?: string;
  posters?: string[];
  dimensions?: string;
}

const GeneratePosterDesignInputSchema = z.object({
  textPrompt: z.string(),
  imagePrompt: z.string(),
  dimensions: z.string(),
  referenceImage: z.string().optional().describe(
    "A reference image for the poster, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
  ),
});
export type GeneratePosterDesignInput = z.infer<typeof GeneratePosterDesignInputSchema>;

const GeneratePosterDesignOutputSchema = z.object({
  posterDesigns: z.array(
    z.object({
      imageUrl: z.string(),
    })
  ),
});
export type GeneratePosterDesignOutput = z.infer<typeof GeneratePosterDesignOutputSchema>;

const GenerateAltTextInputSchema = z.object({
  text: z.string(),
});
export type GenerateAltTextInput = z.infer<typeof GenerateAltTextInputSchema>;

const GenerateAltTextOutputSchema = z.object({
  alternatives: z.array(z.string()),
});
export type GenerateAltTextOutput = z.infer<typeof GenerateAltTextOutputSchema>;
