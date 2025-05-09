import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 17, 0.9); // Dark overlay, slightly transparent
  backdrop-filter: blur(10px);
  z-index: 990; // Below header toggle but above content
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MobileNavLinks = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem; 
  margin-bottom: 3rem; // Space before order button
`;

const MobileNavLink = styled(motion.a)`
  color: var(--white);
  text-decoration: none;
  font-weight: 600;
  font-size: 1.5rem; // Larger font size for mobile menu
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s ease;

  &:hover {
    color: var(--orange-red);
  }
`;

// Reuse the OrderButton style from Header, maybe slightly larger
const OrderButtonMobile = styled(motion.button)`
  background-color: var(--orange-red);
  color: var(--white);
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  transition: background-color 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: var(--orange-red-darker);
  }
`;

// Animation variants
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3, delay: 0.3 } } // Delay exit slightly
};

const linkVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } }
};

const MobileMenu = ({ isOpen, closeMenu }) => {
  // Define the IDs here or pass as props if they might change
  const glfCuid = "d1ca8277-0183-41a8-92ea-0021fb1c65a1";
  const glfRuid = "4673b41b-2e2e-4758-8223-63f883a930bc";

  const handleLinkClick = () => {
      closeMenu(); // Close menu when a link is clicked
  };

  return (
    // AnimatePresence handles the mounting/unmounting animations
    <AnimatePresence>
      {isOpen && (
        <Overlay
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <MobileNavLinks>
            {/* Use motion.a for individual link animations */}
            <MobileNavLink href="#hero" onClick={handleLinkClick} variants={linkVariants}>Начало</MobileNavLink>
            <MobileNavLink href="#quality" onClick={handleLinkClick} variants={linkVariants}>Концепция</MobileNavLink>
            <MobileNavLink href="#about-us" onClick={handleLinkClick} variants={linkVariants}>За нас</MobileNavLink>
            <MobileNavLink href="#menu" onClick={handleLinkClick} variants={linkVariants}>Меню</MobileNavLink>
            <MobileNavLink href="#footer" onClick={handleLinkClick} variants={linkVariants}>Контакти</MobileNavLink>
          </MobileNavLinks>

          <OrderButtonMobile 
            className="glf-button" // Add class for GloriaFood script
            data-glf-cuid={glfCuid} // Add CUID
            data-glf-ruid={glfRuid} // Add RUID
            variants={linkVariants} // Use link variants for button too
            whileHover={{ scale: 1.03 }} 
            whileTap={{ scale: 0.97 }} 
          >
            Поръчай сега
          </OrderButtonMobile>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu; 