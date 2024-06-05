import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px"}}>
      <Link to="/" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}>Home</Link>
      <Link to="/about" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}>About</Link>
      <Link to="/product" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}>Product</Link>
      <Link to="/login" style={{ textDecoration: "none", color: "#333", fontWeight: "bold" }}>Login</Link>
    </nav>
  );
};

export default Navbar;
