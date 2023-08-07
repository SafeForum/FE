import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import Navbar from "./components/navBar";
import Login from "./pages/login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NewCityForm from "./pages/NewCityForm";
import FormSuccess from "./pages/FormSuccess";
import SingleThread from "./pages/SingleThread";
export default function App() {
  return (
      <>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/dashboard/:cityPortal" exact element={<Dashboard />} />
          <Route path="/dashboard/:cityPortal/threads/:threadID" exact element={<SingleThread />} />
          <Route path="/newCityForm" exact element={<NewCityForm />} />
          <Route path="/form-success" exact element={<FormSuccess />} />
        </Routes>
      </>
  );
}
