import { useEffect, useState } from "react";
import "./ListTodos.css";
import EditTodo from "../EditTodo/EditTodo";

export default function ListTodos() {
  const [todos, setTodos] = useState([]);

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`/todos/${id}`, {
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
      const response = await fetch(`/todos`);
      const jsonData = await response.json();
      setTodos(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  const updateTodo = (id, newDescription) => {
    setTodos(
      todos.map((todo) =>
        todo.todo_id === id ? { ...todo, description: newDescription } : todo
      )
    );
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      {todos.length > 0 ? (
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
                  <EditTodo
                    description={todo.description}
                    todo_id={todo.todo_id}
                    onSave={updateTodo}
                  />
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
      ) : (
        <p className="todo-exception">Enter a to do list to add</p>
      )}
    </>
  );
}
