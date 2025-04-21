import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import FoodIconsBackground from './FoodIconsBackground';

const HeroContainer = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  will-change: transform;
  transform: translateY(var(--parallax-offset, 0px));
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.05);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%);
    z-index: 2;
  }
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 850px;
  padding: 0 15px;
`;

const HeroTitle = styled(motion.h1)`
  font-family: 'Inter', sans-serif;
  font-size: var(--text-5xl);
  font-weight: var(--fw-extrabold);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  background: linear-gradient(45deg, var(--purple), var(--blue), var(--white));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 2px 4px 12px rgba(0,0,0,0.4);
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: var(--text-4xl);
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: var(--text-lg);
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  background: linear-gradient(45deg, var(--pink), var(--yellow), var(--white));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.4);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
  font-weight: var(--fw-bold);
  @media (max-width: 768px) {
    font-size: var(--text-base);
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

const Hero = () => {
  const glfCuid = "d1ca8277-0183-41a8-92ea-0021fb1c65a1";
  const glfRuid = "4673b41b-2e2e-4758-8223-63f883a930bc";
  const heroTitleText = "Център Кебап - Отпусни сетивата с всяка хапка!";

  return (
    <HeroContainer 
      id="hero"
    >
      <FoodIconsBackground />
      <HeroBackground>
        <img src={process.env.PUBLIC_URL + '/hero-bg.jpg'} alt="Delicious kebab background" />
      </HeroBackground>
      <HeroContent> 
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}>
          <HeroTitle>
            {heroTitleText}
          </HeroTitle>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2, ease: 'easeOut' }}>
          <HeroSubtitle>
            Разгърни апетита си и позволи на вкусовете да те завладеят в неповторимо пътешествие към кулинарно удовлетворение.
          </HeroSubtitle>
        </motion.div>
        <motion.div 
          style={{ marginTop: '2rem' }} 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
        >
          <a
            className="glf-button"
            href="https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=4673b41b-2e2e-4758-8223-63f883a930bc&client_is_mobile=true&return_url=https%3A%2F%2Fcenterkebap.com%2F"
            target="_blank"
            rel="noopener noreferrer"
          >
            Поръчай сега
          </a>
        </motion.div>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
