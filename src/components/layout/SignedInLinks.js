import React from "react";
import { NavLink } from "react-router-dom";
import { signOut } from "../../store/actions/authActions";
import { connect } from "react-redux";

const SignedInLinks = (props) => {
  const {initials} = props
  console.log(props)
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <a href="" onClick={props.signOut}>Log Out</a>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          {initials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    initials: state.firebase.profile.initials,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignedInLinks);
