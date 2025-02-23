import React from 'react';
import Image_Building_of_Party_Leader from './Services_Gallery/Image_Building_of_Party_Leader.jpg';
import Localized_Political_Strategies from './Services_Gallery/Localized_Political_Strategies.jpg';
import image1 from './Services_Gallery/image_building.jpg';
import image3 from './Services_Gallery/proactive_management01.jpg';
import image4 from './Services_Gallery/Manifesto.jpg';
import image5 from './Services_Gallery/Social_moment01.jpg';
import image6 from './Services_Gallery/feild_survey.jpg';
import image7 from './Services_Gallery/Booth_level.jpg';
import image8 from './Services_Gallery/realtime_pole_management.jpg';
import image9 from './Services_Gallery/leadership_development.jpg';
import './Services.css'; // Ensure this contains flip effect styles

const servicesData = [
  { id: 1, image: image1, title: 'Image Building of Party & Leader', description: 'We enhance political leaders and parties public image through strategic branding, media engagement, and grassroots outreach, ensuring strong voter connections, credibility, and impactful presence in elections.' },
  { id: 2, image: Localized_Political_Strategies, title: 'Localized Political Strategies', description: 'We develop tailored political strategies based on regional demographics, voter behavior, and local issues, ensuring impactful campaigns, strong voter engagement, and successful election outcomes through data-driven insights and community outreach.' },
  { id: 3, image: image3, title: 'Proactive Management', description: 'We provide real-time political monitoring, crisis management, and strategic planning to ensure leaders stay ahead, adapt quickly, and maintain a strong public presence for effective governance and campaign success.' },
  { id: 4, image: image4, title: 'Manifesto Drafting & Agenda Setting', description: 'We craft compelling political manifestos and strategic agendas, aligning with public aspirations, party vision, and policy goals to drive impactful campaigns and governance with clarity and purpose.' },
  { id: 5, image: image5, title: 'Social Movement Building', description: 'We design and implement strategic social movements, mobilizing communities, raising awareness, and driving political engagement to create lasting change and support for key policies and initiatives.' },
  { id: 6, image: image6, title: 'Field Surveys', description: 'We conduct in-depth field surveys to gather real-time data, analyze voter sentiments, and refine political strategies for effective decision-making and impactful campaign planning.' },
  { id: 7, image: image7, title: 'Booth Level Management', description: 'We ensure efficient booth-level management by organizing voter data, streamlining operations, and optimizing ground-level coordination to enhance election day performance and maximize voter engagement.' },
  { id: 8, image: image8, title: 'Real-time Poll Management', description: 'We provide real-time poll management by monitoring voter trends, analyzing live data, and ensuring swift decision-making to enhance electoral success and maintain transparency throughout the voting process.' },
  { id: 9, image: image9, title: 'Leadership Development', description: 'We empower future political leaders through training, mentorship, and strategic guidance, fostering strong decision-making, public engagement, and effective governance for long-term success in leadership roles.' },
];

const Services = () => {
  return (
    <div className='services-container'>
      <h1 className='heading'>Our Services</h1>
      <div className='grid-container'>
        {servicesData.map(service => (
          <div className='card' key={service.id}>
            <div className='card-inner'>
              <div className='card-front'>
                <img src={service.image} alt={service.title} className='card-image' />
              </div>
              <div className='card-back'>
                <h5>{service.title}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
