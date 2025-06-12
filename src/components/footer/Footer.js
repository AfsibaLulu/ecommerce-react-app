import React from 'react'

function Footer() {
  return (
    <footer className="bg-dark text-white pt-4">
    <div className="container">
      <div className="row">
        {/* About Section */}
        <div className="col-md-4 mb-3">
          <h5>About Us</h5>
          <p>
            We are dedicated to providing the best products and service.
            Learn more about our story and values.
          </p>
        </div>
        {/* Quick Links */}
        <div className="col-md-4 mb-3">
          <h5>Quick Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="/" className="text-white text-decoration-none">
                Home
              </a>
            </li>
            <li>
              <a href="/products" className="text-white text-decoration-none">
                Products
              </a>
            </li>
            <li>
              <a href="/contactus" className="text-white text-decoration-none">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/aboutus" className="text-white text-decoration-none">
                About Us
              </a>
            </li>
          </ul>
        </div>
        {/* Contact Information */}
        <div className="col-md-4 mb-3">
          <h5>Contact</h5>
          <p>
            123 Main Street<br />
            Anytown, USA 12345<br />
            Email: info@example.com<br />
            Phone: (123) 456-7890
          </p>
        </div>
      </div>
      {/* Copyright */}
      <div className="text-center py-3 border-top border-secondary">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </div>
  </footer>
);
  
}

export default Footer
