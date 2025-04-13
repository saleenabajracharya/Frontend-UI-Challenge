import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// ✅ Lazy-load route components
const Navbar = lazy(() => import('./components/Navbar'));
const HeroSection = lazy(() => import('./components/Herosection'));
const FeatureGrid = lazy(() => import('./components/FeatureGrid'));
const TaskManager = lazy(() => import('./components/TaskManager'));
const ContactForm = lazy(() => import('./components/ContactForm'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <FeatureGrid />
              <TaskManager />
              <ContactForm />
            </>
          } />
        </Routes>
        <Footer />
      </Suspense>
    </Router>
  );
}

export default App;
