
import React from 'react';

const VideoPlayer = () => {
  // Your video player logic goes here

  return (
    <div>
      <h2>Video Player</h2>
      <video controls width="600">
        <source
          src="../../image/test.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
