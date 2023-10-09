import mongoose, { Schema } from "mongoose";

//Creating a New Schema for user i.e. data structure to store data in DB
const NotesSchema= new Schema({
      //defining structure attribute or collection attribute
      tittle:{type:String, require:true},
      desc:{type:String, require:true},
      tag:{type:String, default:"General"},
      date:{type:Date, default:Date.now}
})

export default mongoose.model('notes',NotesSchema);