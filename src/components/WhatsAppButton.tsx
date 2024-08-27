import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(() => ({
  backgroundColor: '#587596', // Cor do WhatsApp
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  padding: '10px 20px',
  borderRadius: '5px',
  textTransform: 'none',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#FCC9CD',
  }
}));

const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    window.open('https://wa.me/5516997366306', '_blank');
  };

  return (
    <StyledButton onClick={handleClick} startIcon={<WhatsAppIcon />}>
      Fale comigo!
    </StyledButton>
  );
};

export default WhatsAppButton;