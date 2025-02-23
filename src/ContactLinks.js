import React from "react";
import "./ContactLinks.css";
import whatsapp from "./ImageGallery/whatsapp.png";
import mail from "./ImageGallery/mail01.png";

const ContactLinks = () => {
  return (
    <div className="contact-section">
      <a
        href="https://wa.me/9059236500"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
      >
        <img src={whatsapp} alt="WhatsApp" className=" contact-icon" />
      </a>
      <a
        href="mailto:manojmanpowersolutions@gmail.com"
        className="contact-link"
      >
        <img src={mail} alt="Mail" className="contact-icon" />
      </a>
    </div>
  );
};
export default ContactLinks;
