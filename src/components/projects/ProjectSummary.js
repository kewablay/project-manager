import React from 'react'

function ProjectSummary({project}) {
    return (
      <div className="card z-depth-0 project-summary">
        <div className="card-content grey-text text-darken-3">
          <h4 className="card-title">{project.title}</h4>
          <p>Posted by Kewa Blay</p>
          <span className="grey-text">24th September, 10pm</span>
        </div>
      </div>
    );
}

export default ProjectSummary
