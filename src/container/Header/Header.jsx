import React from 'react';
import './Header.css';
import images from '../../constants/images'
import SubHeading from '../../components/SubHeading/SubHeading';

const Header = () => (
  <div className="app__header app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading upTitle = {'Chase the new Flavour'} title = {'The key to Fine dining'} img = {images.spoon} text = {'Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus '} btnTxt = {'Explore Menu'}></SubHeading>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="" />
    </div>
  </div>
);

export default Header;
