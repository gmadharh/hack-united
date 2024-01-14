import { useContext, useEffect, useState } from "react";

import { DashboardContext } from "../contexts/DashboardContext";

const UserResolutions = () => {
  const { resolutions, fetchResolutions, deleteResolutionById, user } = useContext(DashboardContext);

//   const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResolutions(user.id)
  }, [])

//   if(loading) return <h3 className="heading text-3xl text-white">Loading...</h3>

  return (
    <div className="container mx-auto">
      <div className="flex justify-center mt-12">
        <div className="bg-gray-700/70 rounded-3xl w-4/5 px-8 py-12 pb-24 flex flex-col">
          <h1 className="text-white text-4xl text-center heading">
            List of Your Selected Resolutions
          </h1>

          <div className="flex justify-center mt-12">
            {Array.isArray(resolutions) && (
              <ul className="flex flex-col gap-8 w-4/5">
                {resolutions.map((resolution) => {
                  const { id, challenge, isCompleted } = resolution;
                  return (
                    <li
                      className="border-2 border-white  px-4 py-5 rounded-lg cursor-pointer flex flex-col gap-4"
                      key={resolution.id}
                      // onClick={() => fetchChallenges(subject.subject)}
                    >
                      <p className="text-white text-xl">{challenge}</p>

                      <div className="flex justify-end">
                        <button onClick={() => deleteResolutionById(id)}
                        className="text-white bg-red-500 rounded font-bold p-1">
                          Delete
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserResolutions;
