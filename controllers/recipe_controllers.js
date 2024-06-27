import { RecipeModel } from "../models/recipe.js";

// get all recipes
export const getRecipes =  async (req, res, next) =>{
    // get all recipes from the database
    try {
        const allRecipes = await RecipeModel.find();
        res.json(allRecipes);
    } catch (error) {
        next(error)
    }
}

// add recipes
export const addRecipes = async (req, res, next) =>{
    try {
      // add reipe to database
      const newRecipes = await RecipeModel.create(req.body);
      res.json(newRecipes);
    } catch (error) {
     next(error);
    }
 }

//  patch recipes
export const patchRecipe =  (req, res) =>{
    res.json(`Recipe with ID ${req.params.id} updated`);
}

// delete recipes
export const getRecipeById = (req, res) =>{
    res.json(`Recipe with Id ${req.params.id} deleted`);
}

export const deleteRecipe = async (req, res, next) => {
   try { 
    // delete recipe by id
    const deletedRecipe = await RecipeModel.findByIdAndDelete(req.params.id)
     res.json(deletedRecipe);
   } catch (error) {
    next(error)
   }
}