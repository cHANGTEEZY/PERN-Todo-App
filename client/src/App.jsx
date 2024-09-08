import Header from "./components/Header/Header";
import InputTodo from "./components/InputTodo/InputTodo";
import ListTodos from "./components/ListTodo/ListTodos";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function MainApp() {
  return (
    <>
      <Header />
      <InputTodo />
      <ListTodos />
    </>
  );
}

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainApp />}></Route>
        </Routes>
      </Router>
    </>
  );
}
