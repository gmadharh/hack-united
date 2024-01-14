import axios from "axios";

export const getResolutionChallenges = async (subject) => {
  try {

    console.log("subject", subject);
    const request = {
      url: "http://localhost:8080/user/resolution-challenge/generate",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify({subject})
    };

    const {data} = await axios(request);

    return [data]

} catch (error) {
    console.log("Error", error.message);

    return [false, error.response.data]
  }
};
