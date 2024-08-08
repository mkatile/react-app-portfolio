import React from 'react';
import Profile from '../assets/images/profile.png';
import LaurentianLogo from '../assets/images/laurentian-logo.jpg';
import '../App.css';

const AboutMe = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className="row abstract-back">
                                    <img className='profile' src={Profile} alt="Profile of the author" />
                                </div>
                            </div>

                            <div className='card-body'>
                                <div className="row">
                                    <p className='p-about'>
                                      A versatile software engineer with expertise in front-end and back-end development. They are currently working on several projects, including a task board application with features like task management and persistence, an Express.js API project using Sequelize and PostgreSQL, a CMS-style blog site, and a weather dashboard app.
                                      I am building a React portfolio with reusable components. I am proficient in technologies like JavaScript, React, Express.js, Sequelize, PostgreSQL, HTML, and CSS. I am also adept at setting up environment variables, managing databases, and creating dynamic web applications.
                                    </p>
                                </div>
                            </div>
                            <div className="modal-footer" />
                            <div className='card-body'>
                                <h2 className='edu'>Education</h2>
                                <br />

                                <div className='grid-container-profile'>
                                    <div className='grid-item'>
                                        <div className='title-uni'>Laurentian University, Sudbury</div>
                                        <div className='title-concentration'>Major in Geography and Minor in Geology</div>
                                        <div className="grid-item">
                                          <a href='https://laurentian.ca' target='_blank' rel='noreferrer'>
                                            <img className='University-logo' src={LaurentianLogo} alt='Laurentian University Logo' />
                                          </a>
                                        </div>
                                    </div>
                                    <div className="grid-item">
                                        <div className='title-uni'>School of Continuing Studies</div>
                                        <div className='title-concentration'>Full Stack Web Development</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AboutMe;

