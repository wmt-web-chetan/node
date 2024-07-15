import mongoose,{Schema} from "mongoose";

const doctorSchema=Schema({
    name:{
        type:String,
        required: true
    },
    workInHospitals:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }],
    salary:{
        type: Number,
        required: true,

    },
    qualification:{
        type: String,
        required: true
    },
    experienceIn:{
        type: Number,
        default: 0
    }
},{timeStamps: true})

export const Doctor=mongoose.model("Doctor", doctorSchema)