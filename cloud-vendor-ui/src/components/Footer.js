import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-section">
          <h3>CloudXVendor</h3>
          <p>
            A modern cloud vendor management platform designed for scalability,
            security, and ease of use.
          </p>
        </div>

        {/* Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/register">Register Vendor</a></li>
            <li><a href="/more">More About</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: support@cloudxvendor.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 CloudXVendor. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
