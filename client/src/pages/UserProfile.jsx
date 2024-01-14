import { useContext } from "react";
import { DashboardContext } from "../contexts/DashboardContext";

import { Link } from "react-router-dom";

const UserProfile = () => {
  const { user, handleLogout } = useContext(DashboardContext);

  if (!user) return <span className="text-red-500">User does not exists</span>;

  const { firstName, lastName, email } = user;

  return (
    <div className="container mx-auto">
      <div className="flex justify-center mt-12">
        <div className="bg-gray-700/70 rounded-3xl w-3/5 px-8 py-12 pb-24 flex flex-col">
          <h1 className="text-white text-4xl text-center heading">
            User Profile
          </h1>
          <form className="flex flex-col gap-10 w-4/5 self-center select-none self-center mt-12">
            <div>
              <label className="block text-lg text-base text-white mb-2">
                Your First Name
              </label>
              <input
                className="w-full border-white px-8 py-5 rounded outline-none bg-white/10 text-white"
                type="text"
                value={firstName || "N/A"}
                disabled
              />
            </div>

            <div>
              <label className="block text-lg text-base text-white mb-2">
                Your Last Name
              </label>
              <input
                className="w-full border-white px-8 py-5 rounded outline-none bg-white/10 text-white"
                type="text"
                value={lastName || "N/A"}
                disabled
              />
            </div>

            <div>
              <label className="block text-lg text-base text-white mb-2">
                Your Email
              </label>
              <input
                className="w-full border-white px-8 py-5 rounded outline-none bg-white/10 text-white"
                type="text"
                value={email || "N/A"}
                disabled
              />
            </div>

            <div className="flex justify-center gap-1">
              <p className="text-xl text-white">I Want to</p>
              <Link
                onClick={handleLogout}
                className="text-xl font-bold hover:underline font-medium text-white"
              >
                <p>Logout </p>
              </Link>
            </div>

            {/* <div className="flex justify-center">
              <button
                type="submit"
                className="text-white text-xl font-bold bg-green-500 bg-green-600 w-2/5 py-5 rounded-lg"
              >
                Login
              </button>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
