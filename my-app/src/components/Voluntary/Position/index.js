import React from 'react';

const Position = ({image, title, description}) => {
  return(
    
    <div className="container about-item">
      <img className="bubble-img"src={image} alt="logo" />
      <div className="text-left">
        <h2>{title}</h2>
        <p className="narrow-text">{description}</p>
      </div>
    </div>

  )
}

export default Position
