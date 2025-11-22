require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const openAi= require('openai');


const app = express();
app.use(express.json());


connectDB();





// basic error middleware
app.use((err, req, res, next) => {
console.error(err.stack);
res.status(err.status || 500).json({ error: err.message || 'Server Error' });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));