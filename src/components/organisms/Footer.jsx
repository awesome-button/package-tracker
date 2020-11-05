import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <h2>Customer Service</h2>

      <h3>Call us</h3>
      <a href="tel: 0794581288">079-458 12 88</a>
      <h3>Phone hours</h3>
      <span>Monday-Friday 08-22</span>
      <span>Saturday-Sunday 10-17</span>

      <h3>Mail us</h3>
      <a href="mailto:yellow-co@yellow-co.com">yellow-co@yellow-co.com</a>

      <h3>Send us a text</h3>
      <a href="sms: 0794581200">079-458 12 00</a>

      {/* maybe could add social media links */}
    </footer>
  );
};

export default Footer;
