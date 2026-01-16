export function calculateConfidence(answers) {
  const keys = Object.keys(answers);
  const missing_fields = keys.filter(k => answers[k] === null);
  const confidence = Number(((keys.length - missing_fields.length) / keys.length).toFixed(2));

  return { confidence, missing_fields };
}
