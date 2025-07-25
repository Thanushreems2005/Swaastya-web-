// src/contexts/Auth/AuthContextObject.jsx
import { createContext } from "react";

// Define the default shape of your AuthContext here.
// This helps the linter and TypeScript understand the properties available in the context.
const AuthContext = createContext({
  user: null, // Initial user state
  isAuthenticated: false, // Initial authentication state
  // eslint-disable-next-line no-unused-vars
  login: (userData) => {}, // Placeholder function for login
  logout: () => {}, // Placeholder function for logout
  // eslint-disable-next-line no-unused-vars
  updateUser: (newUserData) => {}, // <--- IMPORTANT: Add updateUser here as a placeholder
});

export default AuthContext;
