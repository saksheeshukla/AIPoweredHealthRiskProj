export function classifyRisk(factors) {
  let score = 0;
  const rationale = [];

  if (factors.includes("smoking")) { score += 40; rationale.push("smoking"); }
  if (factors.includes("alcohol consumption")) { score += 25; rationale.push("alcohol intake"); }
  if (factors.includes("low exercise")) { score += 20; rationale.push("low activity"); }
  if (factors.includes("poor diet")) { score += 18; rationale.push("high sugar diet"); }

  const risk_level = score > 70 ? "high" : score > 35 ? "moderate" : "low";
  return { risk_level, score, rationale };
}
