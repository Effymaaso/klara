
"use server";

import { generatePosterDesign } from "@/ai/flows/generate-poster-design";
import { generateAltText } from "@/ai/flows/generate-alt-text";
import { posterSchema, type GeneratePosterDesignInput, type GenerateAltTextInput, type ActionState } from "@/lib/types";


export async function generatePosterAction(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  // Use a transition to avoid blocking the UI
  const validatedFields = posterSchema.safeParse(
    Object.fromEntries(formData.entries())
  );

  if (!validatedFields.success) {
    const errorMessages = validatedFields.error.flatten().fieldErrors;
    const firstError = Object.values(errorMessages)[0]?.[0] || 'Invalid input.';
    return {
      error: firstError,
    };
  }

  const { textPrompt, imagePrompt, dimensions, style } = validatedFields.data;

  try {
    const fullTextPrompt = `${textPrompt} in a ${style} style.`;

    const result = await generatePosterDesign({
      textPrompt: fullTextPrompt,
      imagePrompt,
      dimensions,
    } as GeneratePosterDesignInput);

    if (!result.posterDesigns || result.posterDesigns.length === 0) {
      return { error: "The AI could not generate any posters. Please try a different prompt." };
    }

    const urls = result.posterDesigns.map((p) => p.imageUrl);
    return { posters: urls, dimensions };
  } catch (e) {
    console.error(e);
    return {
      error: "An unexpected error occurred while generating posters. Please try again later.",
    };
  }
}

export async function generateAltTextAction(
  text: string
): Promise<{ error?: string; alternatives?: string[] }> {
  if (!text || text.trim().length < 5) {
    return { error: "Please provide a longer text to get suggestions." };
  }
  try {
    const result = await generateAltText({ text } as GenerateAltTextInput);
    return { alternatives: result.alternatives };
  } catch (e) {
    console.error(e);
    return {
      error: "An unexpected error occurred while generating suggestions.",
    };
  }
}
