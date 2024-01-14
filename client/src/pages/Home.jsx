import Logo from "../assets/logo.png";

import { useNavigate } from "react-router-dom";

const Home = () => {
  //   const { name } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <div className="container mx-auto mt-24">
      <div className="flex justify-center mt-12">
        <div className="bg-gray-700/70 rounded-3xl w-4/5 px-20 py-12 pb-24">
          <div className="flex flex-col items-center justify-center gap-8">
            <img src={Logo} style={{ width: "80%" }} />
            <h3 className="font-bold text-white text-2xl text-center mb-16">
              People always want to do these New Years Resolutions, but have
              trouble coming up with ideas on how to go about it. So our
              application will generate ideas to help you get started working on
              your New Years resolutions.
            </h3>
            <button onClick={() => navigate("/register")}
             className="text-white text-xl font-bold bg-green-500 bg-green-600 w-2/5 py-5 rounded-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
