import React from 'react'
import './Homepage.css';
import image1 from "./ImageGallery/image1.jpg"; // Assuming your mail icon is in the same folder

const Homepage = () => {
  return (
    <div>
          <a>
        <img src={image1} alt="WhatsApp" className="Poster1" />
      </a>
      <div className='Whatwedo'>
      <h3>What We Do ?</h3>
      <p>We at , Manoj Manpower Solutions aim to provide our clients with a real time, precise and excellent quality service when it comes to their survey , market research, data collection, data analysis needs, with our highly advanced mobile applications and highly trained field surveyors. With the elections fast approaching, we understand the urgent need and the importance of quality data analysis for your electoral constituencies, in order for you to work on creating effective campaigning strategies, which would in turn yield maximum number of votes. We also facilitate NGOs ,marketer,public relation firms, colleges, other organizations to conduct survey and market research based on their specific need</p>
      </div>
      <div  className='Whatwedo'>
        <h3>#1 Survey And Market Research Company In India</h3>
      </div>
      <div className='survey'>
        <h2>Survey</h2>
      <p>Political parties depend on the mass inclination of voters and thus usually are looking for<br>
      </br> ways to determine the direction in which their votes may sway; Our expert political survey <br>
      </br>services provide the perfect avenue to determine the opinion. From drafting a survey questionnaire <br>
      </br>that produces results that are useful and free of bias, to our proven survey methodology that delivers accurate <br>
      </br>and reliable results, Xurveykshan is the full survey service firm ready to deliver the data to help bring success to your<br>
      </br> campaign.</p>
      <ul>
        <li>Political Parties Survey</li>
        <li>Field Data Collection</li>
        <li>Opinion Poll, Exit Poll Surveys</li>
        <li>Household Surveys, Socio-Economic Surveys</li>
        <li>Voter Canvassing, Door-to-Door Poll Analysis Survey</li>
      </ul>
      <div className='MarketResearch'>
        <h2>Market Research</h2>
        <p>Xurveykshan has expertise in qualitative and quantitative marketing data collection and analysis. Our proficient in-house marketing <br>
        </br>research team will give answers to your critical business questions and queries. Our marketing research services include:</p>
        <ul>
          <li>Audits</li>
          <li>Brand / product / service launch</li>
          <li>Business-to-Business Research.</li>
          <li>Strategic Research, Shopper Research</li>
          <li>Brand Research, Product Research, Consumer Research</li>
        </ul>
        <div className='Toolsweuse'>
          <h2>Tools We Use</h2>
          <p>Forget the conventional pen and paper method which is not only time consuming but also often unreliable and join hands with us to be a part of <br>
          </br>the new age data collection and analysis revolution. Here at Xurveykshan, we have developed mobile application for collecting exactly and precisely<br>
          </br> what you need.Now we conduct interviews or survey virtually anywhere, anytime from mobile devices capturing real time and accurate data. Check out some <br>
          </br>key features of our product below.</p>
        </div>
        <div className='OurTeam'>
          <h2>Our Team</h2>
          <ul>
            <li>Vinnu - A Tech professional with a high degree of result orientation and strong Analytical, Leadership, Communication, Project Management skills</li>
            <li>Manoj Kumar - An extraordinary creative out of the box thinker. Graduated from IIT Guwahati with a passion for Glory in the Technology Market</li>
            <li>Manohar - IT specialist with 4+ years of professional experience in software. Possess a B-Tech Degree in Computer Science from IIT Guwahati.</li>
          </ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Homepage;
