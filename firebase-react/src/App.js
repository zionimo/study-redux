import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home";
import Login from "./page/Login";
import User from "./page/User";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/user" element={<User />}></Route>
      </Routes>
    </div>
  );
}

export default App;
