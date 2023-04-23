import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hook/useAuth";
import { ReactNode } from "react";
import { AuthContextValue } from "../context/AuthProvider";

interface ProtectedRouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const location = useLocation();
  const { user } = useAuth() as AuthContextValue;

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
