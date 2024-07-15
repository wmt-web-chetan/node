import mongoose, { Schema } from "mongoose";

const patientSchema = Schema({
  name: {
    type: String,
    requiered: true,
  },
  AdmitedIn:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
  },
  diagonesedWith:{
    type:String,
    requiered: true,
  },
  address:{
    type: String,
    requiered: true
  },
  age: {
    type: Number,
    requiered: true
  },
  bloodGroup:{
    type: String,
    requiered: true
  },
  gender:{
    type: String,
    requiered: true,
    enum:["M","F"]
  }
});

export const Patient = mongoose.model("Patient", patientSchema);
