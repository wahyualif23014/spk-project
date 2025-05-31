import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./pages/App.tsx";
import AboutPage from "./pages/About.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />

        
        <Route
          path="*"
          element={
            <div className="h-screen flex justify-center items-center text-[100px] font-bold">
              Not Found
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
