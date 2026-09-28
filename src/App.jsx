import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WizardModal from './components/WizardModal';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import ServiciosPage from './pages/ServiciosPage';
import ProyectosPage from './pages/ProyectosPage';
import FaqPage from './pages/FaqPage';
import NosotrosPage from './pages/NosotrosPage';
import ContactoPage from './pages/ContactoPage';
import PoliticaPrivacidadPage from './pages/PoliticaPrivacidadPage';
import TerminosCondicionesPage from './pages/TerminosCondicionesPage';
import NotFoundPage from './pages/NotFoundPage';
import ThankYouPage from './pages/ThankYouPage';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CookieBanner from './components/CookieBanner';
import AnalyticsTracker from './components/AnalyticsTracker';
import { shouldShowWizard } from './utils/localStorage';
import { WizardContext } from './contexts/WizardContext';

function App() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);

  // Check if wizard should be shown on mount
  useEffect(() => {
    setIsWizardOpen(shouldShowWizard());
  }, []);

  // Function to open wizard (can be called from any component)
  const openWizard = () => {
    setIsWizardOpen(true);
  };

  return (
    <WizardContext.Provider value={{ openWizard }}>
      <Router>
        <ScrollToTop />
        <AnalyticsTracker />

        {/* Wizard Modal - Available on all pages */}
        <WizardModal
          isOpen={isWizardOpen}
          onClose={() => setIsWizardOpen(false)}
        />

        {/* Navigation */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/proyectos" element={<ProyectosPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/privacidad" element={<PoliticaPrivacidadPage />} />
          <Route path="/terminos" element={<TerminosCondicionesPage />} />
          <Route path="/gracias" element={<ThankYouPage />} />
          {/* 404 Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        {/* Footer */}
        <Footer />

        {/* Interactive Features */}
        <FloatingWhatsApp />
        <CookieBanner />
      </Router>
    </WizardContext.Provider>
  );
}

export default App;
