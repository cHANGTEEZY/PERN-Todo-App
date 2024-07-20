import { useEffect, useState } from "react";
import "./ListTodos.css";

export default function ListTodos() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
      });
      if (deleteTodo.ok) {
        setTodos(todos.filter((todo) => todo.todo_id !== id));
      } else {
        alert("Failed to delete todo");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const getTodos = async () => {
    try {
      const response = await fetch("http://localhost:3000/todos");
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []); // Correctly pass an empty dependency array to run only once

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <button className="edit">edit</button>
              </td>
              <td>
                <button
                  className="delete"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
