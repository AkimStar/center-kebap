import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

// Keyframes for potential animations
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const MenuContainer = styled.section`
  position: relative;
  overflow: hidden;
  // Use vibrant gradient background from Luks Kebab screenshot
  background: linear-gradient(135deg, var(--pink) 0%, var(--yellow) 50%, var(--blue) 100%);
  background-size: 200% 200%;
  // animation: ${gradientAnimation} 15s ease infinite; // Optional: Animate gradient
  padding: 6rem 0; // Keep section padding
`;

const Container = styled.div`
  // Uses global container class
  position: relative; // For positioning decorative elements
  z-index: 2;
`;

// Stylized Menu Title - Attempting Luks Kebab effect
const MenuTitleWrapper = styled(motion.div)`
  text-align: center;
  margin-bottom: 4rem;
`;

const MenuTitle = styled.h2`
  font-size: 6rem; // Very large title
  font-weight: 800; // Extra bold
  text-transform: uppercase;
  letter-spacing: 5px;
  display: inline-block;
  // Text gradient effect
  background: linear-gradient(45deg, var(--purple), var(--blue), var(--white));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  position: relative; // For potential pseudo-elements

  @media (max-width: 768px) {
    font-size: 4rem;
  }
   @media (max-width: 480px) {
    font-size: 3rem;
    letter-spacing: 3px;
  }
`;

// Container for the menu items list
const MenuList = styled.div`
  max-width: 800px; // Control width of the list
  margin: 0 auto;
  background-color: rgba(17, 17, 17, 0.6); // Semi-transparent dark background
  backdrop-filter: blur(5px);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
`;

// Style for each menu item in the list
const MenuItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr auto; // Title/Desc on left, Price on right
  gap: 1rem 2rem;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: none;
  }
`;

const MenuItemContent = styled.div`
  // Contains title and description
`;

const MenuItemTitle = styled.h3`
  font-size: var(--text-lg);
  margin-bottom: 0.3rem;
  color: var(--white);
  font-weight: 600;
`;

const MenuItemDescription = styled.p`
  color: var(--grey);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 0; // Reset paragraph margin
`;

const MenuItemPrice = styled.div`
  font-weight: 700;
  font-size: var(--text-lg);
  color: var(--yellow); // Use accent yellow for price
  white-space: nowrap; // Prevent price wrapping
  align-self: center; // Vertically align price
`;

// Simple flower decoration element
const FlowerDecoration = styled(motion.div)`
  position: absolute;
  font-size: 4rem; // Adjust size
  opacity: 0.3;
  z-index: 1;
  color: rgba(255, 255, 255, 0.5); // Semi-transparent white flower

  &.flower-1 { top: 10%; left: 5%; transform: rotate(-15deg); }
  &.flower-2 { top: 70%; right: 10%; transform: rotate(20deg); }
  &.flower-3 { bottom: 5%; left: 15%; transform: rotate(10deg); font-size: 3rem; }
`;

const Menu = () => {
  // User's menu items
  const menuItems = [
    { id: 1, title: 'Дюнер лаваш (среден)', description: 'Традиционен дюнер с прясно месо, зеленчуци и специален сос в лаваш.', price: '6,00' },
    { id: 2, title: 'Дюнер лаваш (голям)', description: 'Голяма порция традиционен дюнер с прясно месо, зеленчуци и специален сос в лаваш.', price: '8,00' },
    { id: 3, title: 'Дюнер питка', description: 'Вкусен дюнер с прясно месо, зеленчуци и специален сос в прясно изпечена питка.', price: '7,00' },
    { id: 4, title: 'Дюнер бокс', description: 'Дюнер месо и картофи, поднесени в удобна кутия за консумация в движение.', price: '8,00' }
  ];

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger animation of items
        delayChildren: 0.5, // Delay start after title
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <MenuContainer id="menu" className="section">
      {/* Decorative Elements */}
      <FlowerDecoration className="flower-1" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.3 }} transition={{ delay: 1.0, duration: 0.8 }}>🌸</FlowerDecoration>
      <FlowerDecoration className="flower-2" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.3 }} transition={{ delay: 1.2, duration: 0.8 }}>🌼</FlowerDecoration>
      <FlowerDecoration className="flower-3" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.3 }} transition={{ delay: 1.4, duration: 0.8 }}>🌷</FlowerDecoration>

      <Container className="container">
        <MenuTitleWrapper
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <MenuTitle>Меню</MenuTitle>
        </MenuTitleWrapper>

        <MenuList as={motion.div} variants={listVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          {menuItems.map((item) => (
            <MenuItem key={item.id} variants={itemVariants}>
              <MenuItemContent>
                <MenuItemTitle>{item.title}</MenuItemTitle>
                <MenuItemDescription>{item.description}</MenuItemDescription>
              </MenuItemContent>
              <MenuItemPrice>{item.price} лв.</MenuItemPrice>
            </MenuItem>
          ))}
        </MenuList>
      </Container>
    </MenuContainer>
  );
};

export default Menu;
