import connectToDb from "./db.js";
import express from "express";
import authRouter from "./routes/auth.js";
import notesRouter from "./routes/notes.js";

// Conneting to dataBase first
connectToDb();

//creating a express server
const app=express();
const port=5000

//adiding built-in middlewares
app.use(express.json())

//get "/" - Home of server
app.get("/",(req,res)=>{
      res.send("Welcome to Express App");
})

//authentication routes
app.use("/api/auth",authRouter);

//notes routes
app.use("/api/notes",notesRouter);

//set port as listennig point for expess server
app.listen(port,()=>console.log(`Server is running http://localhost:${port}`));