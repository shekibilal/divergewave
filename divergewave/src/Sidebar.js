// Sidebar.js
import React from 'react';

const thumbnailStyle = {
    width: '50px',
    height: '50px',
    marginRight: '10px',
  };
const Sidebar = ({ uploadedVideos, onSelect }) => {
  return (
    <div>
      <h2>Uploaded Videos</h2>
      <ul>
        {uploadedVideos.map((video, index) => (
          <li key={index} onClick={() => onSelect(video)}>
            <img
              src={video.thumbnail} // Assuming each video object has a 'thumbnail' property
              alt={`Thumbnail for ${video.name}`}
              style={thumbnailStyle}
            />
            <span>{video.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default Sidebar;
