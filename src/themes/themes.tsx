import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
      primary: {
        main: '#587596',
        light: '#E8FOF9',
        dark: '#03AOC6',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#FCC9CD',
        light: '#FEEOE5',
        dark: '#F59D99',
        contrastText: '#ffffff',
      },
      background: {
        default: '#E8FOF9',
        paper: '#ffffff',
      },
      text: {
        primary: '#587596',
        secondary: '#F59D99',
        disabled: '#9e9e9e',
      },
    },
    typography: {
      fontFamily: [
        'Roboto', // Fonte principal
        'Open Sans', // Fonte secundária
        'Arial', // Fonte de fallback
        'sans-serif', // Fonte genérica de fallback
      ].join(','),
      h1: {
        fontFamily: 'Roboto',
        fontWeight: 700,
        fontSize: '2.5rem',
        lineHeight: 1.2,
      },
      h2: {
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontSize: '2rem',
        lineHeight: 1.3,
      },
      body1: {
        fontFamily: 'Open Sans',
        fontSize: '1rem',
        fontWeight: 400,
      },
      button: {
        fontFamily: 'Roboto',
        fontWeight: 500,
        textTransform: 'uppercase',
      },
    }
  });