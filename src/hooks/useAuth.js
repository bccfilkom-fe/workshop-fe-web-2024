import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = window.localStorage.getItem("token");

  const checkAuth = () => {
    token ? setIsAuthenticated(true) : setIsAuthenticated(false);
  };

  useEffect(() => {
    checkAuth();
  }, [token]);

  return isAuthenticated;
};
