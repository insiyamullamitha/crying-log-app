import { Link, useLocation } from "react-router-dom";
import {
  House,
  PersonFill,
  BarChart,
  LayoutSidebar,
  Calendar3,
} from "react-bootstrap-icons";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const location = useLocation();

  return (
    <div className="items-center flex justify-between bg-primary p-4 top-0">
      <h1 className="text-white uppercase text-4xl font-logo font-bold">
        Crying Log
      </h1>
      <div className="flex gap-4">
        <div className="hidden sm:flex gap-4">
          <Link
            to="/"
            className={`text-white hover:text-lightBlue`}
            style={{
              color: location.pathname === "/" ? "#3490dc" : "",
            }}
            aria-label="Home"
          >
            <House size={24} />
          </Link>

          <Link
            to="/calendar"
            className={`text-white hover:text-lightBlue`}
            style={{
              color: location.pathname === "/calendar" ? "#3490dc" : "",
            }}
            aria-label="Calendar"
          >
            <Calendar3 size={24} />
          </Link>

          <Link
            to="/statistics"
            className={`text-white hover:text-lightBlue`}
            style={{
              color: location.pathname === "/statistics" ? "#3490dc" : "",
            }}
            aria-label="Statistics"
          >
            <BarChart size={24} />
          </Link>

          <Link
            to="/login"
            className={`text-white hover:text-lightBlue`}
            style={{
              color:
                location.pathname === "/login" ||
                location.pathname === "/signup"
                  ? "#3490dc"
                  : "",
            }}
            aria-label="Login"
          >
            <PersonFill size={24} />
          </Link>
        </div>
        <button
          onClick={toggleSidebar}
          className={`text-white hover:text-lightBlue`}
          style={{
            color: showSidebar ? "#3490dc" : "",
          }}
        >
          <LayoutSidebar size={24} />
        </button>
      </div>
      {showSidebar && <Sidebar closeSidebar={() => setShowSidebar(false)} />}
    </div>
  );
}
