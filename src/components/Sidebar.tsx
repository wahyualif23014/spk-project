import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="bg-gray-200 h-screen w-64 p-4">
      <h2 className="text-lg font-bold">Menu</h2>
      <ul className="mt-4">
        <li className="mb-2">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Dashboard
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Settings
          </a>
        </li>
        <li className="mb-2">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            Profile
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;