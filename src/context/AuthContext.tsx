// src/context/AuthContext.tsx
import React, { createContext, useState, useContext } from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (userId: string, role: "admin" | "user") => void;
  logout: () => void;
  userRole: string;
}

const AuthContext = createContext<AuthContextProps>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
  userRole: ""
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("");

  const login = (userId: string, role: "admin" | "user") => {
    setIsAuthenticated(true);
    setUserRole(role);
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUserRole("");
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, userRole }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
