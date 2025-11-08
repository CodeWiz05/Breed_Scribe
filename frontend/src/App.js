import React, { useState } from 'react';
import UploadComponent from './components/UploadComponent';
import './App.css';
import LoadingComponent from './components/LoadingComponent';
import { motion, AnimatePresence } from 'framer-motion';
import ResultComponent from './components/ResultComponent';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

// --- We will create these components in the next steps ---
// import UploadComponent from './components/UploadComponent';
// import LoadingComponent from './components/LoadingComponent';
// import ResultComponent from './components/ResultComponent';
// ---------------------------------------------------------

/**
 * This is our new "Theme".
 * We tell MUI what our brand colors and fonts are,
 * and it applies them to all components.
 */
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#28a745', // A nice green, like in your friend's design
    },
    background: {
      default: '#f4f4f4', // A light grey background
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // A clean, modern font
  },
  components: {
    // We can add default styles here
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12, // Make all cards have rounded corners
          boxShadow: '0 4px 12px rgba(0,0,0,0.05)', // A soft shadow
        },
      },
    },
  },
});

function App() {
  /**
   * This is our "state". It's the brain of our app.
   * Instead of URLs, we just change this variable to change the "page".
   * It can be: 'upload', 'loading', or 'result'
   */
  const [appState, setAppState] = useState('upload');
  
  /**
   * This state will hold the API data when it "comes back".
   */
  const [resultData, setResultData] = useState(null);

  /**
   * This function will be passed to the UploadComponent.
   * When the user uploads, it will:
   * 1. Switch to the 'loading' screen.
   * 2. (Simulate) a 4-second API call.
   * 3. (Simulate) getting data back.
   * 4. Switch to the 'result' screen.
   */
  const handleUpload = () => {
    setAppState('loading');

    // Simulate a 4-second network request
    setTimeout(() => {
      // This is our new mock data, inspired by your friend's design
      const mockApiResult = {
        breed: "Holstein Friesian",
        confidence: 0.87,
        dairyLevel: "High",
        purpose: "Milch",
        usabilityScore: 0.92,
        evidence: [
          "Body conformation matches typical characteristics",
          "Udder development indicates dairy potential",
          "Coat pattern consistent with breed standards",
          "Skeletal structure supports classification"
        ],
        // We'll just use a placeholder image for the result
        imageUrl: "https://example.com/cow-image.jpg" 
      };

      setResultData(mockApiResult); // Save the data
      setAppState('result'); // Switch to the result screen
    }, 4000);
  };

  /**
   * This function will be passed to the ResultComponent
   * to let the user go back to the start.
   */
  const handleNewAnalysis = () => {
    setResultData(null);
    setAppState('upload');
  };

  // This object defines the animation: fade in, fade out.
  const componentAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3 }
  };

  /**
   * This function decides which "page" component to show
   * based on the current 'appState'.
   */
  const renderComponent = () => {
    if (appState === 'upload') {
      return (
        <motion.div key="upload" {...componentAnimation}>
          <UploadComponent onUpload={handleUpload} />
        </motion.div>
      );
    }
    if (appState === 'loading') {
      return (
        <motion.div key="loading" {...componentAnimation}>
          <LoadingComponent />
        </motion.div>
      );
    }
    if (appState === 'result') {
      return (
        <motion.div key="result" {...componentAnimation}>
          <ResultComponent data={resultData} onNewAnalysis={handleNewAnalysis} />
        </motion.div>
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* This resets all browser CSS for consistency */}
      <div className="App">
        <AnimatePresence mode="wait">
          {/* This renders the component AND gives it a unique key */}
          {/* The key is crucial for AnimatePresence to track it */}
          {renderComponent()}
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;