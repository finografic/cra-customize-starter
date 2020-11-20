import { css } from '@emotion/core';
import { colors } from './colors';

const fontSize = 16;

// LAYOUT VARIABLES
export const layout = {
  fontSize, // px
  padding: '15px',
  borderRadius: '5px',
  header: {
    height: '80px',
  },
  footer: {
    height: '40px',
  },
  sidebar: {
    width: '180px',
  },
};

// BREAKPOINTS (px)
export const breakpointsPX = {
  xs: 0,
  sm: 768,
  md: 1024,
  lg: 1200,
  xl: 1600,
};

// BREAKPOINTS (em)
export const breakpoints = {
  xs: 0,
  sm: Math.round(breakpointsPX.sm / fontSize),
  md: Math.round(breakpointsPX.md / fontSize),
  lg: Math.round(breakpointsPX.lg / fontSize),
  xl: Math.round(breakpointsPX.xl / fontSize),
};

// MEDIA QUERIES
export const media = (query) => {
  const breakpointsArr = Object.keys(breakpoints).map((key) => [key, breakpoints[key]]);
  const [result] = breakpointsArr.reduce((acc, [name, size]) => {
    if (query === name) return [...acc, `@media (min-width: ${size}em)`];
    return acc;
  }, []);
  return result;
};

// STYLED COMPONENTS THEME
// USED BY react-styled-flexboxgrid
export const theme = {
  flexboxgrid: {
    'gridSize': 12,
    'gutterWidth': 1, // rem
    'outerMargin': 2, // rem
    'mediaQuery': 'only screen',
    'container': {
      // UNITS: 'rem'
      'sm': Math.round(breakpoints.sm * 0.96),
      'md': Math.round(breakpoints.md * 0.95),
      'lg': Math.round(breakpoints.lg * 1.01),
      // 'xl': NOT USED BY react-styled-flexboxgrid
    },
    'breakpoints': {
      ...breakpoints,
    },
  },
};

// LAYOUT STYLES
export const cssLayout = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    overflow-x: hidden;
  }

  #app {
    display: flex;
    min-height: 100%;
    background: ${colors.greyXLight};
  }

  main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 100%;
    background: ${colors.greyXLight};
    header + section {
      flex-grow: 1;
      margin-top: ${layout.header.height};
      min-height: calc(100vh - ${layout.header.height} - ${layout.footer.height} - ${layout.padding});
    }
  }

  aside {
    padding: ${layout.padding};
    background: white;
    z-index: 0;
  }

  section {
    padding: calc(${layout.padding} * 2) calc(${layout.padding} * 1.5);
  }

  article {
    padding: ${layout.padding};
  }

  header,
  footer {
    padding: ${layout.padding} calc(${layout.padding} * 1.5);
    z-index: 0;
    div > div > div {
      display: flex;
      align-items: center;
    }
  }

  .sidebar,
  .header,
  .footer {
    background: white;
    border-color: ${colors.greyMed};
    border-style: solid;
    border-width: 0px;
  }

  .sidebar {
    border-right-width: 1px;
    z-index: 20;
    header {
      min-height: ${layout.header.height};
      margin-bottom: 0;
    }
  }

  .header {
    width: 100%;
    position: fixed;
    z-index: 20;
    border-bottom-width: 1px;
    backdrop-filter: saturate(180%) blur(20px);
    background-color: rgba(255, 255, 255, 0.85);
    transition: background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
    transition-property: background-color, backdrop-filter, -webkit-backdrop-filter;
    border-bottom-width: 1px;
    & > div {
      min-height: calc(${layout.header.height} - 2 * (${layout.padding}));
    }
  }

  .footer {
    min-height: ${layout.footer.height};
    border-top-width: 1px;
    bottom: 0px;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    color: ${colors.textLight};
  }
`;
