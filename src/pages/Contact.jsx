// src/pages/Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you, whether you’re a doctor, student, or just curious.</p>
      </div>

      <div className="contact-info-only">
        <h3>Reach Out</h3>
        <p><strong>Email:</strong> mokuamaurine531@gmail.com / kweyuayieko@gmail.com</p>
        <p><strong>Phone:</strong> +254 713 554 218 / +254 797 683 168</p>
        <p><strong>Location:</strong> Nairobi, Kenya</p>
      </div>
    </div>
  );
};

export default Contact;
