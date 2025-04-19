import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutUsContainer = styled.section`
  position: relative;
  overflow: hidden;
  // New gradient for this section (e.g., pink to purple)
  background: linear-gradient(120deg, var(--pink) 0%, var(--purple) 100%);
  padding: 6rem 0;
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
  height: 480px; // Adjust height as needed
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
  transform: rotate(3deg); 
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center; // Ensure chef is centered
  }
`;

// Text content area - on the right
const AboutContent = styled(motion.div)`
  grid-column: 7 / span 6; // Takes last 6 columns

  @media (max-width: 992px) {
    grid-column: 2 / span 1;
  }
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    text-align: center;
    order: 2; // Text below image on mobile
  }
`;

const AboutTitle = styled.h2`
  font-size: var(--text-4xl);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 2rem;
  // Another text gradient (e.g., white/pink/yellow)
  background: linear-gradient(45deg, var(--white), var(--pink), var(--yellow));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 1px 1px 8px rgba(0, 0, 0, 0.2);

   @media (max-width: 768px) {
    font-size: var(--text-3xl);
    margin-bottom: 1.5rem;
  }
`;

const AboutText = styled.p`
  color: rgba(255, 255, 255, 0.9); // Brighter white text
  margin-bottom: 1.5rem;
  line-height: 1.7;
  font-size: var(--text-base);

  strong {
    font-weight: 600;
    color: var(--yellow); // Use yellow accent for strong text
  }
`;

const AboutUs = () => {
  // Use the provided chef image path
  const imageUrl = "/fikret_ismail_chef.jpg"; 

  return (
    <AboutUsContainer id="about-us" className="section">
      <Container className="container">
        <AboutUsLayout>
          <AboutImageWrapper
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
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
            <AboutTitle>За нас</AboutTitle>
            <AboutText>
              В сърцето на Център Кебап е нашият сплотен екип, ръководен от главния готвач и собственик <strong>Фикрет Исмаил</strong>. Заедно споделяме страстта към храната и ангажимента към перфектния вкус.
            </AboutText>
            <AboutText>
              Ние държим на <strong>безкомпромисно качество</strong> и <strong>безупречна чистота</strong>. Всяко ястие се приготвя с внимание към детайла, от подбора на най-пресните продукти до финалното поднасяне, за да гарантираме едно наистина <strong>незабравимо и вкусно</strong> изживяване.
            </AboutText>
            {/* Add more text if needed */}
          </AboutContent>

        </AboutUsLayout>
      </Container>
    </AboutUsContainer>
  );
};

export default AboutUs; 