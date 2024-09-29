import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';

import VotingGuidePage from './pages/VotingGuidePage';
import PolicyInsightsPage from './pages/PolicyInsightsPage';
import ResourcesPage from './pages/ResourcesPage';
import AIAdvisorPage from './pages/AIAdvisorPage';


const App = () => {
  return (
    <Router>
      <Routes>
        {/*Shallow routes for the front pages*/}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />

        {/*Routes for the main pages*/}
        <Route path="/guide" element={<VotingGuidePage />} />
        <Route path="/insights" element={<PolicyInsightsPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/advisor" element={<AIAdvisorPage />} />
      </Routes>
    </Router>
  );
};

export default App;
