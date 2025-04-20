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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  img {
    height: 70px;
    width: auto;
    display: block;
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

const FooterNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
  justify-content: center;
`;

const FooterNavLink = styled.a`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  transition: color 0.2s;
  &:hover {
    color: var(--orange-red);
  }
`;

const FooterColumns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  margin-bottom: 2rem;
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
        <FooterColumns>
          <FooterLogo>
            <img src={process.env.PUBLIC_URL + '/center-kebab-footer-logo.png'} alt="Center Kebab" />
          </FooterLogo>
          <FooterNav>
            <FooterNavLink href="#hero">Начало</FooterNavLink>
            <FooterNavLink href="#quality">Концепция</FooterNavLink>
            <FooterNavLink href="#about-us">За нас</FooterNavLink>
            <FooterNavLink href="#menu">Меню</FooterNavLink>
            <FooterNavLink href="#contact">Контакти</FooterNavLink>
          </FooterNav>
        </FooterColumns>
        <FooterText style={{textAlign: 'center', margin: '0 auto 2rem auto'}}>
          {footerDescription}
        </FooterText>
        <Copyright>
          Copyright © {currentYear} Център Кебап. Всички права запазени.
        </Copyright>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
