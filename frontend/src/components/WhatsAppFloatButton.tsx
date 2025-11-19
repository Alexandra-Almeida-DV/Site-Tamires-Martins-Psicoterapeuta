import React from 'react';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Fab } from '@mui/material';
import { styled } from '@mui/material/styles';

const FloatButton = styled(Fab)(() => ({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#3D5361', 
  color: '#fff',
  '&:hover': {
    backgroundColor: '#F59D99',
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
