import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';  // Add these imports for routing
import Navbar from './components/Navbar';
import CarouselComponent from './components/CarouselComponent';
import Commitment from './components/Commitment';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Products from './components/Products';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ProductSection from './components/ProductSection';
import ScrollToTop from './components/reusables/ScrollToTop';
import FinanceSolutions from './components/FinanceSolutions';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <ScrollToTop />
      {/* Define Routes for different pages */}
      <Routes>
        {/* Home page route */}
        <Route path="/" element={
          <>
            <CarouselComponent />
            <Commitment />
            <Services />
            <WhyChooseUs />
            <Products />
            <ContactForm />
          </>
        } />

        {/* Products page route */}
        <Route path="/products" element={<ProductSection />} />
        <Route path="/services" element={<FinanceSolutions />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<ContactForm />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
