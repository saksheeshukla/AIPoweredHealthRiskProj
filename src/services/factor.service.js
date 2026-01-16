export function extractRiskFactors(answers) {
  const factors = [];

  if (answers.smoker) factors.push("smoking");
  if (answers.alcohol) factors.push("alcohol consumption");
  if (["none","rare"].includes(answers.exercise)) factors.push("low exercise");
  if (["high sugar","poor"].includes(answers.diet)) factors.push("poor diet");

  return factors;
}

export function calculateFactorConfidence(answerConfidence) {
  return Number((answerConfidence * 0.95).toFixed(2));
}
