import React, { Component } from "react";
import ProjectList from "../projects/ProjectList";
import Notifications from "./Notifications";
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import Loading from "../layout/Loading";
import {Redirect } from "react-router-dom"

export class Dashboard extends Component {
  render() {
    const { projects,auth } = this.props;

    if (!auth.uid) {
      return <Redirect to='/signin' />
    }
    
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <div className="projects-container">
              {projects ? <ProjectList projects={projects} /> : <Loading />}
            </div>
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(Dashboard);
