import axios from "axios";

export const getResolutionSubjects = async () => {
  try {
    const request = {
      url: "http://localhost:8080/resolution-subjects",
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const {data} = await axios(request);

    return [data]

} catch (error) {
    console.log("Error", error.message);

    return [false, error.response.data]
  }
};
