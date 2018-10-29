import React from 'react';

const Project = ({link, image, title, title2, description}) => {
  return(

    <a href={link}>
      <div className="project">
          <img src={image} alt="some-img"/>
          <div >
            <h3>{title}{title2}</h3>
            <p>
              {description}
            </p>
          </div>
      </div>
    </a>
  )
}

export default Project
