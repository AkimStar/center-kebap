import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Icon = styled(motion.div)`
  position: absolute;
  font-size: 4.5rem;
  opacity: 0.35;
  z-index: 0;
  color: rgba(255, 255, 255, 0.85);
  user-select: none;
  pointer-events: none;
`;

const icons = [
  // Kebab Skewer
  { svg: <svg width="1em" height="1em" viewBox="0 0 64 64" fill="none"><rect x="28" y="2" width="8" height="60" rx="4" fill="#ffb300"/><rect x="20" y="10" width="24" height="8" rx="4" fill="#ff7300"/><rect x="20" y="26" width="24" height="8" rx="4" fill="#ff4e8e"/><rect x="20" y="42" width="24" height="8" rx="4" fill="#48dbfb"/></svg>, style: { top: '8%', left: '4%', transform: 'rotate(-10deg)' } },
  // Burger
  { svg: <svg width="1em" height="1em" viewBox="0 0 64 64" fill="none"><ellipse cx="32" cy="24" rx="24" ry="10" fill="#ffb300"/><rect x="8" y="24" width="48" height="12" rx="6" fill="#ff7300"/><ellipse cx="32" cy="46" rx="24" ry="10" fill="#48dbfb"/></svg>, style: { top: '65%', right: '8%', transform: 'rotate(18deg)' } },
  // Pizza Slice
  { svg: <svg width="1em" height="1em" viewBox="0 0 64 64" fill="none"><path d="M8 8L56 56" stroke="#ff4e8e" strokeWidth="8" strokeLinecap="round"/><ellipse cx="32" cy="56" rx="24" ry="6" fill="#ffb300"/><circle cx="32" cy="40" r="4" fill="#ff7300"/><circle cx="44" cy="48" r="3" fill="#ff4e8e"/></svg>, style: { bottom: '7%', left: '18%', transform: 'rotate(7deg)', fontSize: '3.5rem' } },
  // Chef Hat
  { svg: <svg width="1em" height="1em" viewBox="0 0 64 64" fill="none"><ellipse cx="32" cy="20" rx="20" ry="10" fill="#fff6b7"/><rect x="16" y="20" width="32" height="16" rx="8" fill="#ffb300"/><rect x="20" y="36" width="24" height="8" rx="4" fill="#ff7300"/></svg>, style: { top: '40%', left: '45%', transform: 'rotate(-8deg)', fontSize: '3.5rem' } },
  // Utensils
  { svg: <svg width="1em" height="1em" viewBox="0 0 64 64" fill="none"><rect x="14" y="8" width="6" height="40" rx="3" fill="#ff4e8e"/><rect x="44" y="8" width="6" height="40" rx="3" fill="#48dbfb"/><rect x="24" y="36" width="16" height="6" rx="3" fill="#ffb300"/></svg>, style: { bottom: '12%', right: '12%', transform: 'rotate(12deg)', fontSize: '3.8rem' } },
  // Hotdog
  { svg: <svg width="1em" height="1em" viewBox="0 0 64 64" fill="none"><rect x="10" y="28" width="44" height="8" rx="4" fill="#ff7300"/><ellipse cx="32" cy="32" rx="22" ry="8" fill="#fff6b7"/><rect x="18" y="30" width="28" height="4" rx="2" fill="#ff4e8e"/></svg>, style: { top: '20%', right: '18%', transform: 'rotate(-16deg)', fontSize: '3.2rem' } },
  // Fries
  { svg: <svg width="1em" height="1em" viewBox="0 0 64 64" fill="none"><rect x="18" y="18" width="6" height="28" rx="3" fill="#ffb300"/><rect x="28" y="14" width="6" height="32" rx="3" fill="#ff7300"/><rect x="38" y="20" width="6" height="26" rx="3" fill="#ff4e8e"/><rect x="14" y="40" width="36" height="12" rx="6" fill="#48dbfb"/></svg>, style: { top: '55%', left: '10%', transform: 'rotate(8deg)', fontSize: '3.5rem' } },
  // Taco
  { svg: <svg width="1em" height="1em" viewBox="0 0 64 64" fill="none"><ellipse cx="32" cy="44" rx="20" ry="8" fill="#ffb300"/><rect x="12" y="36" width="40" height="8" rx="4" fill="#ff7300"/><ellipse cx="32" cy="36" rx="20" ry="8" fill="#48dbfb"/></svg>, style: { bottom: '18%', left: '40%', transform: 'rotate(-12deg)', fontSize: '3.7rem' } },
  // Salad
  { svg: <svg width="1em" height="1em" viewBox="0 0 64 64" fill="none"><ellipse cx="32" cy="48" rx="20" ry="8" fill="#48dbfb"/><ellipse cx="32" cy="44" rx="16" ry="6" fill="#fff6b7"/><ellipse cx="32" cy="40" rx="12" ry="4" fill="#ffb300"/></svg>, style: { top: '75%', right: '30%', transform: 'rotate(6deg)', fontSize: '3.2rem' } },
  // Soup
  { svg: <svg width="1em" height="1em" viewBox="0 0 64 64" fill="none"><ellipse cx="32" cy="48" rx="20" ry="8" fill="#fff6b7"/><rect x="12" y="40" width="40" height="8" rx="4" fill="#ff4e8e"/><ellipse cx="32" cy="40" rx="20" ry="8" fill="#ffb300"/></svg>, style: { top: '30%', left: '60%', transform: 'rotate(14deg)', fontSize: '3.5rem' } },
];

const FoodIconsBackground = () => (
  <>
    {icons.map((icon, i) => (
      <Icon key={i} style={icon.style} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.35 }} transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }}>
        {icon.svg}
      </Icon>
    ))}
  </>
);

export default FoodIconsBackground; 