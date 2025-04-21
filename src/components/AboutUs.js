import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import FoodIconsBackground from './FoodIconsBackground';

const AboutUsContainer = styled.section`
  position: relative;
  /* Styles moved to MainContentWrapper in App.js */
  padding: 6rem 0; /* Keep internal padding */
`;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  position: relative;
  z-index: 2;
`;

// Use a similar layout to Quality section
const AboutUsLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  gap: 3rem;

  @media (max-width: 992px) {
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

// Image wrapper - place image on the left this time
const AboutImageWrapper = styled(motion.div)`
  grid-column: 1 / span 6; // Takes first 6 columns
  position: relative;
  height: 435px; // Adjust height as needed
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    grid-column: 1 / span 1;
    height: 420px;
  }
   @media (max-width: 768px) {
    grid-column: 1 / -1;
    height: 400px;
    order: 1; // Image first on mobile
  }
`;

const AboutImage = styled.div`
  width: 100%;
  max-width: 400px; // Adjust max width
  height: 100%;
  border-radius: 20px; 
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  // Different rotation or effect?
  transform: rotate(0deg); 
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 5%; // Ensure chef is centered
  }
`;

// Text content area - on the right
const AboutContent = styled(motion.div)`
  grid-column: 7 / span 6; // Takes last 6 columns
  background-color: rgba(20, 20, 20, 0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37);
  padding: 2rem;

  @media (max-width: 992px) {
    grid-column: 2 / span 1;
    padding: 1.5rem; // Adjust padding for smaller screens
  }
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    text-align: center;
    order: 2; // Text below image on mobile
    padding: 1.2rem; // Adjust padding for mobile
  }
`;

const AboutTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

const AboutTitle = styled.h2`
  font-size: 4rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 4px;
  display: inline-block;
  background: linear-gradient(45deg, var(--blue), var(--purple), var(--white));
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

const AboutText = styled.p`
  color: rgba(255, 255, 255, 1); // Brighter white text
  margin-bottom: 1.5rem;
  line-height: 1.7;
  font-size: var(--text-base);
  font-weight: var(--fw-regular); // Ensure regular weight

  strong {
    font-weight: var(--fw-semibold); // Make strong text semi-bold
    color: var(--orange-red); // Use accent color for highlighted text
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

const AboutUs = () => {
  // Use the provided chef image path
  const imageUrl = process.env.PUBLIC_URL + '/fikret_ismail_chef.jpg'; 

  return (
    <AboutUsContainer 
      id="about-us" 
      className="section"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <FoodIconsBackground />
      <Container className="container">
        <AboutTitleWrapper>
          <AboutTitle>За нас</AboutTitle>
        </AboutTitleWrapper>
        <AboutUsLayout>
          <AboutImageWrapper
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <AboutImage>
              <img src={imageUrl} alt="Фикрет Исмаил - Главен готвач и собственик" />
            </AboutImage>
          </AboutImageWrapper>

          <AboutContent
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            <AboutText>
              В сърцето на Център Кебап е нашият сплотен екип, ръководен от главния готвач и собственик <strong>Фикрет Исмаил</strong>. Заедно споделяме страстта към храната и ангажимента към перфектния вкус.
            </AboutText>
            <AboutText>
              Ние държим на <strong>безкомпромисно качество</strong> и <strong>безупречна чистота</strong>. Всяко ястие се приготвя с внимание към детайла, от подбора на най-пресните продукти до финалното поднасяне, за да гарантираме едно наистина <strong>незабравимо и вкусно</strong> изживяване.
            </AboutText>
            <AboutText>
              Вашето удоволствие е нашето вдъхновение – с всяка хапка искаме да ви накараме да се върнете отново.
            </AboutText>
            {/* Add more text if needed */}
          </AboutContent>

        </AboutUsLayout>
      </Container>
    </AboutUsContainer>
  );
};

export default AboutUs; 