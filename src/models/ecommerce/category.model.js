import mongoose,{Schema} from "mongoose";

const categorySchema=Schema({
    title:{
        type: String,
        required: true,
        unique: true,

    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }


},{timeStamps: true})


export const Category=mongoose.model("Category",categorySchema)