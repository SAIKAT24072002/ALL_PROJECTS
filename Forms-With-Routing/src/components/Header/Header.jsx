import React, { useState } from "react";
import { Link, NavLink } from "react-router";

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">MyBrand</h1>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-bold uppercase text-xl"
                : "font-bold uppercase text-black text-xl"
            }
            to="/home"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-bold uppercase text-xl"
                : "font-bold uppercase text-black text-xl"
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-bold uppercase text-xl"
                : "font-bold uppercase text-black text-xl"
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </nav>

        {isAuthenticated ? (
          <Link to="/login">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Login
            </button>
          </Link>
        ) : (
          <Link to="/signup">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Signup
            </button>
          </Link>
        )}

        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
