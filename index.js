import express from "express";
import mongoose from "mongoose";
import expressOasGenerator from "express-oas-generator";
import recipeRouter from "./routes/recipe.js";
import categoryRouter from "./routes/categoryRouter.js";

// connect to database
await mongoose.connect (process.env.MONGO_URL);


// create express app
const app = express();
expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,
    tags : ['categories', 'recipe'],
    mongooseModels : mongoose.modelNames(),
});

// apply middlewares
app.use(express.json());
app.use(express.static('uploads'));

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
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'))

// listen for incoming request
const port = process.env.PORT || 3000;
app.listen (3000, () => {
    console.log(`App listening on port ${port}`)
});




// recipe-api 
// TdKeOoTsvxETtE4D