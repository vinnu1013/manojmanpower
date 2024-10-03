import "./App.css";
import Navbar from "./Navbar";
import ContactLinks from "./ContactLinks.js";
import Footer from "./Footer.js";
import Homepage from "./Homepage.js";
import About from "./About.js";
import Services from "./Services.js";  // Import Services component
import Contact from "./Contact.js";    // Import Contact component
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />  {/* Always visible */}
        <Routes>
          <Route path="/" element={<Homepage />} />  {/* Define route for Homepage */}
          <Route path="/about" element={<About />} />  {/* Define route for About page */}
          <Route path="/services" element={<Services />} />  {/* Define route for Services page */}
          <Route path="/contact" element={<Contact />} />  {/* Define route for Contact page */}
        </Routes>
        <ContactLinks />
        <br></br>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
