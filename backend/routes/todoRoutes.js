import express from "express";
const router = express.Router();
import { createTodo, getTodos } from "../controller/todoController.js";

router.route("/").post(createTodo).get(getTodos);

export default router;
