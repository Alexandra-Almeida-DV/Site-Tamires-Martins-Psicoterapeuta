import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3D5361', // cor principal
      light: '#D4C6BD', // cor para estado "claro"
      dark: '#93AOC6', // cor para estado "escuro"
      contrastText: '#ffffff', // cor do texto que contrasta com a cor principal
    },
    secondary: {
      main: '#D6B7B5', // cor secundária
      light: '#FCC9CD',
      dark: '#DA7573',
      contrastText: '#000000',
    },
    background: {
      default: '#F5F0ED', // cor de fundo padrão da aplicação
      paper: '#E7EFF9', // cor de fundo para elementos tipo "papel"
    },
    text: {
      primary: '#3D5361', // cor primária do texto
      secondary: '#D6B7B5', // cor secundária do texto
      disabled: '#9e9e9e', // cor do texto para estados desabilitados
    },
  },

  typography: {
          fontFamily: 'Roboto, Arial, sans-serif',
        },
      });

export default theme;
