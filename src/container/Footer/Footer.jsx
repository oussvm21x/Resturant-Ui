import React from 'react';

import './Footer.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const Footer = () => (
  <div className="app__footer app__bg section__padding ">
    <div className="<app__footer-subscribe> felx__center section__padding ">
      <SubHeading
        upTitle={'Newsletter'}
        title={'Subscribe to Our Newsletter'}
        img={images.spoon}
        text={'And never miss latest Updates!'}
      />

      <div className="app__footer-subscribe-input_section ">
        <input className='myInput p__cormorant' placeholder='Email Address'></input>
        <button className='custom__button '>Subscribe</button>
      </div>
    </div>

    <div className="app__footer-bottom ">
      <div className="app__footer-bottom-content ">
        <div className='p__opensans '>
          <h3 className='headtext'>Contact Us</h3>
          <div className='content'>
            <p>9 W 53rd St, New York, NY 10019, USA</p>
            <p>+1 212-344-1230</p>
            <p>+1 212-555-1230</p>
          </div>
          
        </div>
        <div>
          <h1 className='headtext__cormorant'>Gerícht</h1>
          <div className="content">
            <p className='p__opensans '>"The best way to find yourself is to lose yourself in the service of others.”</p>
          <img src={images.spoon} alt="" />
          </div>
          
        </div>
        <div className='p__opensans '>
          <h3 className='headtext'>Working Hours</h3>
          <div className="content">
            <p>Monday-Friday: \n08:00 am -12:00 am </p>
            <p>Saturday-Sunday: \n07:00am -11:00 pm</p>
          </div>
          
        </div>
      </div>

      
    </div>
    <div className='copyright flex__center'>
      <p className='p__opensans '>2021 Gerícht. All Rights reserved.</p>
    </div>

   

    </div>
);

export default Footer;
