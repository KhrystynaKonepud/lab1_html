import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DirectionsPage from './pages/DirectionsPage';
import FeedbackPage from './pages/FeedbackPage';

function AppContent() {
  const location = useLocation();

  // Нічний режим (21:00 - 06:00)
  useEffect(() => {
    const applyNightMode = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 21 || currentHour < 6) {
        document.body.classList.add('night-mode');
      } else {
        document.body.classList.remove('night-mode');
      }
    };

    applyNightMode();
    const interval = setInterval(applyNightMode, 3600000);
    return () => clearInterval(interval);
  }, []);

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
