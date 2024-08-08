import React from 'react';
import PortfolioData from '../data';  // Import the data
import ProjectCards from '../components/Project';  // Ensure this component is correctly imported
import '../App.css';
import '../Portfolio.css';

const Portfolio = () => {
  return (
    <React.Fragment>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='card'>
              <div className='card-body'>
                <div className="header">
                  <h3>Portfolio</h3>
                </div>
                <div className="modal-footer" />
                <div className="grid-container vertical-line">
                  {PortfolioData.map((project) => (
                    <ProjectCards
                      key={project.id}  // Use project.id as the key
                      image={project.image}
                      name={project.name}
                      github={project.github}
                      deploy={project.deploy}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Portfolio;
