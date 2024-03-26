import React from 'react';
import './Laurels.css';
import { SubHeading } from '../../components';
import {data} from '../../constants'
import images from '../../constants/images';
import Award from '../../components/Award/award';

const Laurels = () => (
  <div className="app__laurels app__bg section__padding">
    <div className="app__laurels-logo">
      <img src={images.logo} alt="" />
    </div>
    <div className="app__laurels-continer flex__center ">
      <div className="app__laurels-continer_content ">
        <SubHeading 
          upTitle={'Awards & recognition'} title={'Our Laurels'} img={images.spoon}
        />
        <div className="app__laurels-continer_content_award">
          {data.awards.map((award , index) => {
              return (<Award  title={award.title} text={award.subtitle} image={award.imgUrl}></Award>)
            })}
        </div>
        
      </div>
      <div className="app__laurels-continer_img flex__center">
        <img src={images.laurels} alt="" />
      </div>
    </div>

  </div>
);

export default Laurels;
