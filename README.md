# CookLens - Smart Recipe Generator

CookLens is a smart recipe generator web application that suggests recipes based on user-provided ingredients, meal type, dietary preferences, and cuisine. It leverages AI to generate step-by-step cooking instructions, dietary compatibility, serving sizes, and user tips in real-time.

---

## Features

- Input ingredients to generate recipes.
- Choose meal type (Breakfast, Lunch, Dinner, Snack).
- Set dietary preferences (Vegetarian, Vegan, Pescatarian, Gluten-Free, Keto, None).
- Set cuisine preferences (e.g., Italian, Mexican).
- Receive AI-generated recipes in a structured format including:
  - Ingredients
  - Instructions
  - Dietary compatibility
  - Serving size options
  - User tips
  - Confidence score
- Real-time streaming of recipe content for better UX.

---

## Tech Stack

- **Frontend:** React, CSS
- **Backend:** Node.js, Express
- **AI:** Google Gemini API (via generative AI streaming)
- **Database:** None (stateless API)
- **Hosting:** Render (Frontend & Backend)
