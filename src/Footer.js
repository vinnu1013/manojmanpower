import React from "react";
import "./Footer.css";
import call from "./call.png"; // Import image
import location from "./location.png";
import mail from "./mail.png";
import whatsapp from "./whatsapp.png";
import LinkedIn from "./LinkedIn.png";
import Instagram from "./Instagram.png";

const Footer = () => {
  return (
    <footer className="footer" border="1" cellpadding="15">
      <div>
        <table>
          <tr>
            <td>
              <img className="call-img" src={call} alt="LOGO" />
            </td>
            <td>
              <a href="9553409500" className="call-link">
                {" "}
                9553409500
              </a>
            </td>
            <td>
              <h4 className="h4">About Us</h4>
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="location-img"
                src={location}
                alt="Location_Symbol"
              />
            </td>
            <td>
              {" "}
              <p>Vanasthalipuram,Hyderabad</p>
              <a href="https://www.google.com/maps/dir//Land+Mark:,+Plot+No+20,+Ganesh+Temple+Rd,+beside+Hyderabad,+Phase-1,+Phase+I,+Vanasthalipuram,+Hyderabad,+Telangana+500070/@17.3316854,78.4877918,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcba184fe256a43:0xe20ec21de71ebf3f!2m2!1d78.5701936!2d17.3317023?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D" className="location-link">
                {" "}
                Get Location
              </a>
            </td>
            <td>
              {" "}
              <td className="About ">
                Race to Lead is a research initiative of the Building Movement
                Project (BMP). <br></br>
                For 25 years, BMP has been advancing the potential for nonprofit
                organizations to <br></br>
                have an impact in building movements for progressive social
                change. We help organizations <br></br>to align their social
                justice principles with their operating practices.<br></br>Our
                practical resources and creative solutions help organizations
                innovate to meet the<br></br> needs of the communities they
                serve and face the challenges of the external environment.
                <br></br>We bring people together, sharing best practices and
                building bridges that lead to policies and<br></br> approaches
                that support equity, fairness and sustainability.
              </td>
            </td>
          </tr>
          <tr>
            <td>
              <img className="mail-img" src={mail} alt="LOGO" />
            </td>
            <td>
              <a
                href="mailto:manojmanpowersolutions@gmail.com"
                className="mail-img"
              >
                {" "}
                manojmanpowersolutions
              </a>
            </td>
            <td>
              {" "}
              <a
                href="mailto:manojmanpowersolutions@gmail.com"
                className="mail-link"
              >
                <img
                  src={LinkedIn}
                  alt="LinkedIn_Logo"
                  className="contact-icon"
                />
              </a>
            </td>
            <td>
              <a href="https://wa.me/9059236500" className="whatsapp-link">
                <img src={whatsapp} alt="WhatsApp" className="whatsapp-Link" />
              </a>
            </td>
            <td>
              <a href="https://wa.me/9059236500" className="whatsapp-link">
                <img
                  src={Instagram}
                  alt="WhatsApp"
                  className="Instagram-Link"
                />
              </a>
            </td>
          </tr>
        </table>
      </div>
    </footer>
  );
};

export default Footer;
