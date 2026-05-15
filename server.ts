import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

const getApiKey = () => process.env.GEMINI_API_KEY || process.env.ROHIT_SARKAR_KEY;

// API Routes
app.post("/api/chat", async (req, res) => {
  try {
    const { message } = req.body;
    const apiKey = getApiKey();

    if (!apiKey) {
      return res.status(500).json({ error: "Gemini API Key is not configured." });
    }

    console.log("[SYSTEM] Message received:", message);
    const ai = new GoogleGenAI({ apiKey });
    
    try {
      const response = await ai.models.generateContent({
        model: "gemini-1.5-flash", 
        contents: [{ role: "user", parts: [{ text: message }] }],
        config: {
          systemInstruction: "You are AEGIS (Autonomous Executive Guardian Intelligence System), an advanced AI system built by Rohit Sarkar. Your tone is professional, futuristic, and helpful. Keep answers concise."
        }
      });

      console.log("[SYSTEM] Gemini response candidate count:", response.candidates?.length);
      const text = response.text;

      if (!text) {
        console.warn("[SYSTEM] Empty text in response", response);
        return res.status(500).json({ error: "Empty response from AI core." });
      }

      res.json({ text });
    } catch (innerError: any) {
      console.error("[SYSTEM] Gemini API Inner Error:", innerError);
      res.status(500).json({ 
        error: "AI Core failure", 
        details: innerError.message || "Unknown error during generation" 
      });
    }
  } catch (error: any) {
    console.error("Critical API Route Error:", error);
    res.status(500).json({ 
      error: "Interface Desync", 
      details: error.message || "Critical system error" 
    });
  }
});

async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

setupServer();
