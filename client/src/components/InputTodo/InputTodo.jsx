import { useState } from "react";
import "./InputTodo.css";

export default function InputTodo() {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      if (description === "") {
        alert("Enter a todolist");
      } else {
        const response = await fetch("http://localhost:3000/todos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });

        if (response.ok) {
          window.location.reload();
        } else {
          alert("Failed to add todo");
        }

        console.log(response);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <section className="form-container">
        <form className="form-inputTodo" onSubmit={onSubmitForm}>
          <input
            className="todoInput"
            type="text"
            placeholder="Enter a todo list"
            onChange={(event) => setDescription(event.target.value)}
          />
          <button className="add-btn">Add</button>
        </form>
      </section>
    </>
  );
}
