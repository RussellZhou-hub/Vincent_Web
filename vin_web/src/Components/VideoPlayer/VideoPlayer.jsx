import "./VideoPlayer.css"
import React from 'react';

const VideoPlayer = ( {videoName} ) => {

    
    const jsonString = JSON.stringify(videoName, null, 2);

    const name=jsonString.videoName;
    
    const v_name="/videos/"+videoName;

    return (
      <div className="video-container">
        <video width="640" height="360" controls autoPlay muted>
         
          <source src={v_name} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  
  export default VideoPlayer;