import { Router } from "express";
import { addRecipes, deleteRecipe, getRecipeById, getRecipes, patchRecipe } from "../controllers/recipe_controllers.js";
import { remoteUpload } from "../middlewares/upload.js";
import { checkUserSession } from "../middlewares/auth.js";

// create a router
const recipeRouter = Router();


// define all your routes
recipeRouter.get('/recipes',getRecipes);

// add recipe
recipeRouter.post('/recipes',checkUserSession, remoteUpload.single('image') , addRecipes);

// updates made(delete in singles)
recipeRouter.patch('/recipes/:id',patchRecipe);

// delete a recipe
recipeRouter.delete('/recipes/:id', deleteRecipe);

// 
recipeRouter.get('/recipes/:id', getRecipeById)

// export router
export default recipeRouter;