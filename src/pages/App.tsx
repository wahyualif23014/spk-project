import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";
import About from "./About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={
            <div className="flex justify-center items-center h-screen text-[50px] font-bold">
              404 Not Found
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
