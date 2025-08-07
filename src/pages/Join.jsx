// src/pages/Join.jsx
import React from 'react';
import './Join.css';

const Join = () => {
  return (
    <div className="join-page">
      <div className="join-hero">
        <h1>Join Doctors Beyond Medicine</h1>
        <p>Step into a community of doctors and students exploring possibilities beyond the stethoscope.</p>
      </div>

      <div className="join-content">
        <section>
          <h2>Why Join?</h2>
          <ul>
            <li>✨ Connect with like-minded doctors and med students</li>
            <li>🎯 Access resources on careers in tech, business, public health, and more</li>
            <li>💬 Participate in discussions, mentorship, and events</li>
            <li>📚 Get support as you pivot or combine medicine with other passions</li>
          </ul>
        </section>

        <section>
          <h2>Who Can Join?</h2>
          <p>We welcome:</p>
          <ul>
            <li>🩺 Medical students (any year)</li>
            <li>👩‍⚕️ Practicing doctors considering a pivot</li>
            <li>🌍 Health professionals with diverse interests</li>
          </ul>
        </section>

        <section className="join-action">
          <h2>Ready to Join?</h2>
          <p>Click below to join our WhatsApp community or email us for more information.</p>
          <a
            href="https://chat.whatsapp.com/YOUR_COMMUNITY_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="join-button"
          >
            Join Our WhatsApp Group
          </a>
          <p>or email us at <strong>mokuamaurine531@gmail.com</strong> / <strong>kweyuayieko@gmail.com</strong></p>
        </section>
      </div>
    </div>
  );
};

export default Join;
