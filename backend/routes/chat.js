import "dotenv/config";

import express from "express";
import { GoogleGenAI } from "@google/genai";

const router = express.Router();

console.log(
  "Gemini API key loaded:",
  !!process.env.GEMINI_API_KEY
);

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message || !message.trim()) {
      return res.status(400).json({
        message: "Message is required"
      });
    }

    const prompt = `
You are GetKit Assistant, the AI chatbot for the GetKit website.

GetKit is a platform where users can explore kits and submit custom kit requests.

Your responsibilities:
- Help users understand GetKit.
- Answer questions about kits.
- Help users decide what type of kit may suit them.
- Explain things in a simple and friendly way.
- Help users understand how they can submit a custom request.
- Keep responses concise.

Important rules:
- Do not invent products, prices, discounts, availability, policies, or features.
- If you don't know something, clearly say that you don't have that information.
- Do not claim that you performed an action if you did not.
- Stay relevant to GetKit and the user's question.

User message:
${message}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: prompt
    });

    return res.status(200).json({
      reply: response.text
    });

  } catch (error) {
    console.error("Chatbot error:", error);

    return res.status(500).json({
      message: "Failed to get response from chatbot",
      error: error.message
    });
  }
});

export default router;