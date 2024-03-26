import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { meal } from '../../constants';import './Intro.css';

const Intro = () => {
  const vidRef = React.useRef();
  const [playVid , setPlayVid] = useState(true)

  const handleState = () => {
    setPlayVid(!playVid)
    if(playVid === true) {
      vidRef.current.play()
    }
    else {
      vidRef.current.pause()
    }
  }



  return (
    <div className="app__intro">
      <video 
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      ></video>
      <div className="app__intro-video_overlay flex__center "
        onClick={(e) => {
                e.preventDefault();
                  handleState()
                }
                  
                  }
      >
        <div 
              className="app__intro-video_overlay-btn flex__center " 
              
        >
          {playVid && <BsFillPlayFill className="bs-play-icon" />}
          {!playVid &&  <BsPauseFill className="bs-pause-icon" />}
        </div>
      </div>
    </div>

    

    
  );
}
  


export default Intro;
