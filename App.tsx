import React, { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import EbikeCatalog from './pages/EbikeCatalog';
import SolarCatalog from './pages/SolarCatalog';
import PaymentPlansPage from './pages/PaymentPlansPage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';

export type Page = 'home' | 'ebikes' | 'solar' | 'payment' | 'about' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
  };

  return (
    <div className="bg-[#F6F8FA] text-[#0D1B2A]">
      <AnnouncementBar />
      <Header onNavigate={navigate} currentPage={currentPage} />
      <main>
        {currentPage === 'home' && <HomePage onNavigate={navigate} />}
        {currentPage === 'ebikes' && <EbikeCatalog />}
        {currentPage === 'solar' && <SolarCatalog />}
        {currentPage === 'payment' && <PaymentPlansPage />}
        {currentPage === 'about' && <AboutUsPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>
      <Footer />
    </div>
  );
};

export default App;