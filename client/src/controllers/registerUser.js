import axios from "axios";

export const registerUser = async (user) => {
  try {
    const request = {
      url: "http://localhost:8080/users/new",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(user)
    };

    const {data} = await axios(request);

    return [data]

} catch (error) {
    console.log("Error", error.message);

    return [false, error.response.data]
  }
};
