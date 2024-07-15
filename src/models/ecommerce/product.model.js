import mongoose, { Schema } from "mongoose";

const productSchema = Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    productImage:{
        type: String,

    },
    price:{
        type: Number,
        required: true,
        default: 0
    },
    stock:{
        type: Number,
        default: 0
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
  },
  { timeStamps: true }
);

export const Product = mongoose.model("Product", productSchema);
