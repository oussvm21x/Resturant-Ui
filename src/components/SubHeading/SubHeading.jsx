import React from 'react';

const SubHeading = ({upTitle ,title ,img , text , btnTxt}) => (
  <div className="app__subHeading">
    <p className="app__subHeading_Uptitle p__cormorant">
      {upTitle}
    </p>
    <img className='spoon__img' src={img} alt="" />
    <h1 className="app__subHeading_title headtext__cormorant">{title}</h1>
    <p className='p__opensans'>
      {text}
    </p>
    <button className='custom__button'>
      {btnTxt}
    </button>
  </div>
);

export default SubHeading;
