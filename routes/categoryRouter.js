import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category.js";

// create a rounter
const categoryRouter = Router();

// defien routes
categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories', postCategory);

// expor router
export default categoryRouter;