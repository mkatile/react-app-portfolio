import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ContactForm from '../components/Contact-form';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';  // Make sure this is installed
import '../App.css';

const Contact = () => {
    return (
      <div>
        <Container fluid className="bg-primary text-white py-5">
          <Container>
            <h1>Contact Me</h1>
            <p>
              If you have any questions or want to get in touch, please feel free to reach out.
            </p>
            <Button variant="light">Contact Me</Button>
          </Container>
        </Container>

        <Container fluid className="shadow bg-light mb-5">
          <Container className="p-4">
            <Row>
              <Col>
                <Container>
                  <h4 style={{ color: "#F06543" }}>Contact Info</h4>
                  <p>
                    <a href="mailto:mariamkatile06@gmail.com">
                      <span className="pr-3">
                        <FaEnvelope />
                      </span>
                      mariamkatile06@gmail.com
                    </a>
                  </p>
                  
                  <p>
                    <a href="https://github.com/mkatile" target="_blank" rel="noopener noreferrer">
                      <span className="pr-3">
                        <FaGithub />
                      </span>
                      mkatile
                    </a>
                  </p>
                  <p>
                    <a href="https://www.linkedin.com/in/mariam-mahadi-katil-a3151204/" target="_blank" rel="noopener noreferrer">
                      <span className="pr-3">
                        <FaLinkedin />
                      </span>
                      mariam-mahadi-katil
                    </a>
                  </p>
                </Container>
              </Col>

              <Col sm={12} md={6} lg={8} className="pt-sm-4 pt-lg-0">
                <Container>
                  <h4 style={{ color: "#F06543" }}>Send a Message</h4>
                  <ContactForm />
                </Container>
              </Col>
            </Row>
          </Container>
        </Container>
      </div>
    );
}

export default Contact;
