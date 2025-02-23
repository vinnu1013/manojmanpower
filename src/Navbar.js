import React from "react";
import "./Navbar.css";
import logo from "./Logo.png"; 
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="LOGO" />
        </a>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>{" "}
        {/* Link to Home */}
        <li>
          <Link to="/about">About</Link>
        </li>{" "}
        {/* Link to About */}
        <li>
          <Link to="/services">Services</Link>
        </li>{" "}
        {/* Link to Services */}
        <li>
          <Link to="/contact">Contact</Link>
        </li>{" "}
        {/* Link to Contact */}
      </ul>
    </nav>
  );
};

export default Navbar;
