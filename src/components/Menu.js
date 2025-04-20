import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import FoodIconsBackground from './FoodIconsBackground';

// Keyframes for potential animations
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const MenuContainer = styled.section`
  position: relative;
  /* Styles moved to MainContentWrapper in App.js */
  padding: 6rem 0; /* Keep internal padding */
`;

const Container = styled.div`
  // Uses global container class
  position: relative; // For positioning decorative elements
  z-index: 2; // Ensure content is above the ::before pseudo-element
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
  background-color: rgba(20, 20, 20, 0.65); // Slightly adjusted background
  backdrop-filter: blur(8px); // Increased blur
  border: 1px solid rgba(255, 255, 255, 0.1); // Subtle border for edge definition
  padding: 2rem;
  border-radius: 15px; // Slightly larger radius
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37); // Slightly softer shadow
`;

// Style for each menu item in the list
const MenuItem = styled(motion.div)`
  display: flex;
  align-items: flex-start; // Align top edges
  justify-content: space-between; // Push price to the end
  gap: 1rem; // Gap between content group and price
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out; // Add transition for hover

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    transform: translateY(-4px); // Subtle lift effect
    // Optional: Add a subtle shadow increase on hover if desired
    // box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 576px) {
    padding: 1rem 0;
    // Disable hover transform on smaller screens if it feels awkward
    &:hover {
      transform: none;
    }
  }
`;

const MenuItemContent = styled.div`
  // Contains title and description
  // No flex-grow needed here now
`;

const MenuItemTitle = styled.h3`
  font-size: var(--text-lg);
  margin-bottom: 0.3rem;
  color: var(--white);
  font-weight: var(--fw-semibold);

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const MenuItemDescription = styled.p`
  color: var(--grey);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 0; // Reset paragraph margin
  font-weight: var(--fw-regular);

  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

const MenuItemPrice = styled.div`
  font-weight: var(--fw-bold);
  font-size: var(--text-lg);
  color: var(--orange-red);
  white-space: nowrap; // Prevent price wrapping
  align-self: center; // Re-try centering vertically
  flex-shrink: 0; // Prevent price from shrinking

  @media (max-width: 576px) {
    font-size: 1rem;
    // align-self: flex-start; // Keep centered if it looks okay
    // margin-top: 4px;
  }
`;

// Food-related decoration element
const FoodDecoration = styled(motion.div)`
  position: absolute;
  font-size: 3.5rem;
  opacity: 0.18;
  z-index: 1;
  color: rgba(255, 255, 255, 0.7);
  user-select: none;
  pointer-events: none;

  &.food-1 { top: 8%; left: 4%; transform: rotate(-10deg); }
  &.food-2 { top: 65%; right: 8%; transform: rotate(18deg); }
  &.food-3 { bottom: 7%; left: 18%; transform: rotate(7deg); font-size: 2.7rem; }
  &.food-4 { top: 40%; left: 45%; transform: rotate(-8deg); font-size: 2.5rem; }
  &.food-5 { bottom: 12%; right: 12%; transform: rotate(12deg); font-size: 3rem; }
`;

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

// Add a placeholder image URL (you can replace with real images later)
const placeholderImg = process.env.PUBLIC_URL + '/food-placeholder.png';

// Example menu items (add image property)
const menuItems = [
  {
    id: 1,
    title: 'Дюнер лаваш (голям)',
    description: 'Голяма порция традиционен дюнер с прясно месо, зеленчуци и специален сос в лаваш.',
    price: '8,00',
    image: process.env.PUBLIC_URL + '/menu/1.png'
  },
  {
    id: 2,
    title: 'Телешки бургер',
    description: 'Традиционен говежди бургер с прясно телешко месо, свежи зеленчуци и специален сос в меко бриош хлебче.',
    price: '7,00',
    image: process.env.PUBLIC_URL + '/menu/2.png'
  },
  {
    id: 3,
    title: 'Пилешки бургер',
    description: 'Вкусен пилешки бургер с нежно филе, свежа салата, домат и специален сос, поднесен в прясна питка.',
    price: '6,00',
    image: process.env.PUBLIC_URL + '/menu/3.png'
  },
  {
    id: 4,
    title: 'Пилешки крилца',
    description: 'Хрупкави пилешки крилца, овкусени с ароматни подправки и изпечени до съвършенство.',
    price: '5,00',
    image: process.env.PUBLIC_URL + '/menu/4.png'
  },
  {
    id: 5,
    title: 'Пилешки хапки',
    description: 'Сочни пилешки хапки, приготвени от истинско пилешко месо, с хрупкава златиста коричка.',
    price: '5,00',
    image: process.env.PUBLIC_URL + '/menu/5.png'
  },
  {
    id: 6,
    title: 'Ляхмаджун',
    description: 'Тънка питка, покрита с фино смляно месо, подправки, доматен сос и магданоз.',
    price: '4,00',
    image: process.env.PUBLIC_URL + '/menu/6.png'
  },
];

