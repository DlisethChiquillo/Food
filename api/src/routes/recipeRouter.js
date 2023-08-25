const {Router} = require('express');
//IMPORTO LOS HANDLERS  
const{recipeNames, crearRecipe} = require('../handlers/recipeHandlers')
const{recipeId} = require ('../handlers/recipeIdhandlers')
const recipeRouter = Router();

//RUTAS

//GET | /RECIPE
recipeRouter.get('/', recipeNames);
// GET | /RECETA/:idReceta
recipeRouter.get('/:id', recipeId); //getRecipeIdHandler
// POST | /RECIPE
recipeRouter.post('/', crearRecipe) //createPostHandler

module.exports = recipeRouter