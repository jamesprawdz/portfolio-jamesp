import React from 'react';
import ContactForm from './ContactForm';
import SocialLinks from './SocialLinks';

const ContactPage = () => {
  return (
    <main className="contact-page">
      <section id="contact">
        <ContactForm />
      </section>
      <section className="social-connection">
        <SocialLinks />
      </section>
    </main>
  );
};

export default ContactPage;
