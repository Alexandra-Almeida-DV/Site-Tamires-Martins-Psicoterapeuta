import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1rem',
        backgroundColor: '#D6B7B5',
        marginTop: '3rem',
        width: '100%',
        '&:hover': {
    backgroundColor: '#93AOC6',
  }
      }}
    >
      {/* Seção de ícones de redes sociais */}
      <Box sx={{ display: 'flex', gap: '1rem', marginBottom: '1rem'
   }}>
        <IconButton
          component="a"
          href="https://wa.me/5516997366306"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          color="primary"
        >
          <WhatsAppIcon fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.instagram.com/tamiresmartins.psi?igsh=OXI3eDdnOHJicmVq"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          color="primary"
        >
          <InstagramIcon fontSize="large" />
        </IconButton>
        

        <IconButton
          component="a"
          href="mailto:contato@tamiresmartinspsi.com.br?subject=Consulta&body=Olá, gostaria de agendar uma consulta."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="E-mail"
          color="primary"
        >
          < AlternateEmailIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* Seção de copyright */}
      <Typography variant="body1" color="#3D5361" fontFamily= '"Quicksand", sans-serif'>
        <CopyrightIcon sx={{ fontSize: 'inherit', verticalAlign: 'middle' }} /> Tamires Martins 2024
      </Typography>

      <Typography variant="body2" color="#3D5361" fontFamily= '"Quicksand", sans-serif'>
        Desenvolvido por: Alexandra Almeida dev.
       </Typography> 
    </Box>
  );
};

export default Footer;
