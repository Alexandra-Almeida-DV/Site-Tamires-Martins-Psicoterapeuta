import React from 'react';
import { Button } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '5516997366306'; 
  const message = 'Olá, gostaria de agendar uma consulta.'; 
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      variant="contained"
      color="success"
      startIcon={<WhatsAppIcon />}
      href={whatsappLink}
      target="_blank"
      sx={{ 
        backgroundColor: '#587596', 
        '&:hover': { backgroundColor: '#587596' },
        fontWeight: 'bold'
      }}
    >
      Agende sua consulta!
    </Button>
  );
};

export default WhatsAppButton;
