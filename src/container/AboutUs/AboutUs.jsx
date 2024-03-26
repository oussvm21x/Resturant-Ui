import React from 'react';
import './AboutUs.css';
import images from '../../constants/images';
import { SubHeading } from '../../components';

const AboutUs = () => (
  <div className="app__aboutus section__padding app__bg">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G" />
    </div>

    <div className="app__aboutus-content app__wrapper">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">
          About Us
        </h1>
        <img className='spoon__img' src={images.spoon} alt="spoon" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
        </p>
        <button className='custom__button ' >
            Know More
        </button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">
          About Us
        </h1>
        <img className='spoon__img' src={images.spoon} alt="spoon" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
        </p>
        <button className='custom__button ' >
            Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
