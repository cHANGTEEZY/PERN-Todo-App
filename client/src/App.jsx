import EditTodo from "./components/EditTodo";
import Header from "./components/Header";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";

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
          <Route path="/signup" element={<Signup />}>
            {" "}
          </Route>
          <Route path="/" element={<MainApp />}></Route>
        </Routes>
      </Router>
    </>
  );
}
