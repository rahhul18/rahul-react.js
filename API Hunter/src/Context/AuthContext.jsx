import React, { createContext, useState, useContext } from 'react';

 const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({ isAuth: false, token: null });

  const loginUser = (token) => {
    setAuthState({ isAuth: true, token });
  };

   const logoutUser = () => {
    setAuthState({ isAuth: false, token: null });
  };

  return (
    <AuthContext.Provider value={{ authState, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
// 