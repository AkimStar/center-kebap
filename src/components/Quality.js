import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import FoodIconsBackground from './FoodIconsBackground';

// Quality section with gradient bg and custom layout
const QualityContainer = styled.section`
  position: relative;
  /* Styles moved to MainContentWrapper in App.js */
  padding: 6rem 0; /* Keep internal padding */
`;

// Using global container
const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  position: relative;
  z-index: 2;
`;

// Custom layout for overlapping elements
const QualityLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr); // 12 column grid
  align-items: center;
  gap: 3rem; // Increased gap for better spacing

  @media (max-width: 992px) {
      grid-template-columns: 1fr 1fr; // Simpler 2 column on tablet
      gap: 2rem;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr; // Single column on mobile
    gap: 3rem;
  }
`;

// Text content area
const QualityContent = styled(motion.div)`
  grid-column: 1 / span 6; // Takes first 6 columns
  background-color: rgba(20, 20, 20, 0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37);
  padding: 2rem;

  @media (max-width: 992px) {
    grid-column: 1 / span 1; // Takes first col
    padding: 1.5rem;
  }
  @media (max-width: 768px) {
    grid-column: 1 / -1; // Full width on mobile
    text-align: center;
    order: 2; // Text below image on mobile
    padding: 1.2rem;
  }
`;

// Update title style
const QualityTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

const QualityTitle = styled.h2`
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

const QualityText = styled.p`
  color: rgba(255, 255, 255, 1); 
  margin-bottom: 1rem;
  line-height: 1.7;
  font-size: var(--text-base);
  font-weight: var(--fw-regular);

  strong {
    font-weight: var(--fw-semibold);
    color: var(--orange-red);
  }
`;

// Image container with rounded corners and overlap effect
const QualityImageWrapper = styled(motion.div)`
  grid-column: 7 / span 6; // Takes last 6 columns
  position: relative;
  height: 485px;
  display: flex; // Use flex for centering image maybe
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    grid-column: 2 / span 1; // Takes second col
    height: 400px;
  }
   @media (max-width: 768px) {
    grid-column: 1 / -1; // Full width on mobile
    height: 350px; // Adjust height for mobile
    order: 1; // Image first on mobile
  }
`;

const QualityImage = styled.div`
  width: 100%;
  max-width: 450px; // Max width for image within wrapper
  height: 100%;
  border-radius: 20px; 
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
  transform: rotate(0deg);
  position: relative; // Ensure image stays within bounds if needed

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Placeholder for potential second smaller image like Luks
/*
const QualityImageSmall = styled(QualityImage)`
  width: 40%;
  height: 40%;
  bottom: -10%;
  left: -10%;
  transform: rotate(5deg);
  z-index: 3;
  box-shadow: 0 10px 25px rgba(0,0,0,0.4);
`;
*/

const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

const Quality = () => {
  // Update to the new image path
  const imageUrl = process.env.PUBLIC_URL + '/doner_kebab_close_up.jpg'; 

  return (
    <QualityContainer 
      className="section" 
      id="quality"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <FoodIconsBackground />
      <Container className="container">
        <QualityTitleWrapper>
          <QualityTitle>Качество</QualityTitle>
        </QualityTitleWrapper>
        <QualityLayout>
          <QualityContent
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <QualityText>
              В Център Кебап вярваме, че тайната на неустоимия вкус се крие в качеството на продуктите и страстта към готвенето.
            </QualityText>
            <QualityText>
              Ние използваме само <strong>подбрани, пресни съставки и доказани рецепти,</strong> за да гарантираме, че всяка хапка е <strong>истинско удоволствие.</strong> Нашата цел е да предложим не просто храна, а изживяване.
            </QualityText>
            <QualityText>
              При нас ще откриете автентични вкусове, приготвени с майсторство и внимание към всеки детайл. Нашата философия е проста: качествени продукти, перфектно изпълнение.
            </QualityText>
            <QualityText>
              Заповядайте и се насладете на атмосфера, в която ще усетите свежест и вкус във всяко ястие.
            </QualityText>
          </QualityContent>

          <QualityImageWrapper
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <QualityImage>
              {/* Image source updated */}
              <img src={imageUrl} alt="Качествен кебап" />
            </QualityImage>
            {/* Optional second image */}
            {/* <QualityImageSmall>
              <img src={imageUrlSmall} alt="Допълнително изображение" />
            </QualityImageSmall> */}
          </QualityImageWrapper>

        </QualityLayout>
      </Container>
    </QualityContainer>
  );
};

export default Quality; 