import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import VotingGuidePage from './pages/VotingGuidePage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/guide" element={<VotingGuidePage />} />
        <Route path="/resources" element={<LandingPage />} />
        <Route path="/advisor" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default App;
