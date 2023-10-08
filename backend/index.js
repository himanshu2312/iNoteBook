import connectToDb from "./db.js";
import express from "express";

connectToDb();
const app=express();
const port=5000
app.get("/",(req,res)=>{
      res.send("Welcome to Express App");
})

app.listen(port,()=>console.log(`Server is running http://localhost:${port}`))