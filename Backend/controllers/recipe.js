const dotenv = require("dotenv");
dotenv.config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

async function fetchFromGemini(prompt, callback) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 2048,
      },
    });

    const result = await model.generateContentStream({
      contents: [{ role: "user", parts: [{ text: prompt }]}]
    });

    for await (const chunk of result.stream) {
      const text = chunk.text();
      if (text) callback(text);
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
  }
}

const recipeStream = async (req, res) => {
  try {
    const { ingredients, mealType, dietaryPreferences, cuisine } = req.query;

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const prompt = `
You are a Smart Recipe Generator.

Return the response in THIS EXACT ORDER:

1. Identified Ingredients
2. Matched Recipes
3. Dietary Compatibility
4. Serving Size Options
5. User Tips
6. Confidence Score

You are a Smart Recipe Generator.

Return the response in THIS EXACT ORDER and ensure each section starts on a NEW LINE:

1. Identified Ingredients
2. Matched Recipes
3. Dietary Compatibility
4. Serving Size Options
5. User Tips
6. Confidence Score

VERY IMPORTANT:
- Use clear NEWLINES between sections.
- Use newline after every bullet.
- Use newline after every instruction step.
- Do NOT merge sections into a single line.

Output must be plain text with proper line breaks.

User Input:
Ingredients: ${ingredients}
Meal Type: ${mealType}
Dietary Preferences: ${dietaryPreferences}
Cuisine: ${cuisine}
`;

    fetchFromGemini(prompt, (chunk) => {
      // 🔥 Split each chunk into lines before sending to the frontend
      const lines = chunk.split("\n").filter((line) => line.trim() !== "");

      lines.forEach((line) => {
        res.write(
          `data: ${JSON.stringify({ action: "chunk", data: line })}\n\n`
        );
      });
    });

    req.on("close", () => res.end());
  } catch (error) {
    console.error("Error generating recipe:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { recipeStream };
