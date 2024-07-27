import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { pool } from "./db.js";
import register from "./register.js";
import signin from "./signin.js";
import { fileURLToPath } from "url";
import path from "path";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Serve static files from the React app
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/dist")));
}

// Root route
app.get("/", (req, res) => {
  res.send("Hello world");
});

// Create a todo
app.post("/todos", async (req, res) => {
  console.log("received post request to /todos");
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.error("Error creating todo:", err.message);
    res.status(500).send("Server error: " + err.message);
  }
});

// Get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (error) {
    console.error("Error fetching todos:", error.message);
    res.status(500).send("Server error: " + error.message);
  }
});

// Get specific todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(todo.rows[0]);
  } catch (error) {
    console.error("Error fetching todo:", error.message);
    res.status(500).send("Server error: " + error.message);
  }
});

// Update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [
      description,
      id,
    ]);
    res.json("Todo was updated");
  } catch (error) {
    console.error("Error updating todo:", error.message);
    res.status(500).send("Server error: " + error.message);
  }
});

// Delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
    res.json("Todo was deleted!");
  } catch (error) {
    console.error("Error deleting todo:", error.message);
    res.status(500).send("Server error: " + error.message);
  }
});

// Register and sign-in routes
app.use("/register", register);
app.use("/signin", signin);

// Catch-all handler to redirect all requests to the React app's index.html
if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
  });
}

// Run server on specified PORT
app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
