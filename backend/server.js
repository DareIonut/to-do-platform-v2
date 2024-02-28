import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import morgan from "morgan";

//routes imports
import todoRoutes from "./routes/todoRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
  })
);
if (process.env.NODE_MODE === "dev") {
  app.use(morgan("dev"));
}

//support json headers
app.use(express.json());

app.use("/api/todos", todoRoutes);

app.listen(5000, () => {
  console.log("Serving on port 5000");
});
