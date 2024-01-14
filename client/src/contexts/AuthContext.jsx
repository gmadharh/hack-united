import { createContext, useState } from "react";

import { jwtDecode } from "jwt-decode";
import Cookies from "universal-cookie";

export const AuthContext = createContext();

const validateToken = (token) => {
  try {
    jwtDecode(token);
    return true;
  } catch (err) {
    return false;
  }
};

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const cookies = new Cookies();
  const jwt = cookies.get("jwt_token");

  const isLogin = validateToken(jwt);

  const setCookie = (jwt_token) => {
    const decodedToken = jwtDecode(jwt_token);

    setUser(decodedToken);

    cookies.set("jwt_token", jwt_token);
  };

  return (
    <AuthContext.Provider value={{ setCookie, user, isLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
