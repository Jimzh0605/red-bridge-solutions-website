import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { FAQ } from './pages/FAQ';
import { Portal } from './pages/Portal';
import { Consultation } from './pages/Consultation';
import { CaseStudies } from './pages/CaseStudies';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-offwhite font-sans text-charcoal">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/consultation" element={<Consultation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;