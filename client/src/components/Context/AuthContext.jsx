import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return AuthContext;
}

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const value = {};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
