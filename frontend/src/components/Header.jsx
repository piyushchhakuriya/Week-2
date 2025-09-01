import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaBriefcase } from "react-icons/fa";

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="bg-teal-900 text-amber-100 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="flex items-center space-x-2 text-3xl font-extrabold tracking-wide hover:text-amber-300 transition"
        >
          <FaBriefcase className="text-amber-300" />
          <span>HireHub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/jobs" className="hover:text-amber-300 transition font-medium">
            Jobs
          </Link>
          <Link to="/companies" className="hover:text-amber-300 transition font-medium">
            Companies
          </Link>

          {token ? (
            <button
              onClick={handleLogout}
              className="ml-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="ml-4 bg-amber-100 hover:bg-amber-200 text-teal-900 px-4 py-2 rounded-lg font-semibold shadow-md transition"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="ml-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition"
              >
                Register
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-teal-800 text-amber-100 px-6 py-4 space-y-4">
          <Link
            to="/jobs"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-amber-300 transition font-medium"
          >
            Jobs
          </Link>
          <Link
            to="/companies"
            onClick={() => setMenuOpen(false)}
            className="block hover:text-amber-300 transition font-medium"
          >
            Companies
          </Link>

          {token ? (
            <button
              onClick={() => {
                handleLogout();
                setMenuOpen(false);
              }}
              className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-md transition"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="block bg-amber-100 hover:bg-amber-200 text-teal-900 px-4 py-2 rounded-lg font-semibold shadow-md transition"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="block bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
