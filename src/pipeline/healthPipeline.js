import { normalizeSurveyInput } from "../services/surveyParser.service.js";
import { calculateConfidence } from "../utils/confidence.util.js";
import { applyGuardrail } from "../utils/guardrail.util.js";
import { extractRiskFactors, calculateFactorConfidence } from "../services/factor.service.js";
import { classifyRisk } from "../services/risk.service.js";
import { generateRecommendations } from "../services/recommendation.service.js";

export async function runHealthPipeline(input, isImage) {

  const answers = await normalizeSurveyInput(input, isImage);

  const { confidence, missing_fields } = calculateConfidence(answers);

  const guard = applyGuardrail(confidence);
  if (guard) {
    return { answers, missing_fields, confidence, ...guard };
  }

  const factors = extractRiskFactors(answers);
  const factor_confidence = calculateFactorConfidence(confidence);

  const risk = classifyRisk(factors);
  const recommendations = await generateRecommendations(risk.risk_level, factors);

  return {
    answers,
    missing_fields,
    confidence,
    factors,
    factor_confidence,
    risk_level: risk.risk_level,
    score: risk.score,
    rationale: risk.rationale,
    recommendations,
    status: "ok"
  };
}
