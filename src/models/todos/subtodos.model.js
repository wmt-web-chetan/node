import mongoose,{Schema} from "mongoose";

const subtodosSchema=Schema({
    title:{
        type: String,
        required: true,

    },
    complete:{
        type: Boolean,
        default: false
    },createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestaps: true})

export const Subtodo=mongoose.model("Subtodo",subtodosSchema)