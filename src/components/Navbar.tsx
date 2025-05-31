import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center gap-8 py-4 bg-gray-800 text-white text-xl">
      <Link to="/" className="hover:text-yellow-400">Home</Link>
      <Link to="/about" className="hover:text-yellow-400">About</Link>
    </nav>
  );
};

export default Navbar;
