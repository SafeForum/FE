import { Routes, Route } from "react-router-dom"
import Homepage from './pages/homepage'
import Navbar from "./components/navBar";

export default function App() {
  return (
    <>
    <Navbar />
    <Routes>
    <Route path="/" element={<Homepage />}/>
    </Routes>
    </>
    );
}
