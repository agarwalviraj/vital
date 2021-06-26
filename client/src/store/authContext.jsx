import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext({
  isAuth: false,
  setIsAuth: (_isAuth) => {},
  login: (_token) => {},
  signOut: () => {},
});

const AuthContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("id") ? true : false
  );

  const signOut = () => {
    localStorage.removeItem("id");
    setIsAuth(false);
  };

  const login = (token) => {
    localStorage.setItem("id", token);
    setIsAuth(true);
  };

  console.log("token checked");

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, login, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
