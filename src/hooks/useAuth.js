import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuth = () => {
    window.localStorage.getItem("token")
      ? setIsAuthenticated(true)
      : setIsAuthenticated(true);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return isAuthenticated;
};
