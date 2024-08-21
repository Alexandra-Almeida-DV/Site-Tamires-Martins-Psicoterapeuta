import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Fab } from '@mui/material';
import { styled } from '@mui/material/styles';

const FloatButton = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#587596', // Cor do WhatsApp
  color: '#fff',
  '&:hover': {
    backgroundColor: '#93AOC6', // Cor ao passar o mouse
  },
}));

const WhatsAppFloatButton: React.FC = () => {
  const handleClick = () => {
    window.open('https://wa.me/5516997366306', '_blank');
  };

  return (
    <FloatButton onClick={handleClick} aria-label="WhatsApp">
      <WhatsAppIcon />
    </FloatButton>
  );
};

export default WhatsAppFloatButton;
