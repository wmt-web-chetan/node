import mongoose,{Schema} from "mongoose";
const orderItemsSchema=Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product"
    },
    quantity:{
        type: Number,
        required: true
    }
},{timeStamps: true})
const orderSchema=Schema({
    orderPrice:{
        type: Number,
        required: true
    },
    customer:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderItems:{
        type:[orderItemsSchema]
    },
    address:{
        type:String,
        required: true
    },
    status:{
        type:String,
        enum:["PENDING","CANCELLED","DELIVERED"],
        default:"PENDING"
    }

},{timeStamps: true})

export const Order=mongoose.model("Order", orderSchema)