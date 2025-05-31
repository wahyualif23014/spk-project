import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashboardContent from "./components/DashboardContent";

const App: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <DashboardContent />
      </div>
    </div>  
  );
};

export default App;