import React from 'react';
import { useNavigate } from 'react-router-dom';
import './InputPage.css'; // We'll create this CSS file next

// Another React component function
function InputPage() {
  const navigate = useNavigate();

  // This function handles the "Take New Photo" button click
  const handleCaptureClick = () => {
    // It navigates to the '/capture' page (which we'll make next)
    navigate('/capture'); 
  };

  // This function handles the "Upload from Gallery" button click
  const handleUploadClick = () => {
    // For the demo, we'll send them to the loading screen.
    // In a real app, this would open a file picker.
    // For now, let's just navigate to the loading page.
    navigate('/loading'); 
  };

  return (
    <div className="input-container">
      <h2>Select Image Source</h2>
      <button onClick={handleCaptureClick} className="input-button">
        Take New Photo
      </button>
      <button onClick={handleUploadClick} className="input-button">
        Upload from Gallery
      </button>
    </div>
  );
}

export default InputPage;