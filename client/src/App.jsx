import { useEffect } from "react";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";

export default function App() {
  useEffect(() => {
    alert("Need to add Edit functionality", []);
  });
  return (
    <>
      <Header />
      <InputTodo />
      <ListTodos />
    </>
  );
}
