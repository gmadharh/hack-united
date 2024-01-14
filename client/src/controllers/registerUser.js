// import { useQuery } from '@tanstack/react-query';

const baseUrl = "http://localhost:8080";

export const registerNewUser = async (user) => {
  try {
    // if (!user.email || !user.password || !user.firstName) {
    //   throw new Error("Missing required fields");
    // }

    const res = await fetch(`${baseUrl}/users/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();

    return [data];
  } catch (error) {
    console.error(error);
  }
};

// export const useGithubUser = () => {
//   return useQuery({
//     queryKey: ["getN"],
//   });
// };
