import React from 'react';
import {FaInstagram} from 'react-icons/fa'
import './Gallery.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const Gallery = () => {
  return (
    <div className="app__gallery app__bg section__padding">
      <div className="app__gallery-content flex__center">
        <SubHeading 
          upTitle={'Instagram'}
          title={'Photo Gallery'}
          img={images.spoon}
          text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.'}
          btnTxt={'View More'}
        
        />
      </div>
      <div className="app__gallery-images ">
        <div className="app__gallery-images-img">
          
          <img src={images.gallery01} alt="" />
          <div className="app__gallery-images-img_overlay flex__center">
            <FaInstagram color='#fff' fontSize={35}></FaInstagram>
          </div>
          
        </div>

        <div className="app__gallery-images-img">
          <img src={images.gallery02} alt="" />
          <div className="app__gallery-images-img_overlay flex__center">
            <FaInstagram color='#fff' fontSize={35}></FaInstagram>
          </div>
        </div>

        <div className="app__gallery-images-img">
          <img src={images.gallery03} alt="" />
          <div className="app__gallery-images-img_overlay flex__center">
            <FaInstagram color='#fff' fontSize={35}></FaInstagram>
          </div>
        </div>

        <div className="app__gallery-images-img" onH>
          <img src={images.gallery04} alt="" />
          <div className="app__gallery-images-img_overlay flex__center">
            <FaInstagram color='#fff' fontSize={35}></FaInstagram>
          </div>
        </div>
      </div>
  </div>
  )
}
  
;

export default Gallery;
