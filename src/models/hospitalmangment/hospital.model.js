import mongoose,{Schema} from "mongoose";

const hospitalSchema=Schema({
    name:{
        type: String,
        required: true
    },
    

    

},{timeStamps: true})

export const Hospital=mongoose.model("Hospital",hospitalSchema)