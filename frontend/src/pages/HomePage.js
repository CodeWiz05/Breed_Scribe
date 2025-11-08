import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomePage.css'; // We'll create this file next for styling

// 1. Import our new "useLanguage" hook
import { useLanguage } from '../context/LanguageContext';

function HomePage() {
  const navigate = useNavigate();
  
  // 2. Get the language data from our context
  const { language, text, toggleLanguage } = useLanguage();

  const handleStartClick = () => {
    navigate('/select'); 
  };

  return (
    <div className="home-container">
      {/* 3. Add the Toggle Button */}
      <button onClick={toggleLanguage} className="lang-toggle">
        {language === 'en' ? 'हिन्दी' : 'English'}
      </button>

      <h1>Breed Scribe</h1>
      <button onClick={handleStartClick} className="start-button">
        {/* 4. Use the text from the context */}
        {text.startButton}
      </button>
    </div>
  );
}

export default HomePage;