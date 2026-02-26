import React, { useEffect, Suspense, Component, ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

// Lazy load page components for code splitting
const Home = React.lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = React.lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const FAQ = React.lazy(() => import('./pages/FAQ').then(module => ({ default: module.FAQ })));
const Portal = React.lazy(() => import('./pages/Portal').then(module => ({ default: module.Portal })));
const Consultation = React.lazy(() => import('./pages/Consultation').then(module => ({ default: module.Consultation })));
const SourcingProcess = React.lazy(() => import('./pages/SourcingProcess').then(module => ({ default: module.SourcingProcess })));

// Loading fallback component
const PageLoader: React.FC = () => (
  <div className="flex items-center justify-center min-h-[50vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
  </div>
);

// Error Boundary Component
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to monitoring service in production
    if (import.meta.env.PROD) {
      // Could integrate with Sentry, LogRocket, etc.
      console.error('Application error:', error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center">
          <h2 className="text-2xl font-serif font-bold text-charcoal mb-4">
            Something went wrong
          </h2>
          <p className="text-gray-600 mb-6 max-w-md">
            We apologize for the inconvenience. Please try refreshing the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-primary text-white font-bold rounded hover:bg-[#600018] transition-colors"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Redirect legacy hash URLs to clean URLs
const HashRedirect: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if there's a hash-based route in the URL
    const hash = window.location.hash;
    if (hash && hash.startsWith('#/')) {
      // Extract the path from the hash (e.g., "#/about" -> "/about")
      const cleanPath = hash.slice(1); // Remove the leading '#'
      // Navigate to the clean URL
      navigate(cleanPath, { replace: true });
    }
  }, [navigate]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <HashRedirect />
      <div className="flex flex-col min-h-screen bg-offwhite font-sans text-charcoal">
        <Header />
        <main id="main-content" className="flex-grow" role="main">
          <ErrorBoundary>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/sourcing-process" element={<SourcingProcess />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/portal" element={<Portal />} />
                <Route path="/consultation" element={<Consultation />} />
              </Routes>
            </Suspense>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
