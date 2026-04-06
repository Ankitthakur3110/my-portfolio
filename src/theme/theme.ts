'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00D4FF',
      light: '#66E8FF',
      dark: '#0099BB',
    },
    secondary: {
      main: '#7C3AED',
      light: '#A78BFA',
    },
    background: {
      default: '#050A14',
      paper: '#0D1626',
    },
    text: {
      primary: '#E8F4FD',
      secondary: '#8BA5C0',
    },
    divider: 'rgba(0, 212, 255, 0.12)',
  },
  typography: {
    fontFamily: '"DM Sans", "Helvetica Neue", sans-serif',
    h1: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.02em',
    },
    h4: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 600,
    },
    h6: {
      fontFamily: '"Space Grotesk", sans-serif',
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.75,
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: 'smooth' },
        body: {
          background: '#050A14',
          scrollbarWidth: 'thin',
          scrollbarColor: '#00D4FF33 transparent',
          '&::-webkit-scrollbar': { width: '4px' },
          '&::-webkit-scrollbar-thumb': {
            background: '#00D4FF55',
            borderRadius: '4px',
          },
        },
        '::selection': {
          background: '#00D4FF33',
          color: '#00D4FF',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          letterSpacing: '0.02em',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"DM Mono", monospace',
          fontSize: '0.75rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          background: 'rgba(13, 22, 38, 0.8)',
          border: '1px solid rgba(0, 212, 255, 0.1)',
          backdropFilter: 'blur(12px)',
        },
      },
    },
  },
});

export default theme;
