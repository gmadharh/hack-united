import { createContext, useEffect, useState } from "react";

import Cookies from "universal-cookie";
import { jwtDecode } from "jwt-decode";

import { useNavigate } from "react-router-dom";
import { getResolutions, deleteResolution } from "../controllers/manageResolutions";

export const DashboardContext = createContext();

const DashboardContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [availableChallenges, setAvailableChallenges] = useState(null);
  const [loading, setLoading] = useState(true);

  const [resolutions, setResolutions] = useState(null)

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

      fetchResolutions(tokenUser.id)
    } catch (err) {
      navigate("/sign-in");
    }
  }, []);

  const handleLogout = () => {
    // console.log(cookies)
    cookies.remove("jwt_token");
    navigate("/sign-in");
  };

  const fetchResolutions = async (userId) => {
    const response = await getResolutions(userId);

    if (response[0]) {
      const resolutions = [...response[0]];
      setResolutions(resolutions);
    }
  }

  const deleteResolutionById = async (resolutionId) => {
    const response = await deleteResolution(resolutionId)

    if (response[0]) {
      await fetchResolutions(user.id)
    } else console.log(response[1])
  }

  return !loading ? (
    <DashboardContext.Provider
      value={{
        user,
        handleLogout,
        availableChallenges,
        setAvailableChallenges,
        resolutions,
        setResolutions,
        fetchResolutions,
        deleteResolutionById
      }}
    >
      {children}
    </DashboardContext.Provider>
  ) : (
    <h3 className="heading text-3xl text-white">Loading...</h3>
  );
};

export default DashboardContextProvider;
