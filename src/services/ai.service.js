import dotenv from "dotenv";
dotenv.config();

import { GoogleGenAI } from "@google/genai";

export const aiClient = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

export const MODEL_NAME = "gemini-3-flash-preview";
