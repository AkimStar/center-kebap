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

// Add a single continuous gradient background for the whole app
const GradientBackground = styled.div`
  /* This might just provide fallback or initial screen bg */
  /* The main gradient will be on MainContentWrapper */
  min-height: 100vh;
  width: 100%;
  /* Maybe keep a simpler base gradient here? Or remove? Let's keep it simple for now */
  /* background: linear-gradient(135deg, #ffe0ec, #fff6b7, #a8edea); */
`;

const MainContentWrapper = styled.main`
  position: relative;
  margin-top: -120px; /* Overlap hero */
  border-radius: 60px 60px 60px 60px / 120px 120px 60px 60px; /* Rounded top and bottom corners */
  background: linear-gradient(
    135deg,
    #ffe0ec 0%,
    #ffb6b9 15%,
    #fff6b7 30%,
    #feca57 45%,
    #a8edea 60%,
    #48dbfb 75%,
    #9b59b6 90%,
    #6a89cc 100%
  );
  box-shadow: 0 -8px 40px 0 rgba(0,0,0,0.10); /* Shadow for floating effect */
  overflow: hidden; /* Clip content to rounded corners */
  z-index: 10;

  @media (max-width: 768px) {
    margin-top: -60px;
    border-radius: 32px 32px 32px 32px / 60px 60px 32px 32px;
  }
`;

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to close mobile menu (can be passed down)
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* GradientBackground can act as a base layer if needed, but might be redundant now */}
      {/* <GradientBackground> */}
        <GlobalStyles />
        <Header isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setIsMobileMenuOpen} />
        <MobileMenu isOpen={isMobileMenuOpen} closeMenu={closeMobileMenu} />
        <Hero />
        <MainContentWrapper>
          <Menu />
          <Quality />
          <AboutUs />
          <Contact />
        </MainContentWrapper>
        <Footer />
      {/* </GradientBackground> */}
    </>
  );
}

export default App;
