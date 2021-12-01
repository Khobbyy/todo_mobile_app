//import the express package
import express from "express";

//import the mongoose package
import mongoose from "mongoose";

//import the dotenv file 
import dotenv from "dotenv";

//comfigure dotenv
dotenv.config();

//create an instance of express
const app = express();

//use the express.json middleware
//to extract the body of the request
app.use(express.json());


//use this port for our server
const PORT = process.env.PORT ?? 5000;

//create a route to handle GET request on the index route

app.get("/", (request, response) => {
    response.send("Hello World");
})

//create a an array variable that 
let todos = [];


app.post('/todo', (req, res) => {
    let data = req.body;
    todos.push(data);
    res.json(todos);
})


app.get("/todos", (req, res) => {
    res.json([
        {
            title: "Connect to the database",
            description: "to store and read all our todos from database",
            date: "26/11/21",
            tine: "4:30 pm",
            isComplete: false,
        }
    ])
})
//connecting mongoosedb
mongoose.connect(process.env.MONGO_DB_CONSTRING, (error) => {
    if (error) {
        return console.log("Couldn't connect to Mongoose");
    }
    else {
        return console.log("Connetion to Mongoose was successful");
    }
    app.listen(PORT, () =>
    console.log(`server is up and running on: ${PORT}`))
//listen to incoming request on this port

})


