import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Navbar from "./components/navBar";
import Login from "./pages/login"
import Register from "./pages/register";
import Profile from "./pages/profile";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/dashboard" element={<Homepage />} />
      </Routes>
    </>
  );
}
