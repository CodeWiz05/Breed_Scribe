import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoadingPage.css'; // We'll create this CSS file next

function LoadingPage() {
  const navigate = useNavigate();
  
  // 'useState' is a React hook. It lets us store data in a component.
  // We'll store which step is "active" (i.e., checked).
  // 'activeStep' is a number, and 'setActiveStep' is the function to update it.
  const [activeStep, setActiveStep] = useState(1);

  // 'useEffect' is a hook that runs code *after* the component renders.
  // This is perfect for timers or data fetching.
  useEffect(() => {
    // We create a list of timers.
    // 'setTimeout' is a standard JavaScript function.
    
    // After 1 second (1000ms), set the active step to 2
    const timer1 = setTimeout(() => setActiveStep(2), 1000);
    
    // After 2 seconds, set the active step to 3
    const timer2 = setTimeout(() => setActiveStep(3), 2000);
    
    // After 3 seconds, set the active step to 4
    const timer3 = setTimeout(() => setActiveStep(4), 3000);
    
    // After 4 seconds, navigate to the '/result' page
    const timer4 = setTimeout(() => navigate('/result'), 4000);

    // This 'return' function is a cleanup.
    // If the user navigates away early, it clears the timers
    // so they don't try to run on a page that's no longer visible.
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [navigate]); // The '[]' means this effect runs only ONCE

  // Helper function to add a "checked" class if the step is active
  const getStepClass = (step) => {
    return step <= activeStep ? 'loading-step checked' : 'loading-step';
  };

  return (
    <div className="loading-container">
      <div className="loading-box">
        <h2>Analyzing Image...</h2>
        <ul>
          {/* We use our helper function to dynamically add the 'checked' class */}
          <li className={getStepClass(1)}>[✔] Image Uploaded</li>
          <li className={getStepClass(2)}>[✔] Analyzing Body Structure...</li>
          <li className={getStepClass(3)}>[✔] Identifying Breed...</li>
          <li className={getStepClass(4)}>[✔] Generating Report...</li>
        </ul>
      </div>
    </div>
  );
}

export default LoadingPage;