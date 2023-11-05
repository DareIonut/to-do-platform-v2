import asyncHandler from "express-async-handler";
import Todo from "../model/todosModel.js";

// @desc Create a new todo
// @route POST /api/todos
const createTodo = asyncHandler(async (req, res) => {
  const { todoTitle, todoDescription, isChecked, creationDate } = req.body;
  const todo = new Todo({
    todoTitle,
    todoDescription,
    isChecked,
    creationDate,
  });
  const createdTodo = await todo.save();
  if (createdTodo) {
    res.status(201).json({
      todoTitle: createdTodo.todoTitle,
      todoDescription: createdTodo.todoDescription,
      isChecked: createdTodo.isChecked,
      creationDate: createdTodo.creationDate,
    });
  } else {
    res.status(400);
    throw new Error("Invalid data");
  }
});

// @desc Get all todos
// @route GET /api/todos
const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({});
  res.json(todos);
});

export { createTodo, getTodos };
