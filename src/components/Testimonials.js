import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import FoodIconsBackground from './FoodIconsBackground';

// Container for the whole section
const TestimonialsContainer = styled.section`
  position: relative;
  padding: 6rem 0;
`;

// Global container for centering content
const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
  position: relative;
  z-index: 2;
`;

// Wrapper to center the title
const TitleWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 4rem; // Increased margin
`;

// Title styled like other sections
const TestimonialsTitle = styled.h2`
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
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  @media (max-width: 480px) {
    font-size: 2rem;
    letter-spacing: 2px;
  }
`;

// Grid for testimonial cards
const TestimonialsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

// Individual testimonial card
const TestimonialCard = styled(motion.div)`
  background-color: rgba(20, 20, 20, 0.65);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// Quote text
const TestimonialText = styled.p`
  color: var(--white);
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-style: italic;
  position: relative;
  padding-left: 1.5rem;

  &::before {
    content: '“'; // Opening quote
    position: absolute;
    left: -5px;
    top: -10px;
    font-size: 3rem;
    color: var(--orange);
    opacity: 0.4;
    line-height: 1;
  }
`;

// Author name
const TestimonialAuthor = styled.p`
  font-weight: var(--fw-semibold);
  color: var(--white);
  font-size: 1rem;
  text-align: right;
  margin: 0;
`;

// --- Animation Variants --- //
const sectionVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' }
  }
};

const gridVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3 // Delay after title animation
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};

// --- Sample Data --- //
const testimonialsData = [
  {
    id: 1,
    quote: "Най-добрият дюнер в града! Винаги пресен, сочен и невероятно вкусен. Обслужването също е на ниво.",
    author: "Иван Петров"
  },
  {
    id: 2,
    quote: "Редовен клиент съм от години. Качеството никога не ме е разочаровало. Препоръчвам дюнер бокса - перфектен за обяд в движение!",
    author: "Мария Георгиева"
  },
  {
    id: 3,
    quote: "Много чисто и подредено място с любезен персонал. Храната е уникална, особено лавашът. Цените са супер.",
    author: "Георги Димитров"
  }
];

const Testimonials = () => {
  return (
    <TestimonialsContainer 
      id="testimonials" 
      className="section"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <FoodIconsBackground />
      <Container>
        <TitleWrapper
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <TestimonialsTitle>Отзиви от клиенти</TestimonialsTitle>
        </TitleWrapper>

        <TestimonialsGrid
          variants={gridVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // Trigger slightly earlier for grid
        >
          {testimonialsData.map(testimonial => (
            <TestimonialCard key={testimonial.id} variants={cardVariant}>
              <TestimonialText>{testimonial.quote}</TestimonialText>
              <TestimonialAuthor>- {testimonial.author}</TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </Container>
    </TestimonialsContainer>
  );
};

export default Testimonials; 