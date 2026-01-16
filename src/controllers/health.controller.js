import { runHealthPipeline } from "../pipeline/healthPipeline.js";

export async function analyzeText(req, res) {
  const { input } = req.body;
  if (!input) return res.status(400).json({ error: "Input required" });

  const result = await runHealthPipeline(input, false);
  res.json(result);
}

export async function analyzeImage(req, res) {
  if (!req.file) return res.status(400).json({ error: "Image required" });

  const result = await runHealthPipeline(req.file.path, true);
  res.json(result);
}
