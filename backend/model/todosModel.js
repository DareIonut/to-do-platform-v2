import mongoose from "mongoose";

const todoSchema = mongoose.Schema(
  {
    todoTitle: { type: String, required: true },
    todoDescription: { type: String, required: true },
    isChecked: { type: Boolean, required: true },
    creationDate: { type: Date, required: false },
  },
  { timestaps: true }
);

const Todo = mongoose.model("Todo", todoSchema, "Todos");

export default Todo;
