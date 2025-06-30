import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import LogIn from "./components/Login";
import Home from "./components/Home";
import Students from "./components/Students";
import StudentsCrud from "./components/studentsCrud";
import StudentDetails from "./components/StudentsDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<LogIn />} />
         <Route path="/student" element={<Students />} />
<Route path="/studentsportal" element={<StudentsCrud/>} />
  <Route path="/student/:id" element={<StudentDetails/>} /> {/* <-- detail page */}

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
