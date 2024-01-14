import { createContext, useEffect, useState } from "react";

import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";

import { useNavigate } from "react-router-dom";

export const DashboardContext = createContext();

const DashboardContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [availableChallenges, setAvailableChallenges] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const cookies = new Cookies();

  useEffect(() => {
    const token = cookies.get("jwt_token");

    if (typeof token !== "string") {
      return navigate("/sign-in");
    }

    try {
      const tokenUser = jwtDecode(token);
      setUser(tokenUser);
      setLoading(false);
    } catch (err) {
      navigate("/sign-in");
    }
  }, []);

  const handleLogout = () => {
    // console.log(cookies)
    cookies.remove("jwt_token");
    navigate("/sign-in");
  };

  return !loading ? (
    <DashboardContext.Provider
      value={{
        user,
        handleLogout,
        availableChallenges,
        setAvailableChallenges,
      }}
    >
      {children}
    </DashboardContext.Provider>
  ) : (
    <h3 className="heading text-3xl text-white">Loading...</h3>
  );
};

export default DashboardContextProvider;
