import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DirectionsPage from './pages/DirectionsPage';
import FeedbackPage from './pages/FeedbackPage';
import { useNightMode } from './hooks/useNightMode';

function AppContent() {
  const location = useLocation();
  useNightMode();

  return (
    <>
      <Header showAnnouncement={location.pathname === '/'} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/directions" element={<DirectionsPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
