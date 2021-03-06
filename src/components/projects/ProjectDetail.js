import React from "react";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";
import Loading from "../layout/Loading";
import {Redirect} from 'react-router-dom'

function ProjectDetail(props) {
  const id = props.match.params.id;
  const { project,auth } = props;
  if (!auth.uid) {
    return <Redirect to="/signin" />;
  }
  console.log(project);
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <div className="card-title">{project.title}</div>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {project.authorFirstName} {project.authorLastName}
            </div>
            <div>24th, September 2021</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container section project-details">
        <Loading />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetail);
