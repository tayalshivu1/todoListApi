import express from "express";
import { route } from "./routes/notesRoutes.js";
import { error } from "./middleware/errorMiddleware.js";
import { connectDB } from "./config/db.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", route);

app.use((req, res) => {
  res.status(404).send("<h1>404! Page not found</h1>");
});

app.use(error);

connectDB();

app.listen(3000, () => {
  console.log("Server running.");
});
