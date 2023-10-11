import mongoose from "mongoose";

//Declaration mogooose URI i.e. Link to dataBase
const mongoURI = "mongodb://0.0.0.0:27017/iNotebook";

//Making connection to dataBase URI
const connectToDb = () => {
      mongoose.connect(mongoURI)
            .then(() => console.log("Connected to DataBase"))
}

//exporting funciton as default
export default connectToDb;