import React from 'react';
import { images } from '../../constants';

import './Chef.css';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className="app__chef flex__center section__padding app__bg">
    <div className="app__chef-img flex__center">
        <img src={images.chef} alt="" />
    </div>
    <div className="app__chef-content ">
        <div className="app__chef-content_header">
          <SubHeading upTitle={'Chef’s Word'} title={'What we believe in'} img = {images.spoon} >
          </SubHeading>
        </div>
        <div className="app__chef-content_p">
          <div className="app__chef-content_p-title">
             <img src={images.quote} alt="" />
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p>
          </div>
          <p>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
        </div>
        <div className="app__chef-content_chef-name">
          <h3>Kevin Luo</h3>
          <p>Chef & Founder</p>
        </div>
        <div className="app__chef-content_sign">
          <img src={images.sign} alt="" />
        </div>
    </div>
  </div>
);

export default Chef;
