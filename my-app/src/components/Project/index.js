import React from 'react';

const Project = ({image, title, title2, description}) => {
  return(
    <div className="project">
      <img src={image} alt="some-img"/>
      <div>
        <h3>{title}{title2}</h3>
        <p>
          {description}
        </p>
      </div>
    </div>
  )
}

export default Project
