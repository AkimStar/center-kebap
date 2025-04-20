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
  font-family: 'Montserrat', sans-serif;
  font-size: var(--text-5xl);
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  background: linear-gradient(45deg, var(--purple), var(--blue), var(--white));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 2px 4px 18px rgba(0,0,0,0.45);
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: var(--text-4xl);
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-family: 'Montserrat', sans-serif;
  font-size: var(--text-lg);
  margin-bottom: 3rem;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  background: linear-gradient(45deg, var(--pink), var(--yellow), var(--white));
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  text-shadow: 2px 4px 14px rgba(0,0,0,0.45);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
  font-weight: 800;
  @media (max-width: 768px) {
    font-size: var(--text-base);
  }
`;

const OrderButton = styled.span`
  display: inline-block;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  padding: 0.8rem 1.7rem;
  border-radius: 4px;
  background: #ff3d00;
  color: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  border: none;
  text-align: center;
  margin-top: 2rem;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  &:hover {
    background: var(--yellow);
    color: var(--black);
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
        <OrderButton
          className="glf-button"
          data-glf-cuid="d1ca8277-0183-41a8-92ea-0021fb1c65a1"
          data-glf-ruid="4673b41b-2e2e-4758-8223-63f883a930bc"
        >
          Поръчай сега
        </OrderButton>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
