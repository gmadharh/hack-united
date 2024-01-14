import { useState, useContext } from "react"
import {useNavigate} from "react-router-dom"

import { AuthContext } from "../contexts/AuthContext";
import { loginUser } from "../controllers/loginUser";

const UserSignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState(null);

    const {setCookie} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault()

      if(!email || !password) return setErrorMsg("Please fill in all the fields")
      
      const user = {email, password}
      const response = await loginUser(user)

      if(!response[0]) {
        setErrorMsg(response[1].message)
      } else {
        setErrorMsg(null)
        const {token} = response[0]

        if(token) {
          setCookie(token)
          navigate("/dashboard")
        }
      }
    }

  return (
    <div className="container mx-auto mt-32 flex justify-center">
      <div className="bg-gray-500/20 rounded-3xl w-3/5 px-8 py-12 flex flex-col justify-center">
        <h2 className="heading text-5xl text-white mb-10 text-center">
          Sign In
        </h2>
        <form onSubmit={handleSubmit}
         className="flex flex-col gap-8 w-4/5 self-center select-none">
          <div>
            {errorMsg && <span className="text-red-500 text-lg">{errorMsg}</span>}
          </div>
          <div>
            <label className="block text-lg text-base text-white mb-2">
              Enter Email
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
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSignIn;
