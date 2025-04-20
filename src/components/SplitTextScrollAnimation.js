import React, { useRef } from 'react';
import styled from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';

const SectionWrapper = styled.div`
  position: relative; // Needed for scroll triggering context if not full viewport height
  padding: 2rem 0; // Further reduced padding
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden; // Hide letters moving outside bounds
`;

const TextRow = styled(motion.div)`
  display: flex;
  gap: 1rem; // Adjust gap between letters
  line-height: 1;
  will-change: transform; // Optimize row transform
`;

// Base styles for letters
const BaseLetterSpan = styled(motion.span)`
  display: inline-block;
  font-size: 8rem; // Adjust size as needed
  font-weight: 800;
  font-family: 'Staatliches', cursive; // Set new font
  text-transform: uppercase;
  user-select: none;
  will-change: transform; // Optimize letter transform
  // Common gradient text properties
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  @media (max-width: 768px) {
    font-size: 4rem;
    gap: 0.5rem;
  }
   @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

// Specific styled component for CENTER letters
const CenterLetterSpan = styled(BaseLetterSpan)`
  background: linear-gradient(45deg, #b4c0fa, #d8dcfd); // Base color to lighter version
  // Re-apply for specificity if needed, sometimes required with extension
  background-clip: text;
  -webkit-background-clip: text;
`;

// Specific styled component for KEBAP letters
const KebapLetterSpan = styled(BaseLetterSpan)`
  background: linear-gradient(45deg, #a0e3fd, #c0effd); // Base color to lighter version
   // Re-apply for specificity
  background-clip: text;
  -webkit-background-clip: text;
`;

const SplitTextScrollAnimation = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'center center'], // Start when top hits bottom, end when center hits center
  });

  const textCenter = 'CENTER'.split('');
  const textKebap = 'KEBAP'.split('');

  // Call useTransform directly for each letter
  const centerTransformY = useTransform(scrollYProgress, [0, 1], [150, 0]);
  const kebapTransformY = useTransform(scrollYProgress, [0, 1], [-150, 0]);

  return (
    <SectionWrapper ref={targetRef}>
      <TextRow>
        {textCenter.map((letter, i) => (
          // Use the specific component for CENTER
          <CenterLetterSpan key={`center-${i}`} style={{ y: centerTransformY }}>
            {letter}
          </CenterLetterSpan>
        ))}
      </TextRow>
      <TextRow>
        {textKebap.map((letter, i) => (
          // Use the specific component for KEBAP
          <KebapLetterSpan key={`kebap-${i}`} style={{ y: kebapTransformY }}>
            {letter}
          </KebapLetterSpan>
        ))}
      </TextRow>
    </SectionWrapper>
  );
};

export default SplitTextScrollAnimation; 