// Add MenuItemImage styled component
const MenuItemImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  background: #fff6b7;
  flex-shrink: 0;

  @media (max-width: 576px) {
    width: 48px;
    height: 48px;
    border-radius: 10px;
  }
`;

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
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

const Menu = () => {
  return (
    <MenuContainer 
      id="menu" 
      className="section"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <FoodIconsBackground />
      {/* Food Decorative Elements */}
      <FoodDecoration className="food-1" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.18 }} transition={{ delay: 1.0, duration: 0.8 }}>
        {/* Kebab Skewer SVG */}
        <svg width="1em" height="1em" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="28" y="2" width="8" height="60" rx="4" fill="#ffb300"/><rect x="20" y="10" width="24" height="8" rx="4" fill="#ff7300"/><rect x="20" y="26" width="24" height="8" rx="4" fill="#ff4e8e"/><rect x="20" y="42" width="24" height="8" rx="4" fill="#48dbfb"/></svg>
      </FoodDecoration>
      <FoodDecoration className="food-2" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.18 }} transition={{ delay: 1.2, duration: 0.8 }}>
        {/* Burger SVG */}
        <svg width="1em" height="1em" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="32" cy="24" rx="24" ry="10" fill="#ffb300"/><rect x="8" y="24" width="48" height="12" rx="6" fill="#ff7300"/><ellipse cx="32" cy="46" rx="24" ry="10" fill="#48dbfb"/></svg>
      </FoodDecoration>
      <FoodDecoration className="food-3" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.18 }} transition={{ delay: 1.4, duration: 0.8 }}>
        {/* Pizza Slice SVG */}
        <svg width="1em" height="1em" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 8L56 56" stroke="#ff4e8e" strokeWidth="8" strokeLinecap="round"/><ellipse cx="32" cy="56" rx="24" ry="6" fill="#ffb300"/><circle cx="32" cy="40" r="4" fill="#ff7300"/><circle cx="44" cy="48" r="3" fill="#ff4e8e"/></svg>
      </FoodDecoration>
      <FoodDecoration className="food-4" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.18 }} transition={{ delay: 1.6, duration: 0.8 }}>
        {/* Chef Hat SVG */}
        <svg width="1em" height="1em" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="32" cy="20" rx="20" ry="10" fill="#fff6b7"/><rect x="16" y="20" width="32" height="16" rx="8" fill="#ffb300"/><rect x="20" y="36" width="24" height="8" rx="4" fill="#ff7300"/></svg>
      </FoodDecoration>
      <FoodDecoration className="food-5" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.18 }} transition={{ delay: 1.8, duration: 0.8 }}>
        {/* Utensils SVG */}
        <svg width="1em" height="1em" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="8" width="6" height="40" rx="3" fill="#ff4e8e"/><rect x="44" y="8" width="6" height="40" rx="3" fill="#48dbfb"/><rect x="24" y="36" width="16" height="6" rx="3" fill="#ffb300"/></svg>
      </FoodDecoration>

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
              <MenuItemImage src={item.image} alt={item.title} />
              <MenuItemContent>
                <MenuItemTitle>{item.title}</MenuItemTitle>
                <MenuItemDescription>{item.description}</MenuItemDescription>
              </MenuItemContent>
              <MenuItemPrice>{item.price} лв.</MenuItemPrice>
            </MenuItem>
          ))}
        </MenuList>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
          <span
            className="glf-button"
            data-glf-cuid="d1ca8277-0183-41a8-92ea-0021fb1c65a1"
            data-glf-ruid="4673b41b-2e2e-4758-8223-63f883a930bc"
          >
            РАЗГЛЕДАЙ ЦЯЛОТО МЕНЮ
          </span>
        </div>
      </Container>
    </MenuContainer>
  );
};

export default Menu;
