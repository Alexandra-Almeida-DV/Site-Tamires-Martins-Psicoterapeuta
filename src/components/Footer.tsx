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
        backgroundColor: '#FCC9CD',
        marginTop: '2rem',
        width: '100%',
      }}
    >
      {/* Seção de ícones de redes sociais */}
      <Box sx={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
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
          href="https://wa.me/5516997366306"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          color="primary"
        >
          <InstagramIcon fontSize="large" />
        </IconButton>
        

        <IconButton
          component="a"
          href="'http://mailto:contato@tamiresmartinspsi.com.br'"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          color="primary"
        >
          < AlternateEmailIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* Seção de copyright */}
      <Typography variant="body2" color="textprimary">
        <CopyrightIcon sx={{ fontSize: 'inherit', verticalAlign: 'middle' }} /> Tamires Martins 2024
      </Typography>
    </Box>
  );
};

export default Footer;
