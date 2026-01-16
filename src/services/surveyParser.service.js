import fs from "fs";
import { aiClient, MODEL_NAME } from "./ai.service.js";

export async function normalizeSurveyInput(inputSource, isImage) {
  const prompt = `
You are a health survey normalization system.

Classify lifestyle into ONLY these categories:

Exercise: none | rare | moderate | regular
Diet: high sugar | poor | balanced | healthy
Smoking: true | false
Alcohol: true | false
Age: number or null

Choose closest meaning category.
Do NOT invent values.

Return JSON ONLY:

{
 "age": number or null,
 "smoker": true/false/null,
 "alcohol": true/false/null,
 "exercise": "none" | "rare" | "moderate" | "regular" | null,
 "diet": "high sugar" | "poor" | "balanced" | "healthy" | null
}
`;

  let response;

  if (isImage) {
    const base64 = fs.readFileSync(inputSource).toString("base64");

    response = await aiClient.models.generateContent({
      model: MODEL_NAME,
      contents: [
        {
          role: "user",
          parts: [
            { text: prompt },
            { inlineData: { data: base64, mimeType: "image/jpeg" } }
          ]
        }
      ]
    });
  } else {
    response = await aiClient.models.generateContent({
      model: MODEL_NAME,
      contents: prompt + "\nINPUT:\n" + inputSource
    });
  }

  const rawText =
    response.text ??
    response.candidates?.[0]?.content?.parts?.[0]?.text;

  if (!rawText) {
    throw new Error("No text returned from Gemini");
  }

  return JSON.parse(rawText.replace(/```json|```/g, "").trim());
}
