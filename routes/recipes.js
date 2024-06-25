import { Router } from "express";

// create a router
const recipeRouter = Router();

// define all your routes
recipeRouter.get('/recipes', (req, res) =>{
    res.json('All recipes');
});

// add recipe
recipeRouter.post('/recipes', (req, res) =>{
    res.json('Recipe added');
});

// updates made(delete in singles)
recipeRouter.patch('/recipes/:id', (req, res) =>{
    res.json(`Recipe with ID ${req.params.id} updated`);
});

// delete a recipe
recipeRouter.delete('/recipes/:id', (req, res) =>{
    res.json(`Recipe with Id ${req.params.id} deleted`);
});

// export router
export default recipeRouter;