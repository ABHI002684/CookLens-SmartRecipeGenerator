const dotenv = require("dotenv");
dotenv.config();
const { OpenAI } = require("openai");
const fetchFromOpenAi = async (messages, callback) => {
  const openai = new OpenAI({ apiKey: process.env.API_KEY });
  const aiModel = "gpt-4-1106-preview";

  try {
    const completion = await openai.chat.completions.create({
      model: aiModel,
      messages: messages,
      stream: true,
    });

    for await (const chunk of completion) {
      callback(chunk);
    }
  } catch (err) {
    console.error("Error fetching from OpenAI:", err);
  }
};
const recipeStream = async (req, res) => {
  try {
    const ingredients = req.body.ingredients;
    const mealType = req.body.mealType;
    const dietaryPreferences = req.body.dietaryPreferences;
    const cuisine = req.body.cuisine;
    
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    const sendEvent = (data) => {
      let dataResponse;

      if (data.choices[0].final_reason === "stop") {
        res.write(`data:${JSON.stringify({ action: "done" })}\n\n`);
      } else {
        if (
          data.choices[0].delta.role &&
          data.choices[0].delta.role === "assistant"
        ) {
          dataResponse = {
            action: "start",
          };
        } else {
          dataResponse = {
            action: "chunk",
            data: data.choices[0].delta.content,
          };
        }

        res.write(`data:${JSON.stringify(dataResponse)}\n\n`);
      }
    };

    const prompt = [];
    prompt.push(`You are a Smart Recipe Generator API.  

Your job is to analyze the user's inputs and return strictly valid JSON containing:

1. identifiedIngredients: array of ingredients detected from user input
2. matchedRecipes: array of recipe objects, each containing:
   - title
   - ingredients (list)
   - substitutions (key-value pairs)
   - instructions (step-by-step list)
   - cookingTime (in minutes)
   - difficulty (easy | medium | hard)
   - cuisine
   - nutritionalInfo:
       - calories
       - protein
       - carbs
       - fat
3. dietaryCompatibility: explanation of whether the recipe follows the given dietary preference (veg, vegan, gluten-free, etc.)
4. servingSizeOptions: suggested quantities when servings are changed
5. userTips: additional improvements or customization tips
6. confidenceScore: how confident you are (0–1)

User Input:
- Ingredients: ${{ ingredients }}
- Dietary preference: ${{ dietaryPreferences }}
- Filters:
   - cuisine: ${{ cuisine }}
   - mealType: ${{ mealType }}
Rules:
- Only return JSON.  
- Do NOT include markdown.  
- Do NOT explain anything outside the JSON.  
- If some information is missing, infer logically.  
- Return 3 to 5 best matching recipes.  `);
    const messages = {
      role: "system",
      content: prompt.join(","),
    };

    fetchFromOpenAi(messages, sendEvent);
    req.on("close", () => {
      res.end();
    });
  } catch (err) {
    console.error("Error generating recipe stream:", err);
    res.status(500).json({ error: "Failed to generate recipe stream" });
  }
};
