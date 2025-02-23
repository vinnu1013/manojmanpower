import React from 'react';
import contact_img from './ImageGallery/contact_us.jpg';
import call from "./call.png";
import location from "./location.png";
import mail from "./mail.png";
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <div class="image-container">
      <img src={contact_img} alt="Poster1" className="img" />
  <div class="overlay-text">
    <h3>CONTACT NOW !</h3>
  </div>
  <div class="overlay-text2">
    <table>
      <tr>
        <td><img className="call-img1" src={call} alt="LOGO" /></td>
        <td>
          <h4>9553409500/9154776500</h4>
          </td>
      </tr>
      <tr>
      <td><img className="mail-img1" src={mail} alt="LOGO" /></td>
      <td>
        <h4>manojmanpowersolutions@gmail.com</h4>
      </td>
      </tr>
      <tr>
        <td>
        <img
                className="location-img1"
                src={location}
                alt="Location_Symbol"
              />
        </td>
        <td>
          <h4>Vanasthalipuram,Hyderabad</h4>
          <a href="https://www.google.com/maps/dir//Land+Mark:,+Plot+No+20,+Ganesh+Temple+Rd,+beside+Hyderabad,+Phase-1,+Phase+I,+Vanasthalipuram,+Hyderabad,+Telangana+500070/@17.3316854,78.4877918,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bcba184fe256a43:0xe20ec21de71ebf3f!2m2!1d78.5701936!2d17.3317023?entry=ttu&g_ep=EgoyMDI0MDkzMC4wIKXMDSoASAFQAw%3D%3D" className="location-link">
                {" "}
                Get Location
              </a>
        </td>

      </tr>
    </table>
  </div>
</div>
    </div>
  );
};

export default Contact;