
export default [
  {
    title: 'Chickpea Curry',
    cuisine: 'Indian',
    ingredients: [ { name: 'chickpeas', qty: 400, unit: 'g' }, { name: 'onion', qty:1, unit: 'pc' }, { name: 'tomato', qty:2, unit:'pc' } ],
    steps: ['Soak / use canned chickpeas','Cook onions until brown','Add tomatoes and spices','Simmer with chickpeas'],
    nutrition: { calories: 420, protein: 20, fat: 8, carbs: 60 },
    difficulty: 'easy', cookTimeMin: 35, servings: 4, dietTags: ['vegetarian','gluten-free'], keywords: ['chana','curry']
  },
  {
    title: 'Tomato Pasta',
    cuisine: 'Italian',
    ingredients: [ { name: 'pasta', qty: 200, unit: 'g' }, { name: 'tomato', qty:3, unit:'pc' }, { name: 'garlic', qty:2, unit:'cloves' } ],
    steps: ['Boil pasta','Prepare tomato sauce','Toss and serve'],
    nutrition: { calories: 520, protein: 14, fat: 12, carbs: 88 },
    difficulty: 'easy', cookTimeMin: 25, servings: 2, dietTags: ['vegetarian'], keywords: ['pasta','italian']
  },
  {
    title: 'Egg Fried Rice',
    cuisine: 'Chinese',
    ingredients: [ { name: 'rice', qty: 300, unit: 'g' }, { name: 'egg', qty:2, unit:'pc' }, { name: 'spring onion', qty:3, unit:'pc' } ],
    steps: ['Cook rice','Stir-fry eggs and veggies','Add rice and season'],
    nutrition: { calories: 610, protein: 18, fat: 14, carbs: 93 },
    difficulty: 'easy', cookTimeMin: 20, servings: 2, dietTags: ['non-vegetarian'], keywords: ['rice','fried']
  },
  {
    title: 'Paneer Butter Masala', cuisine: 'Indian',
    ingredients: [ { name:'paneer', qty:250, unit:'g' }, { name:'butter', qty:30, unit:'g' }, { name:'tomato', qty:3, unit:'pc' } ],
    steps: ['Sauté onions and tomatoes','Add masala','Add paneer and simmer'],
    nutrition:{ calories: 650, protein: 22, fat: 35, carbs: 40 }, difficulty:'medium', cookTimeMin:40, servings:3, dietTags:['vegetarian'], keywords:['paneer','curry']
  },
  {
    title: 'Grilled Chicken Salad', cuisine:'American',
    ingredients:[ { name:'chicken breast', qty:200, unit:'g' }, { name:'lettuce', qty:100, unit:'g' }, { name:'tomato', qty:1, unit:'pc' } ],
    steps:['Grill chicken','Toss salad with dressing','Serve chilled'], nutrition:{ calories: 320, protein:34, fat:10, carbs:8 }, difficulty:'easy', cookTimeMin:20, servings:2, dietTags:['gluten-free','non-vegetarian'], keywords:['salad','grilled']
  },
  {
    title: 'Oatmeal Porridge', cuisine:'Global',
    ingredients:[ { name:'oats', qty:80, unit:'g' }, { name:'milk', qty:250, unit:'ml' }, { name:'banana', qty:1, unit:'pc' } ],
    steps:['Cook oats in milk','Top with banana or fruits','Serve warm'], nutrition:{ calories:300, protein:8, fat:6, carbs:54 }, difficulty:'easy', cookTimeMin:10, servings:1, dietTags:['vegetarian'], keywords:['oats','breakfast']
  },
  {
    title: 'Veg Stir Fry', cuisine:'Asian',
    ingredients:[ { name:'broccoli', qty:150, unit:'g' }, { name:'carrot', qty:1, unit:'pc' }, { name:'bell pepper', qty:1, unit:'pc' } ],
    steps:['Chop veggies','Stir fry with sauce','Serve hot'], nutrition:{ calories:200, protein:6, fat:8, carbs:26 }, difficulty:'easy', cookTimeMin:15, servings:2, dietTags:['vegan','gluten-free'], keywords:['stir-fry','vegan']
  },
  {
    title: 'Masoor Dal', cuisine:'Indian',
    ingredients:[ { name:'masoor dal', qty:200, unit:'g' }, { name:'onion', qty:1, unit:'pc' }, { name:'turmeric', qty:1, unit:'tsp' } ],
    steps:['Rinse lentils','Cook with spices','Tempering and serve'], nutrition:{ calories:350, protein:18, fat:6, carbs:48 }, difficulty:'easy', cookTimeMin:30, servings:3, dietTags:['vegetarian','gluten-free'], keywords:['dal','lentil']
  },
  {
    title: 'Pancakes', cuisine:'American',
    ingredients:[ { name:'flour', qty:150, unit:'g' }, { name:'milk', qty:200, unit:'ml' }, { name:'egg', qty:1, unit:'pc' } ],
    steps:['Mix batter','Cook on skillet','Serve with syrup'], nutrition:{ calories:520, protein:10, fat:14, carbs:82 }, difficulty:'easy', cookTimeMin:20, servings:3, dietTags:[], keywords:['breakfast','pancake']
  },
  {
    title: 'Greek Salad', cuisine:'Mediterranean',
    ingredients:[ { name:'cucumber', qty:1, unit:'pc' }, { name:'feta', qty:50, unit:'g' }, { name:'olive oil', qty:1, unit:'tbsp' } ],
    steps:['Chop veggies','Add feta and dressing','Serve fresh'], nutrition:{ calories:220, protein:6, fat:18, carbs:8 }, difficulty:'easy', cookTimeMin:10, servings:2, dietTags:['vegetarian','gluten-free'], keywords:['salad','greek']
  },
  {
    title: 'Tomato Soup', cuisine:'Global',
    ingredients:[ { name:'tomato', qty:5, unit:'pc' }, { name:'onion', qty:1, unit:'pc' }, { name:'cream', qty:50, unit:'ml' } ],
    steps:['Cook tomatoes and onions','Blend','Simmer with cream'], nutrition:{ calories:180, protein:4, fat:8, carbs:24 }, difficulty:'easy', cookTimeMin:30, servings:4, dietTags:['vegetarian'], keywords:['soup','tomato']
  },
  {
    title: 'Aloo Paratha', cuisine:'Indian',
    ingredients:[ { name:'wheat flour', qty:200, unit:'g' }, { name:'potato', qty:2, unit:'pc' }, { name:'ghee', qty:10, unit:'g' } ],
    steps:['Prepare dough','Stuff with mashed potato','Cook on tawa'], nutrition:{ calories:420, protein:8, fat:12, carbs:68 }, difficulty:'medium', cookTimeMin:25, servings:2, dietTags:['vegetarian'], keywords:['flatbread','breakfast']
  },
  {
    title: 'Methi Thepla', cuisine:'Indian',
    ingredients:[ { name:'fenugreek leaves', qty:50, unit:'g' }, { name:'wheat flour', qty:200, unit:'g' }, { name:'spices', qty:1, unit:'tsp' } ],
    steps:['Knead dough','Roll and cook','Serve with pickle'], nutrition:{ calories:300, protein:6, fat:8, carbs:50 }, difficulty:'medium', cookTimeMin:20, servings:3, dietTags:['vegetarian'], keywords:['snack','thepla']
  },
  {
    title: 'Lemon Rice', cuisine:'Indian',
    ingredients:[ { name:'rice', qty:300, unit:'g' }, { name:'lemon', qty:2, unit:'pc' }, { name:'mustard seeds', qty:1, unit:'tsp' } ],
    steps:['Cook rice','Tempering and mix lemon','Serve warm'], nutrition:{ calories:350, protein:6, fat:10, carbs:58 }, difficulty:'easy', cookTimeMin:25, servings:3, dietTags:['vegetarian'], keywords:['rice','lemon']
  },
  {
    title: 'Veggie Omelette', cuisine:'Global',
    ingredients:[ { name:'egg', qty:2, unit:'pc' }, { name:'onion', qty:0.5, unit:'pc' }, { name:'bell pepper', qty:0.5, unit:'pc' } ],
    steps:['Beat eggs','Add veggies','Cook on pan'], nutrition:{ calories:220, protein:12, fat:16, carbs:6 }, difficulty:'easy', cookTimeMin:10, servings:1, dietTags:['non-vegetarian'], keywords:['omelette','breakfast']
  },
  {
    title: 'Chole Bhature', cuisine:'Indian',
    ingredients:[ { name:'chickpeas', qty:400, unit:'g' }, { name:'flour', qty:300, unit:'g' }, { name:'oil', qty:50, unit:'ml' } ],
    steps:['Prepare chole','Make bhature dough','Deep fry bhature'], nutrition:{ calories:800, protein:20, fat:40, carbs:90 }, difficulty:'hard', cookTimeMin:60, servings:4, dietTags:['vegetarian'], keywords:['chole','bhature']
  },
  {
    title: 'Masala Dosa', cuisine:'South Indian',
    ingredients:[ { name:'rice', qty:200, unit:'g' }, { name:'urad dal', qty:50, unit:'g' }, { name:'potato', qty:3, unit:'pc' } ],
    steps:['Prepare batter','Make dosa','Serve with chutney'], nutrition:{ calories:450, protein:10, fat:12, carbs:70 }, difficulty:'medium', cookTimeMin:45, servings:2, dietTags:['vegetarian'], keywords:['dosa','south indian']
  },
  {
    title: 'Chicken Curry', cuisine:'Indian',
    ingredients:[ { name:'chicken', qty:500, unit:'g' }, { name:'onion', qty:2, unit:'pc' }, { name:'tomato', qty:2, unit:'pc' } ],
    steps:['Sauté onions','Add spices and chicken','Cook until tender'], nutrition:{ calories:700, protein:45, fat:30, carbs:10 }, difficulty:'medium', cookTimeMin:50, servings:4, dietTags:['non-vegetarian'], keywords:['chicken','curry']
  },
  {
    title: 'Vegetable Pulao', cuisine:'Indian',
    ingredients:[ { name:'rice', qty:300, unit:'g' }, { name:'mixed vegetables', qty:200, unit:'g' }, { name:'spices', qty:1, unit:'tsp' } ],
    steps:['Saute spices and veggies','Add rice and cook','Serve hot'], nutrition:{ calories:520, protein:10, fat:12, carbs:90 }, difficulty:'easy', cookTimeMin:30, servings:3, dietTags:['vegetarian'], keywords:['pulao','rice']
  },
  {
    title: 'Mango Smoothie', cuisine:'Global',
    ingredients:[ { name:'mango', qty:1, unit:'pc' }, { name:'yogurt', qty:150, unit:'g' }, { name:'honey', qty:1, unit:'tbsp' } ],
    steps:['Blend all ingredients','Serve chilled'], nutrition:{ calories:220, protein:6, fat:4, carbs:40 }, difficulty:'easy', cookTimeMin:5, servings:1, dietTags:['vegetarian'], keywords:['smoothie','mango']
  }
];
