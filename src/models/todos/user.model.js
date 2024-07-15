import mongoose,{Schema} from "mongoose";

const userSchema=Schema({
  userName:{
    type:String,
    required: true,
    unique: true,
    lowercase: true
  },
  email:{
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password:{
    type: String,
    required: [true, "Password is required"],

  }

},{timestamps:true})

export const User=mongoose.model("User", userSchema)