import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { ToastProvider } from './context/ToastContext';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import VotingGuidePage from './pages/VotingGuidePage';
import CandidateInsightsPage from './pages/CandidateInsightsPage';
import ResourcesPage from './pages/ResourcesPage';
import AIAdvisorPage from './pages/AIAdvisorPage';

const App = () => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/guide" element={<VotingGuidePage />} />
            <Route path="/insights" element={<CandidateInsightsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/advisor" element={<AIAdvisorPage />} />
          </Routes>
        </Router>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;
