import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Home.css';

const Home = () => {
  return (
    <div className="bookclub-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="tagline">R E A D . G R O W . C O N N E C T</h1>
          <h2 className="subheading">Join the Books and Branches Book Club</h2>
          <p className="hero-description">— Where Every Story Counts.</p>
          <Link to="/login" className="get-started-btn">
            Get started
          </Link>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="why-us">
        <h2>Why Choose Us?</h2>
        <div className="reasons-container">
          <div className="reason-card">
            <h3>Community-Driven</h3>
            <p>Connect with like-minded book lovers and share your reading journey</p>
          </div>
          <div className="reason-card">
            <h3>Easy Book Trackingn</h3>
            <p>Add, rate and organize your favorite books in one place</p>
          </div>
          <div className="reason-card">
            <h3> Secure & User-Friendly </h3>
            <p>Simple login, intuitive dashboards, and a seamless experience for all users.</p>
          </div>
        </div>
      </section>

      {/* Simple Footer */}
      <footer className="simple-footer">
        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <a href="mailto:books@branches.com">books@branches.com</a>
        </div>
        <p>© 2025 Books & Branches. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;