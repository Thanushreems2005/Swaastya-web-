// src/contexts/Auth/AuthProvider.jsx
import React, { useState, useEffect } from "react";
import AuthContext from "./AuthContextObject";

export const AuthProvider = ({ children }) => {
  // Initialize user state from localStorage
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem("currentUser");
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      return null; // Return null if parsing fails
    }
  });

  // useEffect to consistently save user to localStorage whenever 'user' state changes
  useEffect(() => {
    try {
      if (user) {
        localStorage.setItem("currentUser", JSON.stringify(user));
      } else {
        localStorage.removeItem("currentUser");
      }
    } catch (error) {
      console.error("Failed to save user to localStorage", error);
    }
  }, [user]); // Dependency array: re-run this effect whenever 'user' state changes

  // Login function
  const login = (userData) => {
    // 'userData' is the new user data provided during login
    setUser(userData);
    // The useEffect above will handle saving 'userData' to localStorage
    return userData.role; // Assuming userData has a 'role' property
  };

  // Logout function
  const logout = () => {
    setUser(null);
    // The useEffect above will handle removing 'user' from localStorage
  };

  // updateUser function to merge new data into the existing user object
  const updateUser = (newData) => {
    // Renamed 'newUserData' to 'newData' for clarity
    setUser((prevUser) => {
      // Ensure prevUser exists before merging to avoid errors if prevUser is null
      if (prevUser) {
        return { ...prevUser, ...newData }; // Merge existing user data with newData
      }
      return newData; // If no previous user, just set the new data
    });
  };

  // The value provided to consumers of this context
  const authContextValue = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
    updateUser, // Expose updateUser in the context value
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
