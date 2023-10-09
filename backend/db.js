import mongoose from "mongoose";

//Declaration mogooose URI i.e. Link to dataBase
const mongoURI="mongodb://localhost:27017";

//Making connection to dataBase URI
const connectToDb=()=>{
      mongoose.connect(mongoURI)
      .then(()=>console.log("Connected to DataBase"))
      .catch((e)=>console.log(e.message));
}

//exporting funciton as default
export default connectToDb;