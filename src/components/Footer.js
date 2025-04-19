import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  padding: 5rem 0 2rem;
  background-color: var(--black);
  border-top: 1px solid var(--light-grey-bg);
`;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`;

const FooterColumn = styled(motion.div)`
  /* Styling for the remaining column */
`;

const FooterLogo = styled.div`
  margin-bottom: 1.5rem;
  img {
    height: 45px;
    /* filter: brightness(0) invert(1); */
  }
`;

const FooterText = styled.p`
  color: var(--grey);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 0;
  max-width: 400px;
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid var(--light-grey-bg);
  color: var(--grey);
  font-size: 0.8rem;
  opacity: 0.7;
`;

const Footer = () => {
  const footerDescription = "Опитайте най-добрите вкусове с нас в Център Кебап и разгледайте нашето разнообразие от ястия, съчетани с любов и страст към кулинарното изкуство.";
  const currentYear = new Date().getFullYear();

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: 'easeOut'
      }
    })
  };

  return (
    <FooterContainer>
      <Container className="container">
        <FooterContent>
          <FooterColumn custom={0} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={variants}>
            <FooterLogo>
              <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Център Кебап" />
            </FooterLogo>
            <FooterText>
              {footerDescription}
            </FooterText>
          </FooterColumn>
        </FooterContent>

        <Copyright>
          Copyright © {currentYear} Център Кебап. Всички права запазени.
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
