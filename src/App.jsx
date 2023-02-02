import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Navbar from "./Components/navBar";
import Login from "./pages/login"
import Register from "./pages/Register";
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/dashboard" element={<Homepage />} />
      </Routes>
    </>
  );
}
