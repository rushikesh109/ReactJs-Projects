import React from "react";
import { Link } from "react-router-dom";
import Product from "../pages/Product";

const Navbar = () => {
  return (
    <div className="flex py-4 px-8 bg-cyan-900 justify-between">
      <h2 className="text-xl font-bold"> Sakshi rushi chi baby </h2>
              <div className="flex gap-8">
        <Link className="text-xl font-bold" to="/">
          HomeaL
        </Link>
        <Link className="text-xl font-bold" to="/about">
          About
        </Link>
        <Link className="text-xl font-bold" to="/contact">
          Contact
        </Link>
        <Link className="text-xl font-bold" to="/product">
          Product
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
