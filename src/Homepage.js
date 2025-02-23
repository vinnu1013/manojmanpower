import React from "react";
import "./Homepage.css";
import image1 from "./ImageGallery/image1.jpg"; // Assuming your mail icon is in the same folder
import political_surveyor from "./political-surveyor.jpg";
import market_research from "./market_research.jpg";
import tools from "./tools.jpeg";
import vinay from "./vinay.jpg";
import manoj from "./manoj.JPG";
import manohar from "./manohar.JPG";

const Homepage = () => {
  return (
    
    <div>
      
      <a>
        <img src={image1} alt="Poster1" className="Poster1" />
      </a>

      <div>
        <h2>What We Do ?</h2>
        <p className="whatwedo-content">
          We at , Manoj Manpower Solutions aim to provide our clients with a
          real time, precise and excellent quality service when it comes to
          their survey , market research, data collection, data analysis needs,
          with our highly advanced mobile applications and highly trained field
          surveyors. With the elections fast approaching, we understand the
          urgent need and the importance of quality data analysis for your
          electoral constituencies, in order for you to work on creating
          effective campaigning strategies, which would in turn yield maximum
          number of votes. We also facilitate NGOs ,marketer,public relation
          firms, colleges, other organizations to conduct survey and market
          research based on their specific need
        </p>
      </div>
      <div>
        <h3 className="SurveyAndMaketResearch">
          #1 Survey And Market Research Company
        </h3>
      </div>
      <div className="survey">
        <h2>Survey</h2>
        <p>
          Political parties depend on the mass inclination of voters and thus
          usually are looking for<br></br> ways to determine the direction in
          which their votes may sway; Our expert political survey <br></br>
          services provide the perfect avenue to determine the opinion. From
          drafting a survey questionnaire <br></br>that produces results that
          are useful and free of bias, to our proven survey methodology that
          delivers accurate <br></br>and reliable results, Xurveykshan is the
          full survey service firm ready to deliver the data to help bring
          success to your<br></br> campaign.
        </p>
        <ul>
          <li>Political Parties Survey</li>
          <li>Field Data Collection</li>
          <li>Opinion Poll, Exit Poll Surveys</li>
          <li>Household Surveys, Socio-Economic Surveys</li>
          <li>Voter Canvassing, Door-to-Door Poll Analysis Survey</li>
        </ul>
        <div>
          <img
            src={political_surveyor}
            alt="image of political surveyor"
            className="political-survey"
          />
        </div>
        <br></br>
        <br></br>
        <div className="MarketResearch">
          <h2>Market Research</h2>
          <img
            src={market_research}
            alt="Poster1"
            className="market_research_img"
          />
          <p>
            Manoj Manpower has expertise in qualitative and quantitative marketing
            data collection and analysis. Our proficient in-house marketing{" "}
            <br></br>research team will give answers to your critical business
            questions and queries. Our marketing research services include:
          </p>

          <ul>
            <li>Audits</li>
            <li>Brand / product / service launch</li>
            <li>Business-to-Business Research.</li>
            <li>Strategic Research, Shopper Research</li>
            <li>Brand Research, Product Research, Consumer Research</li>
          </ul>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="Toolsweuse">
          <h2>Tools We Use</h2>
          <img src={tools} alt="Tools we use poster" className="tools" />
          <p className="content_toolsUsed">
            Forget the conventional pen and paper method which is not only time
            consuming but also often unreliable and join hands with us to be a
            part of <br></br>the new age data collection and analysis
            revolution. Here at Xurveykshan, we have developed mobile
            application for collecting exactly and precisely<br></br> what you
            need.Now we conduct interviews or survey virtually anywhere, anytime
            from mobile devices capturing real time and accurate data. Check out
            some <br></br>key features of our product below.
          </p>
          <ul>
            <li>Online Survey Platforms</li>
            <li>Mobile Data Collection Apps</li>
            <li>Statistical Analysis Software</li>
            <li>Polling Software</li>
          </ul>
        </div>
        <div>
          <h2>Our Works</h2>
          <img src={image1} alt="Previous Works" className="Our_Works" />
        </div>
        <div className="team-container">
      <h1>Meet Our Team</h1>
      <div className="team-members">
        <div className="team-member">
        <img src={manoj} alt="Manoj Sir Image" className="Manoj_img" />
          <h3>Manoj Kumar</h3>
          <p>Founder</p>
        </div>
        <div className="team-member">
        <img src={manohar} alt="Vinay Sir Image" className="Manohar_img" />
          <h3>Manohar</h3>
          <p>Co-founder</p>
        </div>
        <div className="team-member">
        <img src={vinay} alt="Manoj Sir Image" className="Vinay_img" />
          <h3>Vinay Kumar</h3>
          <p>Chief Marketing Officer</p>
        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Homepage;
