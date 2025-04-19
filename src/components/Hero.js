import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

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
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.5));
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.05);
    filter: blur(1px);
  }
`;

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 750px;
  padding: 0 15px;
`;

const HeroTitle = styled(motion.h1)`
  font-size: var(--text-5xl);
  font-weight: 700;
  margin-bottom: 1.5rem;
  color: var(--white);
  text-shadow: 0 3px 10px rgba(0, 0, 0, 0.6);
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: var(--text-4xl);
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: var(--text-lg);
  margin-bottom: 3rem;
  color: var(--grey);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: var(--text-base);
  }
`;

const Hero = () => {
  // Define the IDs here or pass as props if they might change
  const glfCuid = "d1ca8277-0183-41a8-92ea-0021fb1c65a1";
  const glfRuid = "4673b41b-2e2e-4758-8223-63f883a930bc";
  return (
    <HeroContainer id="hero">
      <HeroBackground>
        <img src={process.env.PUBLIC_URL + '/hero-bg.jpg'} alt="Delicious kebab background" />
      </HeroBackground>
      
      <HeroContent
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, delay: 0.3, ease: 'easeOut' }}
      >
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
        >
          Център Кебап - Отпусни сетивата с всяка хапка!
        </HeroTitle>
        
        <HeroSubtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
        >
          Разгърни апетита си и позволи на вкусовете да те завладеят в неповторимо пътешествие към кулинарно удовлетворение.
        </HeroSubtitle>
        
        <span
          className="glf-button"
          data-glf-cuid="d1ca8277-0183-41a8-92ea-0021fb1c65a1"
          data-glf-ruid="4673b41b-2e2e-4758-8223-63f883a930bc"
          style={{
            display: 'inline-block',
            background: 'var(--orange-red)',
            color: 'white',
            padding: '0.8rem 2rem',
            borderRadius: '4px',
            fontWeight: 600,
            fontSize: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.8px',
            cursor: 'pointer',
            boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
            border: 'none',
            textAlign: 'center',
            marginTop: '2rem'
          }}
        >
          Поръчай сега
        </span>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
