import { useState } from "react";
import "./InputTodo.css";

export default function InputTodo() {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
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
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <section className="form-container">
        <h1>Input todo</h1>
        <form className="form-inputTodo" onSubmit={onSubmitForm}>
          <input
            className="todoInput"
            type="text"
            placeholder={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <button>Add</button>
        </form>
      </section>
    </>
  );
}
