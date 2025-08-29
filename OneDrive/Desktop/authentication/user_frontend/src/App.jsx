import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Register from "./Register";

function App() {
  return (
    <Router>
      <div className="App">
      <nav>
      <Link to="/register">Register</Link> |{" "}
      <Link to="/login">Login</Link>
      </nav>

      <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      </Routes>
      </div>
      </Router>
  );
}

export default App;
