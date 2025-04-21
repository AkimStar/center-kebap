import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import FoodIconsBackground from './FoodIconsBackground';

// Using the same icons as before
const PhoneIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg>
);
const MapPinIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>
);
const ClockIcon = () => (
    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8l-28.2 38.8c-3.9 5.3-11.4 6.5-16.8 2.5z"></path></svg>
);

const ContactContainer = styled.section`
  position: relative;
  /* Styles moved to MainContentWrapper in App.js */
  padding: 6rem 0;
`;

const Container = styled.div`
  /* Uses global container */
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  position: relative; // Ensure content is above pseudo-elements if added
  z-index: 2;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: var(--text-4xl); // Slightly smaller than Menu title
  font-weight: 800; // Bold
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 4rem; // Increase margin below title again
  // Text gradient effect - use different colors for variation
  background: linear-gradient(45deg, var(--white), var(--purple), var(--blue));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);

   @media (max-width: 768px) {
    font-size: var(--text-3xl);
  }
`;

const ContactLayout = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1.5fr; // Info column smaller than map column
  gap: 3rem;
  align-items: flex-start; // Align items top

  @media (max-width: 992px) {
      gap: 2rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)`
  background-color: rgba(20, 20, 20, 0.65); // Match MenuList style
  backdrop-filter: blur(8px); // Keep blur or adjust slightly if needed
  border: 1px solid rgba(255, 255, 255, 0.1); // Match MenuList style
  border-radius: 15px; // Match MenuList style
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37); // Match MenuList style
  padding: 2.5rem;
  height: 100%; // Try to match map height
  display: flex; // Use flex to help structure content
  flex-direction: column;
`;

// New styled component for the intro text inside the card
const InfoText = styled.p`
    color: rgba(255, 255, 255, 0.85);
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 2rem; // Space before the list
    border-bottom: 1px solid rgba(255, 255, 255, 0.1); // Separator line
    padding-bottom: 1.5rem; // Space below text, above line
`;

const ContactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

// Reusing ContactItem style from previous Footer
const ContactItem = styled.li`
  color: var(--white); // Brighter text inside dark box
  font-size: 1rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: flex-start;

  svg {
    margin-right: 1rem;
    color: var(--yellow); // Use yellow accent for icons here?
    font-size: 1.2rem;
    margin-top: 4px;
    flex-shrink: 0;
  }
  
  span, a {
      line-height: 1.5;
      color: var(--white); // Make text white
      font-weight: 600; // Make text bold
  }

  a {
    transition: color 0.3s ease;
    text-decoration: none;
    &:hover {
      color: var(--yellow); // Hover matches icon color
    }
  }
`;

const MapWrapper = styled(motion.div)`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4); // Slightly stronger shadow
  line-height: 0; // Prevent extra space below iframe
  height: 100%; // Try to fill height
  min-height: 400px; // Minimum height

  iframe {
    border: 0;
    width: 100%;
    height: 100%;
    min-height: 400px; // Ensure iframe respects min-height
  }
`;

const ContactTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

const ContactTitle = styled.h2`
  font-size: 4rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 4px;
  display: inline-block;
  background: linear-gradient(180deg, var(--blue), var(--purple), var(--white));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  position: relative;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
    letter-spacing: 2px;
  }
`;

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

// New separator line styled component
const Separator = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin: 1.5rem 0;
`;

// Define a layout variant specifically for staggering children
const layoutStaggerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger ContactInfo and MapWrapper
      delayChildren: 0.1
    }
  }
};

const contentVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const mapVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 } }
};

const Contact = () => {
  // Contact Info
  const address = "Гр. Силистра ул. Добрич №71";
  const phone = "0886 874 351";
  const phoneLink = "tel:0886874351";
  const hours = "Понеделник - Неделя: 10:00 - 19:00";
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d716.1340166061667!2d27.271125919713548!3d44.11356396105441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b01f000d74d967%3A0x68f23b09209bfdbb!2z0KbQtdC90YLRitGAINCa0LXQsdCw0L8!5e0!3m2!1sbg!2sbg!4v1745072915775!5m2!1sbg!2sbg";

  return (
    <ContactContainer 
      id="contact" 
      className="section"
    >
      <FoodIconsBackground />
      <Container className="container">
        <ContactTitleWrapper>
          <ContactTitle>Контакти</ContactTitle>
        </ContactTitleWrapper>
        <ContactLayout
          variants={layoutStaggerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <ContactInfo variants={contentVariants}>
            <div style={{ textAlign: 'center', fontWeight: 600, color: 'rgba(255,255,255,0.95)', fontSize: '1.1rem' }}>
              Намерете ни лесно или се свържете с нас.
            </div>
            <Separator />
            <ContactList>
              <ContactItem>
                <MapPinIcon />
                <span>{address}</span>
              </ContactItem>
              <ContactItem>
                <PhoneIcon />
                <a href={phoneLink}>{phone}</a>
              </ContactItem>
              <ContactItem>
                <ClockIcon />
                <span>{hours}</span>
              </ContactItem>
            </ContactList>
            <Separator />
            <div style={{ textAlign: 'center', fontWeight: 600, color: 'rgba(255,255,255,0.95)', fontSize: '1.1rem' }}>
              Очакваме Ви!
            </div>
          </ContactInfo>
          <MapWrapper variants={mapVariants}>
            <iframe 
                src={mapSrc}
                width="600" 
                height="450" 
                style={{ border: 0 }}
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Местоположение Център Кебап Силистра"
            ></iframe>
          </MapWrapper>
        </ContactLayout>
      </Container>
    </ContactContainer>
  );
};

export default Contact;
