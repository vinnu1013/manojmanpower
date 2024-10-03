// src/ImageGallery.js
import React from 'react';
import Slider from "react-slick";
import './ImageGallery.css';

import image1 from './ImageGallery/image1.jpg';
import image2 from './ImageGallery/image2.jpg';
import image3 from './ImageGallery/image3.jpg';
import image4 from './ImageGallery/image4.jpeg';

// Array of images
const images = [
  { id: 1, src: image1, alt: 'Survey Image 1' },
  { id: 2, src: image2, alt: 'Survey Image 2' },
  { id: 3, src: image3, alt: 'Survey Image 3' },
  { id: 4, src: image4, alt: 'Survey Image 4' },
];

const ImageGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="gallery">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageGallery;
