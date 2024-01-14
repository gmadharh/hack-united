import { useState, useContext } from "react";

import { AuthContext } from "../contexts/AuthContext";

const RegisterUser = () => {
  const [firstName, setFirstName] = useState("");  
  const [lastName, setLastName] = useState("");  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleSignup } = useContext(AuthContext);

  return (
    <div className="container mx-auto mt-32 flex justify-center">
      <div className="bg-gray-500/20 rounded-3xl w-3/5 px-8 py-12 flex flex-col justify-center">
        <h2 className="heading text-5xl text-white mb-10 text-center">
          Join In
        </h2>
        <form onSubmit={(e) => handleSignup(e, {firstName, lastName, email, password})} 
        className="flex flex-col gap-8 w-4/5 self-center select-none">
          <div>
            <label className="block text-lg text-base text-white mb-2">
              Your First Name
            </label>
            <input
              className="w-full border-b-4 border-white px-3 py-2 outline-none bg-transparent text-white"
              type="text"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-lg text-base text-white mb-2">
              Your Last Name
            </label>
            <input
              className="w-full border-b-4 border-white px-3 py-2 outline-none bg-transparent text-white"
              type="text"
              placeholder="Smith"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-lg text-base text-white mb-2">
              Your Email
            </label>
            <input
              className="w-full border-b-4 border-white px-3 py-2 outline-none bg-transparent text-white"
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
          </div>

          <div>
            <label className="block text-lg text-base text-white mb-2">
              Enter Password
            </label>
            <input
              className="w-full border-b-4 border-white px-3 py-2 outline-none bg-transparent text-white"
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-center">
            <button type="submit" className="text-white text-xl font-bold bg-green-500 bg-green-600 w-2/5 py-5 rounded-lg">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterUser;
