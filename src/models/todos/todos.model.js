import mongoose, { Schema } from "mongoose";

const todosSchema = Schema(
  {
    title: {
      type: String,
      required: true,
    },
    completed:{
        type: Boolean,
        default: false
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subtodos:[{
        type: mongoose.Schema.type.ObjectId,
        ref:"Subtodo"
    }]

  },
  { timestamps: true }
);

export const Todos = mongoose.model("Todos", todosSchema);
