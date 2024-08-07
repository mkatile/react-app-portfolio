
import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  const projects = [
    {
      title: 'Task Board',
      image: 'task-board-image.png',
      liveLink: 'https://task-board-1-svxp.onrender.com',
      githubLink: 'https://github.com/mkatile/react-app-portfolio.git'
    },
    // Add more project objects here
  ];

  return (
    <div className="portfolio">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          image={project.image}
          liveLink={project.liveLink}
          githubLink={project.githubLink}
        />
      ))}
    </div>
  );
};

export default Portfolio;
