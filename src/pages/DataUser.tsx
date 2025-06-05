import React, { useState } from "react";
import "../styles/DataUserForm.css"; // untuk animasi tambahan

const DataUser: React.FC = () => {
  const [role, setRole] = useState("user");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`User berhasil ditambahkan sebagai ${role}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 animate-fade-in">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-2xl transform transition-all duration-500 scale-in"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Tambah Pengguna Baru
        </h2>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700">ID User</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Username</label>
          <input
            type="text"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-700">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1 text-gray-700">Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="admin">Admin</option>
            <option value="user">User Biasa</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Simpan Pengguna
        </button>
      </form>
    </div>
  );
};

export default DataUser;
