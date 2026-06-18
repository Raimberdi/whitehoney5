import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize the Gemini AI SDK securely on the server
  // User-Agent: aistudio-build is configured in httpOptions for telemetry compliance
  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });

  // Premium Honey Sommelier pairing API
  app.post("/api/gemini/pairings", async (req, res) => {
    try {
      const { pairingItem, honeyVariety, userContext, base64Image, language } = req.body;
      if (!pairingItem) {
        return res.status(400).json({ error: "pairingItem is required" });
      }

      const langMap: Record<string, string> = {
        en: "English",
        es: "Spanish",
        ru: "Russian",
        ar: "Arabic",
        ur: "Urdu"
      };
      const responseLanguage = langMap[language] || "English";

      const promptText = `You are an elite, Michelin-star Honey Sommelier specializing in rare, premium Kyrgyz White Honey (also known as At-Bashy white honey, organically harvested from wild Sainfoin wildflowers and alpine herbs growing in the unpolluted high-altitude glaciers of the Tian Shan/Ala-Too mountains).

Analyze the gastro-sensory pairing of:
- Pairing Companion: "${pairingItem}"
- Honey Variety: "${honeyVariety || "Rare At-Bashy Sainfoin White Honey"}"
- Additional context or taste preference: "${userContext || "A gourmet food exploration"}"
${base64Image ? "An image of the pairing companion has been provided. Please visually analyze this image to tailor your response specifically to the color, texture, shape, or brand shown, incorporating your physical observations into your verdict!" : ""}

Kyrgyz White Honey possesses an extraordinarily unique profile:
- Aesthetic: Opaque pearly-white/ivory solid-creamy.
- Texture: Butter-smooth, velvety, slowly dissolving on the tongue with zero graininess.
- Taste: Clean, mild floral sweetness with hints of warm vanilla, dairy cream, and high-altitude wild clover. It lacks any harsh or heavy sugar burn.

Deconstruct this combination. Explain why they are harmonized from a chemical, olfactory, or tactile perspective. Outline a complete serving ritual suited for a premium culinary boutique.

CRITICAL REQUIREMENTS:
1. The user's active interface language is "${responseLanguage}".
2. You MUST write ALL the JSON response text values (pairingName, sensoryNotes, sommelierVerdict, servingCeremony, recommendedHoneyTemperature) in "${responseLanguage}". No English values are allowed except brand names or names which don't translate.
3. Conform exactly to the requested JSON Schema.`;

      // Formulate multimodal content parts if an image is uploaded
      let contentsInput: any = promptText;
      if (base64Image) {
        let cleanBase64 = base64Image;
        let detectedMimeType = "image/jpeg";
        if (base64Image.includes(";base64,")) {
          const splitParts = base64Image.split(";base64,");
          detectedMimeType = splitParts[0].replace("data:", "");
          cleanBase64 = splitParts[1];
        }
        contentsInput = {
          parts: [
            {
              inlineData: {
                mimeType: detectedMimeType,
                data: cleanBase64,
              },
            },
            {
              text: promptText,
            },
          ],
        };
      }

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contentsInput,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              pairingName: { type: Type.STRING },
              compatibilityScore: { type: Type.INTEGER, description: "A gourmet compatibility score from 1 to 10" },
              sensoryNotes: { type: Type.STRING, description: "Sensory notes emphasizing olfactory and tactile synergy of Kyrgyz white honey" },
              sommelierVerdict: { type: Type.STRING, description: "Sleek, poetic, Michelin-style verdict of why this specific blend works" },
              servingCeremony: { type: Type.STRING, description: "A beautifully described 3-step ritual to prepare and taste this combination" },
              recommendedHoneyTemperature: { type: Type.STRING, description: "The optimal temperature range, e.g., '14°C - slightly cooled' or 'Room temperature'" },
            },
            required: [
              "pairingName",
              "compatibilityScore",
              "sensoryNotes",
              "sommelierVerdict",
              "servingCeremony",
              "recommendedHoneyTemperature",
            ],
          },
        },
      });

      const text = response.text;
      if (!text) {
        throw new Error("No response output from Gemini model");
      }

      const parsedJSON = JSON.parse(text.trim());
      res.json(parsedJSON);
    } catch (e: any) {
      console.error("Gemini Pairing SOMMELIER error:", e);
      res.status(500).json({
        error: "Sommelier is momentarily offline. High-altitude glacier connection issue.",
        details: e.message || e,
      });
    }
  });

  // Premium Chatbot Ambassador API (Pristine Bee)
  app.post("/api/gemini/chat", async (req, res) => {
    try {
      const { message, history, language } = req.body;
      if (!message) {
        return res.status(400).json({ error: "message is required" });
      }

      const langMap: Record<string, string> = {
        en: "English",
        es: "Spanish",
        ru: "Russian",
        ar: "Arabic",
        ur: "Urdu"
      };
      const responseLanguage = langMap[language] || "English";

      // Build structured context of existing honeys
      const systemInstruction = `You are "Pristine Bee", the elite AI Honey Ambassador and Gourmet Concierge for the ultra-luxury storefront "ALA-TOO".
You possess exhaustive expertise in the world's most pristine, unpolluted, rare high-altitude honeys, especially:
1. KYRGYZ WHITE HONEY (Default, Sainfoin origin, produced from wild Sainfoin & alpine meadows above 2,200 meters in At-Bashy and Suusamyr range of Tian Shan/Ala-Too, Kyrgyzstan). 
   - Characteristics: Opaque pearly/milky-white velvety solid-creamy. Tastes like warm floral vanilla, dairy cream, fresh clover. Extremely raw and slow-crystallized.
   - Products:
     * Royal At-Bashy White Honey - $85 (Sainfoin source, ultra-creamy velvet butter texture, smooth ivory finish).
     * Glacier Blossom - $95 (Alfalfa, Lavender, glacier moraine nectar, absolute flowery and light).
     * Pine-Wildflower - $75 (Fir honeydew, wild chicory & dandelion, unique herbal savory-sweet forest fudge texture).

2. YEMENI ROYAL SIDR HONEY (Medicinal Hadramaut Elixir, gathered from ancient Sidr/Lote trees in Wadi Do'an ravine, Yemen).
   - Price: $135 (Premium therapeutic king of honeys).
   - Characteristics: Highly viscous, clear dense dark amber-gold liquid. Tastes of rich buttery toffee, medicinal herbs, warm spices, and molasses. Does not crystallize easily. High medicinal enzyme count.

CRITICAL BEHAVIOR AND TONE:
- Be incredibly polite, sophisticated, poetic, warm, and highly professional, fitting a high-end luxury brand.
- Assist users with recommendations, sensory profiles, food pairings (like aged cheeses, warm brioche, lapsang souchong tea, fresh fruits), usage rituals, or shipping.
- Your entire response MUST be written in "${responseLanguage}". No English words or translations should leak unless they are specific local names that do not translate (e.g., "At-Bashy", "Sainfoin", "Wadi Do'an", "Sidr").
- Keep responses relatively concise (2-4 sentences or well-formatted direct bullet points) so it fits beautifully inside a small floating chatbot widget.`;

      // Build contents array supporting conversational history
      const contentsList: any[] = [];
      if (history && Array.isArray(history)) {
        history.forEach((h: any) => {
          contentsList.push({
            role: h.sender === "user" ? "user" : "model",
            parts: [{ text: h.text }]
          });
        });
      }
      
      // Append current user message
      contentsList.push({
        role: "user",
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: contentsList,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.8,
        }
      });

      const responseText = response.text;
      if (!responseText) {
        throw new Error("No response output from Pristine Bee chatbot");
      }

      res.json({ reply: responseText.trim() });
    } catch (e: any) {
      console.error("Gemini Chatbot error:", e);
      res.status(500).json({
        error: "Our Honey Ambassador is taking a short rest at the hives.",
        details: e.message || e,
      });
    }
  });

  // Serve static files / Vite bundle
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server launched on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Failed to start server:", err);
});
