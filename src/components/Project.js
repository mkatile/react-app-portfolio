import React from 'react';

const Project = ({ title, image, liveLink, githubLink }) => (
  <div className="project">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <a href={liveLink} target="_blank" rel="noopener noreferrer">Live App</a>
    <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
  </div>
);

export default Project;

