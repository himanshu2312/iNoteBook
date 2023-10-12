import mongoose, { Schema } from "mongoose";

//Creating a New Schema for user i.e. data structure to store data in DB
const UserSchema = new Schema({

      //defining structure attribute or collection attribute
      name: { type: String, require: true },
      email: { type: String, require: true, unique: true },
      password: { type: String, require: true },
      date: { type: Date, default: Date.now }
})

export default mongoose.model('user', UserSchema);