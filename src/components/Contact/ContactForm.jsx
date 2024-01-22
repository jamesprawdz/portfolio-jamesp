import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    // Here you would typically handle the form submission,
    // such as sending data to a server or integrating with an email API

    setConfirmationMessage('Thank you! Your message has been sent.');
    setTimeout(() => {
      setConfirmationMessage('');
    }, 5000);

    // Reset form fields
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact">
      <h2>Get in Touch</h2>
      <form id="contactForm" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required value={formData.message} onChange={handleChange}></textarea>

        <button type="submit">Send Message</button>
      </form>
      {confirmationMessage && <p id="confirmationMessage">{confirmationMessage}</p>}
    </section>
  );
};

export default ContactForm;
