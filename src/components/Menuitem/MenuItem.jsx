import React from 'react';

import './MenuItem.css';

const MenuItem = ({title , price , tage}) => (
  <div className="app__menuItem">
    <div className="app__menuItemheader">
      <div className="app__meniItemhdeader-title">
        <p className='p__cormorant '> {title} </p>
      </div>
      <div className="app__meniItemhdeader-line">
        <span className="line"></span> {/* Horizontal line */}
      </div>
      <div className="app__meniItemhdeader-price">
        <p className='p__cormorant'> {price} </p>
      </div>
    </div>
    <div className="app__menuItemtag">
      <p className='p__opensans'>{tage}</p>
    </div>
  </div>
);

export default MenuItem;
