import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

// Updated HeaderContainer for sticky behavior and styling
const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1rem 0;
  display: flex;
  justify-content: center; /* Center the inner container */
  transition: background-color 0.3s ease, padding 0.3s ease;
  background-color: ${props => props.scrolled ? 'rgba(17, 17, 17, 0.8)' : 'transparent'};
  backdrop-filter: ${props => props.scrolled ? 'blur(8px)' : 'none'};
`;

const HeaderInnerContainer = styled.div`
  width: 100%;
  max-width: 1140px; /* Match global container width */
  padding: 0 15px; /* Match global container padding */
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 1rem; /* Match global container padding */
  }
`;

const Logo = styled(motion.div)`
  img {
    height: 56px; /* Increased height */
    transition: height 0.3s ease;
    /* filter: brightness(0) invert(1); */

    @media (max-width: 768px) {
      height: 42px;
    }
  }
  /* Ensure logo is clickable to go home/top */
  a {
    display: block;
  }
  flex-shrink: 0; // Prevent logo from shrinking
`;

// NEW: Container for the Nav Pill
const NavPill = styled(motion.div)`
  // Style for the pill background
  background-color: rgba(255, 255, 255, 0.15); // Light, semi-transparent white
  backdrop-filter: blur(5px); // Subtle blur
  padding: 0.5rem 1rem; // Padding inside the pill
  border-radius: 50px; // Fully rounded corners
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin: 0 auto; // Help centering if space allows

  @media (max-width: 768px) {
    display: none; // Hide on mobile
  }
`;

// NavLinks now just holds the links, no background
const NavLinks = styled.nav`
  display: flex;
  gap: 0.5rem; // Smaller gap between links inside pill
`;

// Update NavLink styling for pill background on hover/active
const NavLink = styled.a`
  color: var(--white);
  text-decoration: none;
  font-weight: 500; // Slightly lighter weight
  font-size: 0.85rem; // Slightly smaller font
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 0.4rem 1rem; // Padding for the background effect
  border-radius: 30px; // Rounded background for individual link
  transition: background-color 0.3s ease, color 0.3s ease;
  position: relative;
  z-index: 1;

  /* Remove the underline effect */
  /* &::after { display: none; } */ 

  &:hover {
    background-color: rgba(255, 255, 255, 0.9); // More solid white on hover
    color: var(--black); // Dark text on hover
  }

  // Add active state styling later if needed with JS or library
  // &.active {
  //   background-color: var(--white);
  //   color: var(--black);
  // }
`;

// --- Mobile Navigation Toggle --- 
const MobileNavToggle = styled(motion.button)`
  display: none; // Hidden by default
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  span {
    width: 2rem;
    height: 0.18rem; // Line thickness
    background: var(--white);
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    // Animate lines into an X when open
    &:first-child {
      transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${props => props.isOpen ? '0' : '1'};
      transform: ${props => props.isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${props => props.isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media (max-width: 768px) {
    display: flex; // Show on mobile
  }
`;
// -------------------------------

// Right side container for buttons
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-shrink: 0; // Prevent button group from shrinking

  @media (max-width: 768px) {
    display: none; // Hide order button on mobile (will be in mobile menu)
  }
`;

// Updated OrderButton styling to match Luks Kebab's orange style
const OrderButton = styled(motion.button)`
  background-color: var(--orange-red);
  color: var(--white);
  padding: 0.6rem 1.3rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: var(--orange-red-darker);
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`;

// Main Header Component
const Header = ({ isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  // Define the IDs here or pass as props if they might change
  const glfCuid = "d1ca8277-0183-41a8-92ea-0021fb1c65a1";
  const glfRuid = "4673b41b-2e2e-4758-8223-63f883a930bc";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    // Lock body scroll when mobile menu is open
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
        window.removeEventListener('scroll', handleScroll);
        document.body.style.overflow = 'unset'; // Clean up on unmount
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navItemVariants = {
      hidden: { opacity: 0, y: -10 },
      visible: { opacity: 1, y: 0 }
  };

  return (
    <HeaderContainer scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 70, damping: 20 }}
    >
      <HeaderInnerContainer>
        <Logo initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
          <a href="#hero"> {/* Link logo to top */} 
            <img src="/logo.png" alt="Център Кебап" />
          </a>
        </Logo>

        {/* Wrap NavLinks in NavPill */}
        <NavPill initial="hidden" animate="visible" variants={{ visible: { transition: { delayChildren: 0.4 } } }}>
          <NavLinks>
            <motion.div variants={navItemVariants}><NavLink href="#hero">Начало</NavLink></motion.div>
            <motion.div variants={navItemVariants}><NavLink href="#quality">Концепция</NavLink></motion.div>
            <motion.div variants={navItemVariants}><NavLink href="#about-us">За нас</NavLink></motion.div>
            <motion.div variants={navItemVariants}><NavLink href="#menu">Меню</NavLink></motion.div>
            <motion.div variants={navItemVariants}><NavLink href="#contact">Контакти</NavLink></motion.div>
          </NavLinks>
        </NavPill>

        <HeaderRight>
          <OrderButton
            className="glf-button" // Add class for GloriaFood script
            data-glf-cuid={glfCuid} // Add CUID
            data-glf-ruid={glfRuid} // Add RUID
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }}
          >
            Поръчай сега
          </OrderButton>
        </HeaderRight>

        <MobileNavToggle onClick={toggleMobileMenu} isOpen={isMobileMenuOpen}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
        >
          <span />
          <span />
          <span />
        </MobileNavToggle>

      </HeaderInnerContainer>
    </HeaderContainer>
  );
};

export default Header;
