import { Router } from "express";
import { login, logout, profile, register } from "../controllers/user.js";
import { checkUserSession } from "../middlewares/auth.js";

// create router
const userRouter = Router();

// define routes
userRouter.post('/register', register)

userRouter.post('/login', login)

userRouter.get('/profile', checkUserSession, profile)

userRouter.post('/logout', checkUserSession, logout)

// Export the router
export default userRouter;