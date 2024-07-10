import { Router } from "express";
import { register } from "../controllers/user.js";

// create router
const userRouter = Router();

// define routes
userRouter.post('/register', register)



// Export the router
export default userRouter;