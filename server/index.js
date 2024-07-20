import express from "express";
import cors from "cors";
import { pool } from "./db.js";

const app = express();
const port = 3000;

//middleware
app.use(cors());
app.use(express.json());

//all my routes

//create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );
    res.json(newTodo);
  } catch (err) {
    console.error(err.message);
    res.statusCode(500).send("Server error");
  }
});

//get all todos

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * from todo");
    res.json(allTodos.rows);
  } catch (error) {
    console.error(error.message);
    res.statusCode(500).send("Server error");
  }
});

//get specific todo

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(todo.rows);
  } catch (error) {
    console.error(error.message);
    res.statusCode(500).send("Server error");
  }
});

//update a todo

app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 where todo_id = $2",
      [description, id]
    );
    res.json("To do was updated");
  } catch (error) {
    console.error(error.message);
    res.sendStatus(500).send("Server error");
  }
});

//delete a todo

app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query("DELETE from todo WHERE todo_id = $1", [
      id,
    ]);
    res.json("Todo was deleted!");
  } catch (error) {
    console.error(error.message);
    res.sendStatus(500).send("Server Error");
  }
});

//run server in specified port

app.listen(port, () => {
  console.log("Listening on port " + port);
});
