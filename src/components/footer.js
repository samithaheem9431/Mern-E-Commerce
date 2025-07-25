// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              We provide quality services and solutions tailored to your business needs. Your satisfaction is our top priority.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/home" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/services" className="text-white text-decoration-none">Services</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>

          </div>

          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p><i className="bi bi-envelope-fill me-2"></i>info@example.com</p>
            <p><i className="bi bi-phone-fill me-2"></i>+123 456 7890</p>
            <div>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="bi bi-instagram"></i>
              </a>

            </div>
          </div>
        </div>

        <hr className="bg-light" />
        <div className="text-center">
          <p className="mb-0">&copy; 2025 YourCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
