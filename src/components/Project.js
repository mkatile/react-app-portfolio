import React from 'react';
import '../App.css';
import '../Portfolio.css';

function ProjectCards(props) {
    return (
      <div className={`grid-item gallery__item--${props.id}`}>
          <img src={props.image} alt={props.name} className="gallery__img"/>
          <div className="desc">
              <h5>{props.name}</h5>
          </div>
          <div className='dep-links'>
              <a href={props.deploy} target="_blank" rel="noopener noreferrer">Live App</a>
              <a href={props.github} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
      </div>
    );
}

export default ProjectCards;


