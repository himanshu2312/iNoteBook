import mongoose from "mongoose";
const mongoURI="mongodb://localhost:27017";

const connectToDb=()=>{
      mongoose.connect(mongoURI)
      .then(()=>console.log("Connected to DataBase"))
      .catch((e)=>console.log(e.message));
}

export default connectToDb;