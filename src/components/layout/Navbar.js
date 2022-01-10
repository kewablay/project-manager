import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

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

const mapStateToProps = (state) => {
  console.log(state);
  return { 
    
  };
};

export default connect(mapStateToProps)(Navbar);
