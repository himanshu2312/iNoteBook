import mongoose from "mongoose";
import dotenv from "dotenv"

// configure environment
dotenv.config();

//Declaration mogooose URI i.e. Link to dataBase
const mongoURI = process.env.DB_URI;

//Making connection to dataBase URI
const connectToDb = () => {
      mongoose.connect(mongoURI)
            .then(() => console.log("Connected to DataBase"))
}

//exporting funciton as default
export default connectToDb;