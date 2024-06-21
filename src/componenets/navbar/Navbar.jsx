import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar flex">
      <div className="links flex">
        <Link to="/" className="list">
          Shop
        </Link>
        <Link to="/cart" className="list">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
