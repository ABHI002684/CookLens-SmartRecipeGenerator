const express = require('express');
const router= express.Router();

const {recipeStream}=require('../controllers/recipe');

router.get('/generate-recipe',recipeStream);
module.exports=router;
