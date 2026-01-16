export function applyGuardrail(confidence) {
  if (confidence < 0.5) {
    return { status: "incomplete_profile", reason: ">50% fields missing" };
  }
  return null;
}
