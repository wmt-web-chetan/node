import mongoose, { Mongoose, Schema } from "mongoose";

const userSchema = Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  email:{
    type: String,
    required: true,
    lowercase: true,
    unique: true
  },
  password:{
    type: String,
    required: true
  }
  
},{timeStamps: true});


export const User=Mongoose.model("User", userSchema)
