import Header from "./components/Header/Header";
import InputTodo from "./components/InputTodo/InputTodo";
import ListTodos from "./components/ListTodo/ListTodos";
import Login from "./components/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup/Signup";

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
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/" element={<MainApp />}></Route>
        </Routes>
      </Router>
    </>
  );
}
