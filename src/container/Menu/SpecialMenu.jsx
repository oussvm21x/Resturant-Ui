import React from 'react';

import './SpecialMenu.css';
import { MenuItem, SubHeading } from '../../components';
import {data} from '../../constants'
import images from '../../constants/images';


const SpecialMenu = () => (
  <div className="app__specialMenu section__padding flex__center ">
    <div className="app__specialMenu-header flex__center ">
        <SubHeading 
              upTitle={'Menu that fits you palatte'}
              title={'Today’s Special'}
              img={images.spoon}
              text={null}
              btnTxt={null}
        ></SubHeading>
    </div>
    <div className="app__specialMenu-menu ">
      <div className="app__specialMenu-menu_wines flex__center">
          <div className="app__specilaMenu-menu_wines-title p__cormorant">
            <h1>Wine & Beer</h1>
          </div>
          <div className="app__specilaMenu-menu_wines-content">
            {data.wines.map((wines , index) => {
              return <MenuItem key={wines.title+index} title={wines.title} price={wines.price} tage={wines.tags}>
              </MenuItem>
            })}
          </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu}  />
      </div>
      <div className="app__specialMenu-menu_cocktails flex__center">
          <div className="app__specilaMenu-menu_wines-title p__cormorant">
              <h1>Cocktails</h1>
          </div>
          <div className="app__specilaMenu-menu_cocktails-content">
            {data.cocktails.map((Cocktails , index) => {
              return <MenuItem key={Cocktails.title+index} title={Cocktails.title} price={Cocktails.price} tage={Cocktails.tags}>
              </MenuItem>
            })}
          </div>
      </div>
    </div>
    <button className='custom__button'>View More</button>
  </div>
);

export default SpecialMenu;
