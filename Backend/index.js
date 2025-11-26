require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const openAi= require('openai');
const recipeRoutes=require('./routes/recipe');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  "https://cooklens-smartrecipegenerator-1.onrender.com",
}));
app.use('/api',recipeRoutes);



// basic error middleware
app.use((err, req, res, next) => {
console.error(err.stack);
res.status(err.status || 500).json({ error: err.message || 'Server Error' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));