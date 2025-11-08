import React from 'react';
import { useNavigate } from 'react-router-dom';
import './CapturePage.css'; // We'll create this CSS file next

// Import the image you just saved
import cowSilhouette from '../assets/cow-silhouette.png';

function CapturePage() {
  const navigate = useNavigate();

  // This function just moves to the loading screen
  const handleCaptureClick = () => {
    navigate('/loading'); // Navigate to the loading screen
  };

  return (
    <div className="capture-container">
      {/* This div simulates the dark camera view */}
      <div className="camera-view"></div>

      {/* This is the overlay image */}
      <img 
        src={cowSilhouette} 
        alt="Cow Silhouette Guide" 
        className="overlay-image"
      />

      {/* This is the guide text */}
      <p className="guide-text">
        Please align the animal's side profile in the guide.
      </p>

      {/* This is the fake capture button */}
      <button onClick={handleCaptureClick} className="capture-button"></button>
    </div>
  );
}

export default CapturePage;