import React from 'react'
import {LogoImage} from "../assets/logo.jpg"

function About() {
  return (
    <div className="container my-5">
    <h2 className="text-center mb-4">About Us</h2>
    
    {/* Company Introduction */}
    <div className="row">
      <div className="col-md-6">
        <img 
          src="https://via.placeholder.com/500x300" 
          alt="Company" 
          className="img-fluid rounded"
        />
      </div>
      <div className="col-md-6">
        <h4>Welcome to E-Shop</h4>
        <p>
          E-Shop is your one-stop destination for the latest products in electronics, fashion, and home essentials. We strive to bring high-quality items at the best prices, ensuring a seamless shopping experience.
        </p>
      </div>
    </div>

    {/* Mission Statement */}
    <div className="mt-5 text-center">
      <h3>Our Mission</h3>
      <p>
        Our mission is to revolutionize online shopping by offering affordable, high-quality products with excellent customer service.
      </p>
    </div>

    {/* Team Section */}
    <div className="mt-5">
      <h3 className="text-center">Meet Our Team</h3>
      <div className="row">
        <div className="col-md-4 text-center">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Team Member" 
            className="rounded-circle"
          />
          <h5>John Doe</h5>
          <p>CEO & Founder</p>
        </div>
        <div className="col-md-4 text-center">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Team Member" 
            className="rounded-circle"
          />
          <h5>Jane Smith</h5>
          <p>Head of Marketing</p>
        </div>
        <div className="col-md-4 text-center">
          <img 
            src="https://via.placeholder.com/150" 
            alt="Team Member" 
            className="rounded-circle"
          />
          <h5>Mike Johnson</h5>
          <p>Lead Developer</p>
        </div>
      </div>
    </div>

    {/* Contact Info */}
    <div className="mt-5 text-center">
      <h3>Contact Us</h3>
      <p>Email: support@eshop.com | Phone: +1 (234) 567-890</p>
    </div>
  </div>
  )
}

export default About
