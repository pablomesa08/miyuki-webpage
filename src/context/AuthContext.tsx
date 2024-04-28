"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
  useCallback,
} from "react";

interface AuthContextType {
  jwt: string | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [jwt, setJwt] = useState<string | null>(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("jwt");
      return token;
    }
    return null;
  });

  const isAuthenticated = useCallback(() => {
    return jwt !== null;
  }, [jwt]);

  const login = useCallback((token: string) => {
    setJwt(token);
    localStorage.setItem("jwt", token);
  }, []);

  const logout = useCallback(() => {
    setJwt(null);
    localStorage.removeItem("jwt");
  }, []);

  const authContextValue = useMemo(
    () => ({ jwt, login, logout, isAuthenticated }),
    [jwt, login, logout, isAuthenticated]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
