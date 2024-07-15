import mongoose,{Schema} from "mongoose";

const medicalRecordSchema=Schema({
    name:{
        type:String,
        required: true
    },
    hospital:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: ""
    }]
},{timeStamps: true})

export const MedicalRecord=mongoose.model("MedicalRecord", medicalRecordSchema)