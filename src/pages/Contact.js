import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // handle form submission
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        {errors.name && <p>{errors.name}</p>}
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        {errors.email && <p>{errors.email}</p>}
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message"></textarea>
        {errors.message && <p>{errors.message}</p>}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
