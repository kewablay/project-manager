import React from "react";
import {useParams} from 'react-router-dom'

function ProjectDetail(props) {
    const id = props.match.params.id
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Project Title - {id}</div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            beatae nihil sapiente, perferendis vitae accusamus suscipit unde
            consectetur sequi, dolorum sit eaque nemo ex quae voluptatem numquam
            eligendi eveniet!
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Kewa Blay</div>
          <div>24th, September 2021</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
