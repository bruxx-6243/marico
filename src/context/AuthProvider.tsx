import { useState, createContext } from "react";

interface User {
  username?: string;
  email: string;
  password: string;
}

export interface AuthContextValue {
  user: User | null;
  signUp: (newUser: User, fn: () => void) => void;
  logout: (fn: () => void) => void;
  logIn: (newUser: User, fn: () => void) => void;
}

export const AuthContext = createContext<AuthContextValue | null>(null);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  const signUp = (newUser: User, fn: () => void) => {
    setUser(newUser);
    fn();
  };

  const logout = (fn: () => void) => {
    setUser(null);
    fn();
  };

  const logIn = (newUser: User, fn: () => void) => {
    setUser(newUser);
    fn();
  };

  const value: AuthContextValue = { user, signUp, logout, logIn };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
