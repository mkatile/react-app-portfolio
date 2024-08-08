import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Form, Button } from 'react-bootstrap';
import { validateEmail } from '../utils/helper';
import '../App.css';

function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [formMessage, setFormMessage] = useState('');

  // Handles input changes and validation
  function handleChange(e) {
    const { name, value } = e.target;

    if (name === 'email') {
      const isValid = validateEmail(value);
      if (!isValid) {
        setFormMessage('Your email is invalid.');
      } else {
        setFormMessage('');
      }
    } else {
      if (!value.length) {
        setFormMessage(`${name.charAt(0).toUpperCase() + name.slice(1)} is required.`);
      } else {
        setFormMessage('');
      }
    }

    if (!formMessage) {
      setFormState({ ...formState, [name]: value });
    }
  }

  // Sends the email or surfaces an error on submission
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_7pi3req', '#contactForm', 'user_2ClFT2CBVbPN3tPCiXsd0')
      .then(response => {
        console.log(response.text);
        setFormMessage("Message sent!");
        setFormState({ name: '', email: '', subject: '', message: '' }); // Clear form on success
      })
      .catch(error => {
        console.log(error.text);
        setFormMessage("Your message couldn't be sent. Please email Mariam directly at mariamkatile06@gmail.com");
      });
  }



  return (
    <Form onSubmit={sendEmail} id="contactForm">
      <Form.Group controlId="name">
        <Form.Label>Your Name</Form.Label>
        <Form.Control 
          required 
          name="name" 
          placeholder="Jane Doe" 
          value={formState.name} 
          onChange={handleChange} 
        />
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Your Email</Form.Label>
        <Form.Control 
          required 
          name="email" 
          type="email" 
          placeholder="jdoe@gmail.com" 
          value={formState.email} 
          onChange={handleChange} 
        />
      </Form.Group>

      <Form.Group controlId="subject">
        <Form.Label>Subject</Form.Label>
        <Form.Control 
          required 
          name="subject" 
          placeholder="Subject" 
          value={formState.subject} 
          onChange={handleChange} 
        />
      </Form.Group>

      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control 
          required 
          name="message" 
          as="textarea" 
          rows="5" 
          placeholder="Message" 
          value={formState.message} 
          onChange={handleChange} 
        />
      </Form.Group>

      {formMessage && <p className="form-message">{formMessage}</p>}

      <Button type="submit" className='btn'>Submit</Button>
    </Form>
  )
}

export default ContactForm;
