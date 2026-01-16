import { aiClient, MODEL_NAME } from "./ai.service.js";

export async function generateRecommendations(risk, factors) {
  if (!factors.length) {
    return [
      "Maintain healthy habits",
      "Continue regular exercise",
      "Keep balanced nutrition"
    ];
  }

  const prompt = `
Provide 3 short, actionable health tips
for ${risk} risk caused by: ${factors.join(", ")}.
Each tip must be under 7 words.
Return JSON array only.
`;

  const res = await aiClient.models.generateContent({
    model: MODEL_NAME,
    contents: prompt
  });

  return JSON.parse(res.text.replace(/```json|```/g, "").trim());
}
