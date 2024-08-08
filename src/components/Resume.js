import React from 'react';
import Logo from '../assets/images/logo.png';
import MernLogo from '../assets/images/mern-logo.png';
import JqueryLogo from '../assets/images/jquery-logo.png';
import BootstrapLogo from '../assets/images/bootstrap-logo.png';
import HandlebarsLogo from '../assets/images/handlebars-logo.png';
import SqlLogo from '../assets/images/sql-logo.png';
import MongoLogo from '../assets/images/mongodb-logo.png';
import ResumePDF from '../assets/Résumé:CV.pdf';

import '../App.css';
import '../Portfolio.css';

const Resume = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>
                            <div className="header">
                              <h3>Download Resume: <a href={ResumePDF} download>Mariam Katile</a></h3>
                            </div>

                            <div className="modal-footer" />

                            <div className="header">
                                <h3>Skills</h3>
                            </div>
                            <div className="modal-footer" />

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Computer Science Fundamentals</div>
                                </div>
                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <p className='p-AboutMe'>Data Structures</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-AboutMe'>Algorithm</p>
                                    </div>

                                    <div className='grid-item-skills'>
                                        <p className='p-AboutMe'>Design Patterns</p>
                                    </div>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <div className="row">
                                    <div className='code'>Technologies</div>
                                </div>

                                <div className='grid-container-skills'>
                                    <div className='grid-item-skills'>
                                        <img src={Logo} className='img-skills' alt="Logo" />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={MernLogo} className='img-skills' alt="MERN stack logo" />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={JqueryLogo} className='img-skills' alt="jQuery logo" />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={BootstrapLogo} className='img-skills' alt="Bootstrap logo" />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={HandlebarsLogo} className='img-skills' alt="Handlebars logo" />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={SqlLogo} className='img-skills' alt="SQL logo" />
                                    </div>

                                    <div className='grid-item-skills'>
                                        <img src={MongoLogo} className='img-skills' alt="MongoDB logo" />
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

export default Resume;


