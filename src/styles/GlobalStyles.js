import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    // Sampled/Estimated Colors from Luks Kebab
    --black: #111111; // Very dark grey/off-black background
    --orange-red: #ff3d00; // Primary button/accent color (estimate)
    --orange-red-darker: #e63700; // Hover state
    --pink: #ff6b81; // Accent pink (estimate)
    --yellow: #feca57; // Accent yellow (estimate)
    --blue: #48dbfb; // Accent blue (estimate)
    --purple: #9b59b6; // Accent purple (estimate)

    --white: #ffffff;
    --grey: #cccccc; // Lighter grey for text
    --light-grey-bg: #1e1e1e; // Slightly lighter bg for cards/sections if needed

    // Fonts (Keep Montserrat, consider adding a bolder display font if needed)
    --font-primary: 'Montserrat', sans-serif;
    --font-secondary: 'Dancing Script', cursive; // Keep for specific decorative text

    // Font sizes (Might need adjustment per component)
    --text-base: 16px;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;
    --text-2xl: 1.5rem;
    --text-3xl: 1.875rem;
    --text-4xl: 2.25rem;
    --text-5xl: 3rem;
  }

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: var(--font-primary);
    background-color: var(--black);
    color: var(--white);
    overflow-x: hidden;
    line-height: 1.6;
    font-size: var(--text-base);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  // Base Heading Styles (can be overridden in components)
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700; // Default bold
    line-height: 1.3; // Adjusted line height
    margin-bottom: 1rem;
    color: var(--white); // Default white headings
  }

  h1 { font-size: var(--text-4xl); }
  h2 { font-size: var(--text-3xl); }
  h3 { font-size: var(--text-2xl); }
  h4 { font-size: var(--text-xl); }

  @media (max-width: 768px) {
    h1 { font-size: var(--text-3xl); }
    h2 { font-size: var(--text-2xl); }
    h3 { font-size: var(--text-xl); }
    h4 { font-size: var(--text-lg); }
  }

  p {
    margin-bottom: 1rem;
    color: var(--grey);
  }

  // Use more specific container for full-width sections if needed
  .container {
    max-width: 1140px; // Standard container width
    margin: 0 auto;
    padding: 0 15px; // Standard padding (closer to Bootstrap)
    width: 100%;
  }

  .section {
    padding: 6rem 0; // Increased padding for sections

    @media (max-width: 768px) {
      padding: 4rem 0;
    }
  }

  /* Helper Classes */
  .text-center {
    text-align: center;
  }

  .text-primary {
    color: var(--orange-red);
  }

  // Add more helpers if needed

`;

export default GlobalStyles;
