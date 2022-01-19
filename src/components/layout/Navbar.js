import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = (props) => {
  const { auth} = props;
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks />
  return (
    <div className="navbar grey darken-2">
      <div className="container nav-cont">
        <Link to="/" className="brand">
          <span>P</span>roject<span>o</span>view
        </Link>
        {links}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
