import React from "react";
import "../css/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <Link to="/" className="header__nav-link">
          Home
        </Link>
        <Link to="/register" className="header__nav-link">
          Register
        </Link>
        <Link to="/login" className="header__nav-link">
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;