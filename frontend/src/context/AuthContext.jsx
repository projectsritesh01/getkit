import { createContext, useContext, useEffect, useState } from "react";
import authService from "../services/authService";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  /*
    Check whether the user is already logged in
    when the application starts.
  */
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const data = await authService.getCurrentUser();

        setUser(data.user);
      } catch (error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  /*
    Login
  */
  const login = async (credentials) => {
    const data = await authService.login(credentials);

    setUser(data.user);

    return data;
  };

  /*
    Signup
  */
  const signup = async (userData) => {
    const data = await authService.signup(userData);

    setUser(data.user);

    return data;
  };

  /*
    Logout
  */
  const logout = async () => {
    try {
      await authService.logout();

      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    signup,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}


/*
  Custom hook
*/
export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside an AuthProvider"
    );
  }

  return context;
}