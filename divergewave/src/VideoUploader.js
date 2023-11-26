// VideoUploader.js
import React, { useState } from 'react';

const VideoUploader = ({ onUpload }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedVideo(file);
  };

  const handleUpload = () => {
    // Perform upload logic here
    if (selectedVideo) {
      onUpload(selectedVideo);
    }
  };

  return (
    <div>
      <input type="file" accept="video/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload Video</button>
    </div>
  );
};

export default VideoUploader;
