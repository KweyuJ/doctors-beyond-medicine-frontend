// src/pages/Contact.jsx
import React from 'react';
import './Contact.css';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

const Contact = () => {
  return (
    <div className="contact-page">
      <Fade direction="down" triggerOnce>
        <div className="contact-hero">
          <h1>Contact Us</h1>
          <p>We’d love to hear from you — whether you’re a doctor, student, or just curious.</p>
        </div>
      </Fade>

      <Fade direction="up" triggerOnce>
        <div className="contact-info-only">
          <h3>Reach Out</h3>
          <p><FaEnvelope className="icon" /> <strong>Email:</strong> mokuamaurine531@gmail.com / kweyuayieko@gmail.com</p>
          <p><FaPhoneAlt className="icon" /> <strong>Phone:</strong> +254 713 554 218 / +254 797 683 168</p>
          <p><FaMapMarkerAlt className="icon" /> <strong>Location:</strong> Nairobi, Kenya</p>
          <p className="contact-footer">We're just an email or call away — don’t hesitate to say hi!</p>
        </div>
      </Fade>
    </div>
  );
};

export default Contact;
