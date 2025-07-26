// Footer.js
import React from 'react';
import '../css/footer.css'; // Import custom CSS

function Footer() {
  return (
    <footer className="enhanced-footer">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            {/* About Us Section */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="footer-section">
                <h5 className="footer-title">
                  <i className="bi bi-info-circle-fill me-2"></i>
                  About Us
                </h5>
                <p className="footer-text">
                  We provide quality services and solutions tailored to your business needs. 
                  Your satisfaction is our top priority and we strive for excellence in everything we do.
                </p>
                <div className="footer-highlight">
                  <i className="bi bi-star-fill me-1"></i>
                  <span>Trusted by 1000+ clients</span>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="footer-section">
                <h5 className="footer-title">
                  <i className="bi bi-link-45deg me-2"></i>
                  Quick Links
                </h5>
                <ul className="footer-links">
                  <li>
                    <a href="/" className="footer-link">
                      <i className="bi bi-house-door me-2"></i>Home
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer-link">
                      <i className="bi bi-gear me-2"></i>Services
                    </a>
                  </li>
                  <li>
                    <a href="/" className="footer-link">
                      <i className="bi bi-people me-2"></i>About
                    </a>
                  </li>
                  <li>
                    <a href="/contact" className="footer-link">
                      <i className="bi bi-envelope me-2"></i>Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Contact Us Section */}
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="footer-section">
                <h5 className="footer-title">
                  <i className="bi bi-telephone-fill me-2"></i>
                  Contact Us
                </h5>
                <div className="contact-info">
                  <div className="contact-item">
                    <i className="bi bi-envelope-fill contact-icon"></i>
                    <a href="mailto:abdulsamikhan471@gmail.com" className="contact-link">
                      abdulsamikhan471@gmail.com
                    </a>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-phone-fill contact-icon"></i>
                    <a href="tel:+923456789" className="contact-link">
                      +92 3456 7890
                    </a>
                  </div>
                </div>
                
                <div className="social-section">
                  <h6 className="social-title">Follow Us</h6>
                  <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                       className="social-link facebook" aria-label="Facebook">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                       className="social-link twitter" aria-label="Twitter">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                       className="social-link instagram" aria-label="Instagram">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                       className="social-link linkedin" aria-label="LinkedIn">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="copyright-text mb-0">
                <i className="bi bi-c-circle me-1"></i>
                2025 YourCompany. All rights reserved.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-badges">
                <span className="badge-item">
                  <i className="bi bi-shield-check me-1"></i>
                  Secure
                </span>
                <span className="badge-item">
                  <i className="bi bi-heart-fill me-1"></i>
                  Made with Love
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;