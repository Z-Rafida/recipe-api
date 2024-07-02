import { Router } from "express";
import { getCategories, postCategory } from "../controllers/category.js";
import { localUpload } from "../middlewares/upload.js";

// create a rounter
const categoryRouter = Router();

// defien routes
categoryRouter.get('/categories', getCategories);

categoryRouter.post('/categories', localUpload.single('image'), postCategory);

// expor router
export default categoryRouter;