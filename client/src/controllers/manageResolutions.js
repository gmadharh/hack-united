import axios from "axios";

export const createResolution = async (resolution) => {
  try {
    const request = {
      url: "http://localhost:8080/user/resolution-challenge/new",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(resolution),
    };

    const { data } = await axios(request);
    return [data];
  } catch (error) {
    console.log("Error", error.message);

    return [false, error.response.data];
  }
};

export const getResolutions = async (userId) => {
  try {
    const request = {
      url: `http://localhost:8080/user/resolution-challenge/${userId}`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios(request);

    // console.log("data", data);

    return [data];
  } catch (error) {
    console.log("Error", error.message);

    return [false, error.response.data];
  }
};

export const deleteResolution = async (resolutionId) => {
  try {
    const request = {
        url: `http://localhost:8080/user/resolution-challenge/${resolutionId}`,
        method: "delete",
        headers: {
          "Content-Type": "application/json",
        },
      };
    
      const { data } = await axios(request);
      return [data];
  } catch(err) {
    console.log("Error", err.message);

    return [false, err.response.data];
  }
};
