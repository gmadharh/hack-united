import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-700/25 flex justify-between items-center py-3 px-8 navbar">
      <Link to="/" className="text-3xl font-semibold text-white">
        <p>Name of App</p>
      </Link>
      <div>
        <div className="flex gap-5">
          <Link to="/sign-in" className="text-xl font-medium text-white">
            <p>Sign In</p>
          </Link>
          <Link
            to="/register"
            className="text-xl font-medium text-white"
          >
            <p>Register</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
