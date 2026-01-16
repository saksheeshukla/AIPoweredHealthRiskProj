import express from "express";
import multer from "multer";
import { analyzeText, analyzeImage } from "../controllers/health.controller.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/text", analyzeText);
router.post("/image", upload.single("file"), analyzeImage);

export default router;
