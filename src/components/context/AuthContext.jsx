// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { login as loginApi, signup as signupApi } from '../../api';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setUser({ token });
    }
  }, []);

  const login = async (userData) => {
    const { data } = await loginApi(userData);
    localStorage.setItem('token', data.token);
    setUser({ token: data.token });
  };

  const signup = async (userData) => {
    await signupApi(userData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
