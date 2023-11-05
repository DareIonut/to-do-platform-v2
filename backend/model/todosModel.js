import mongoose from "mongoose";

//The todo mode.
// const todo = {
//     todoContent: req.body.todoContent,
//     todoDescription: req.body.todoDescription,
//     todoIsChecked: req.body.todoIsChecked,
//     time: req.body.time,
//     color: req.body.color,
//   };

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
