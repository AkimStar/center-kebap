import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Header from './components/Header';
import Hero from './components/Hero';
// import Features from './components/Features'; // To be removed/replaced
import Menu from './components/Menu';
import Quality from './components/Quality'; // Import the new component
import AboutUs from './components/AboutUs'; // Import the new AboutUs component
import Contact from './components/Contact'; // Import the new Contact component
// import Testimonials from './components/Testimonials'; // To be removed
// import Contact from './components/Contact'; // To be removed
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu'; // Import MobileMenu
// We will create a Quality component later

// The FontImport might be redundant if already in index.html or GlobalStyles
// Consider moving the @import to index.css or the head of public/index.html
const FontImport = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Dancing+Script:wght@700&display=swap');
`;

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to close mobile menu (can be passed down)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Removed hidden GloriaFood span */}
      {/* <FontImport /> */}
      <GlobalStyles />
      
      {/* Pass mobile menu state and handlers to Header */}
      <Header 
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      {/* Render MobileMenu and pass state/handlers */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        closeMenu={closeMobileMenu}
      />

      <Hero />
      {/* <Features /> */} {/* Removed */}
      <Menu />
      <Quality /> {/* Add the Quality component here */}
      <AboutUs /> {/* Add the new AboutUs section here */}
      <Contact /> {/* Add the new Contact section here */}
      {/* <Testimonials /> */} {/* Removed */}
      {/* <Contact openOrderModal={openOrderModal} /> */} {/* Removed */}
      <Footer />
    </>
  );
}

export default App;
