import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './finsus.css'

const FindUs = () => (
  <div className="app__findus app__bg section__padding app__wrapper ">
    <div className="app__findus-content app__wrapper_info">
      <SubHeading 
        upTitle={'Contact'}
        title={'Find Us'}
        img={images.spoon}
      />

      <p className='p__opensans'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
      <h3 className='p__cormorant'>Opening Hours</h3>
      <h5 className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</h5>
      <h5 className='p__opensans'>Sat - Sun: 10:00 am - 03:00 am</h5>

      <div className="app__findus-content_button">
        <button className='custom__button'>Visit Us</button>
      </div>
    </div>
    <div className="app__findus-image app__wrapper_img">
      <img src={images.findus} alt="" />
    </div>
    
  </div>
);

export default FindUs;
