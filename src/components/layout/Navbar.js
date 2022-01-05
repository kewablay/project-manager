import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const Navbar = () => {
  return (
    <div className="navbar grey darken-2">
      <div className="container nav-cont">
        <Link to="/" className="brand">
          <span>P</span>roject<span>o</span>view
        </Link>
        <SignedOutLinks />
        <SignedInLinks />
      </div>
    </div>
  );
};

export default Navbar;
