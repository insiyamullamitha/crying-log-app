import { Link } from "react-router-dom";
import { House, BarChart, PersonFill } from "react-bootstrap-icons";

export default function Sidebar({ closeSidebar }) {
  return (
    <div
      className="fixed top-0 left-0 w-max-64 w-1/3 h-full bg-gray-900 z-50 shadow-xl p-4"
      onClick={closeSidebar}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <Link
          to="/"
          className="text-lightBlue hover:text-brighterBlue py-2"
          aria-label="Home"
        >
          <div className="flex items-center gap-2">
            <House size={24} />
            Home
          </div>
        </Link>
        <Link
          to="/statistics"
          className="text-lightBlue hover:text-brighterBlue py-2"
          aria-label="Statistics"
        >
          <div className="flex items-center gap-2">
            <BarChart size={24} />
            Statistics
          </div>
        </Link>
        <Link
          to="/login"
          className="text-lightBlue hover:text-brighterBlue py-2"
          aria-label="Login"
        >
          <div className="flex items-center gap-2">
            <PersonFill size={24} />
            Login
          </div>
        </Link>
      </div>
    </div>
  );
}
