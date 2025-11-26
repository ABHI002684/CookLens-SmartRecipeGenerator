import './App.css';
import React, {useRef, useState, useEffect} from 'react';

const RecipeCard = ({onSubmit})=>{
  const [ingredients, setIngredients] = useState('');
  const [mealType, setMealType] = useState('');
  const [dietaryPreferences, setDietaryPreferences] = useState('');
  const [cuisine, setCuisine] = useState('');

   const handleSubmit = () => {
    const recipeData = {
      ingredients,
      mealType,
      dietaryPreferences,
      cuisine,
    };
    onSubmit(recipeData);
  };
  return (
    <div className="recipe-card">
  <div className="recipe-card-header">
    CookLens - SmartRecipeGenerator
  </div>
  <div className="recipe-card-body">
    <div className="form-group">
      <label className="form-label" htmlFor="ingredients">Ingredients</label>
      <input
        className="form-input"
        id="ingredients"
        type="text"
        placeholder="Enter ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
      />
    </div>

    <div className="form-group">
      <label className="form-label" htmlFor="mealType">Meal Type</label>
      <select
        className="form-select"
        id="mealType"
        value={mealType}
        onChange={(e) => setMealType(e.target.value)}
      >
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Snack">Snack</option>
      </select>
    </div>

    <div className="form-group">
      <label className="form-label" htmlFor="cuisine">Cuisine Preference</label>
      <input
        className="form-input"
        id="cuisine"
        type="text"
        placeholder="e.g., Italian, Mexican"
        value={cuisine}
        onChange={(e) => setCuisine(e.target.value)}
      />
    </div>

    <div className="form-group">
      <label className="form-label" htmlFor="dietaryPreferences">Dietary Preferences</label>
      <select
        className="form-select"
        id="dietaryPreferences"
        value={dietaryPreferences}
        onChange={(e) => setDietaryPreferences(e.target.value)}
      >
        <option value="Vegetarian">Vegetarian</option>
        <option value="Vegan">Vegan</option>
        <option value="Pescatarian">Pescatarian</option>
        <option value="Gluten-Free">Gluten-Free</option>
        <option value="Keto">Keto</option>
        <option value="None">None</option>
      </select>
    </div>

    <div className="form-group">
      <button
        className="button-submit"
        type="button"
        onClick={handleSubmit}
      >
        Generate Recipe
      </button>
    </div>
  </div>
</div>

  );
}

const  App=()=> {
  const [recipeData, setRecipeData] = useState(null);
  const [recipeObject, setRecipeObject] = useState('');
  let eventSourceRef = useRef(null);

  useEffect(() => {
    closeEventStream(); 
  }, []);

  useEffect(() => {
    if (recipeData) {
      closeEventStream();
      initializeEventStream();
    }
  }, [recipeData]);


  const initializeEventStream = () => {
    const recipeInputs = {... recipeData };

    
    const queryParams = new URLSearchParams(recipeInputs).toString();
    
    const url = `https://cooklens-smartrecipegenerator.onrender.com/api/generate-recipe?${queryParams}`;
    eventSourceRef.current = new EventSource(url);

    eventSourceRef.current.onmessage = (event) => {
  const data = JSON.parse(event.data);

  if (data.action === "chunk") {
    let text = data.data;

    // 1. Ensure numbered sections start on a new line
    text = text.replace(/(\d+\.\s)/g, "\n$1");

    // 2. Ensure bullets (*) start on a new line
    text = text.replace(/•/g, "\n•");

    // 3. Ensure sections like "Ingredients:", "Instructions:", "User Tips:" start on a new line
    text = text.replace(/(Ingredients:|Instructions:|Dietary Compatibility:|Serving Size Options:|User Tips:|Confidence Score:)/g, "\n$1");

    // 4. Clean up extra spaces
    text = text.replace(/\n{2,}/g, "\n"); // remove multiple blank lines

    setRecipeObject((prev) => prev + text + "\n");
  }

  if (data.action === "close") {
    closeEventStream();
  }
};


    eventSourceRef.current.onerror = () => {
      eventSourceRef.current.close();
    };
  };

 
  const closeEventStream = () => {
    if (eventSourceRef.current) {
      eventSourceRef.current.close();
      eventSourceRef.current = null;
    }
  };

  const onSubmit= async(data)=> {
    
    setRecipeObject('');
    setRecipeData(data);
  }
  return (
    <div className="App">
       <div className="flex flex-row h-full my-4 gap-2 justify-center">
        <RecipeCard onSubmit={onSubmit} />
        <div className="w-[400px] h-[565px] text-xs text-gray-600 p-4 border rounded-lg shadow-xl whitespace-pre-line overflow-y-auto">
          {recipeObject}
        </div>
      </div>
    </div>
  );
}

export default App;
