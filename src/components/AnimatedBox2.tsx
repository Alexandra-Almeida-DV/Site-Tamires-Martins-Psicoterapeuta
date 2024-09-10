import React from 'react';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import  AvatarTm from '../assets/images/AvatarTm.jpeg';

const StyledImg = styled('img')(({ theme }) => ({
    width: '70%',
    borderRadius: '50%',
    border: '3px solid #FCC9CD',
    marginTop: '150px', 
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: '100%', 
    display: 'block', 
    [theme.breakpoints.down('sm')]: {
      width: '90%',
      marginTop: '70px',
    },
  }));

const AnimatedBox2 = styled(Box)`
  opacity: 0;
  transform: translateX(-100%);
  animation: slideIn 1s forwards;

  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateX(0); 
    }
  }

  @media (min-width: 960px) {
    transform: translateX(50vw); 
    animation: slideInMd 0.5s forwards; 
    @keyframes slideInMd {
      to {
        opacity: 1;
        transform: translateX(0); 
      }
    }
  }
`;

const MyComponent: React.FC = () => {
  return (
    <AnimatedBox2>
      <Box position="relative" textAlign="center">
        <StyledImg src={AvatarTm} alt="Avatar" />
      </Box>
    </AnimatedBox2>
  );
};

export default MyComponent;