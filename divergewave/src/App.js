// App.js
import React, { useState } from 'react';
import VideoUploader from './VideoUploader';
import Sidebar from './Sidebar';
import VideoPlayer from './VideoPlayer';
import logo from './logo.png';
import '@mantine/core/styles.css';
import { Flex } from '@mantine/core';

const App = () => {
  const [uploadedVideos, setUploadedVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoUpload = (video) => {
    setUploadedVideos([...uploadedVideos, video]);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <Flex>
      <p>Hello World</p>
      <p>Helo world 2</p>
    </Flex>
    // <div>
    //   <header style={headerStyle}>
    //   <img src={logo} alt="Logo" style={logoStyle} />
    //     <div style={buttonContainerStyle}>
    //       <button style={buttonStyle}>Button 1</button>
    //       <button style={buttonStyle}>Button 2</button>
    //     </div>
    //   </header>
    //   <VideoUploader onUpload={handleVideoUpload} />
    //   <div style={{ display: 'flex' }}>
    //     <Sidebar uploadedVideos={uploadedVideos} onSelect={handleVideoSelect} />
    //     <VideoPlayer selectedVideo={selectedVideo} />
    //   </div>
    // </div>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  background: '#333',
  color: 'white',
};

const logoStyle = {
  width: '203px', // Adjust the width as needed
  
};

const buttonContainerStyle = {
  display: 'flex',
};

const buttonStyle = {
  marginLeft: '10px',
};

export default App;
