// VideoPlayer.js
import React, { useState } from 'react';

const VideoPlayer = ({ selectedVideo }) => {
  const [numberOfSpeakers, setNumberOfSpeakers] = useState(0);
  const [sentimentAnalysis, setSentimentAnalysis] = useState(false);
  const [videoSummary, setVideoSummary] = useState(false);

  const handleIncrement = () => {
    setNumberOfSpeakers((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setNumberOfSpeakers((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };

  const handleSentimentAnalysisChange = () => {
    setSentimentAnalysis(!sentimentAnalysis);
  };

  const handleVideoSummaryChange = () => {
    setVideoSummary(!videoSummary);
  };

  const handleAdvancedSettingsSave = () => {
    // You can handle saving the advanced settings here
    // For example, you might want to send these settings to a server
    console.log('Saved Advanced Settings:', {
      numberOfSpeakers,
      sentimentAnalysis,
      videoSummary,
    });
  };

  return (
    <div>
        <div style={advancedSettingsStyle}>
        <h3 style={{ fontSize: '14px' }}>Advanced Settings</h3>
        <label>
          Number of Speakers:
          <button onClick={handleDecrement}>-</button>
          <span> {numberOfSpeakers} </span>
          <button onClick={handleIncrement}>+</button>
        </label>
        <label>
          <input
            type="checkbox"
            checked={sentimentAnalysis}
            onChange={handleSentimentAnalysisChange}
          />
          Sentiment Analysis
        </label>
        <label>
          <input
            type="checkbox"
            checked={videoSummary}
            onChange={handleVideoSummaryChange}
          />
          Video Summary
        </label>
        <button onClick={handleAdvancedSettingsSave} style={saveButtonStyle}>
          Process
        </button>
      </div>
      {/* <h2>Selected Video</h2> */}
      {selectedVideo ? (
        <video width="400" controls>
          <source src={URL.createObjectURL(selectedVideo)} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <p>No video selected</p>
      )}

      
    </div>
  );
};

const advancedSettingsStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  margin: '10px 0',
};

const saveButtonStyle = {
   position: 'static',
    bottom: '10px',
    right: '10px',
    left: '10px',
};

export default VideoPlayer;
