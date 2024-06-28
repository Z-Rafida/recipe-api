import express from "express";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipe.js";
import categoryRouter from "./routes/categoryRouter.js";

// connect to database
await mongoose.connect (process.env.MONGO_URL);


// create express app
const app = express();

// apply middlewares
app.use(express.json());

// define routes
app.get('/', (req, res)=>{
    res.json('Welcome Home');
});

app.post('/login', (req,res) =>{
    res.json('Login successful');
});

app.delete('/back', (req, res) =>{
    res.json('Back to previous page');
});

// use routes
app.use(recipeRouter);
app.use(categoryRouter);


// listen for incoming request
const port = process.env.PORT || 3000;
app.listen (3000, () => {
    console.log(`App listening on port ${port}`)
});




// recipe-api 
// TdKeOoTsvxETtE4D