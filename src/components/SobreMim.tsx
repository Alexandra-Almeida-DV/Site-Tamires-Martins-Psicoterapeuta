import React from 'react';
import { Box, Typography } from '@mui/material';
import WhatsAppButton from '../components/WhatsAppButton';

const SobreMim: React.FC = () => {
  return (
    <Box
      sx={{
        height: '50vh',
        padding: '2rem 2rem',
        backgroundColor: '#E7EFF9',
        justifyContent: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '1.5rem', 
        marginTop: { xs: '-150px', md: '40px' } 
      }}
    >
      <Typography variant="h3" color="#587596" fontFamily='"Quicksand", sans-serif' marginTop= '0rem'>
        Sobre Mim
      </Typography>
      <Typography
        variant="h6"
        sx={{
          maxWidth: '600px',
          fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem' },
          marginTop: '0rem',
          fontFamily: '"Noto Serif", serif' 
        }}
      >
        Olá, meu nome é Tamires, sou psicóloga clínica, formada pela Universidade de Araraquara (UNIARA). 
        Atuo pela abordagem psicanalítica e atualmente sou pós-graduanda em psico-oncologia.
        Realizo atendimentos online a brasileiros, maiores de 18 anos e idosos, que residem no Brasil ou no exterior.
        Durante os atendimentos, prezo pelo acolhimento, escuta ativa e sigilo, com foco no atendimento de qualidade aos 
        meus pacientes. Para isso, estou sempre em busca de atualização nos temas em psicologia.
      </Typography>
      <Box sx={{ textAlign: 'center', marginTop: '1rem' }}>
      <WhatsAppButton />
      </Box>
    </Box>
  );
};

export default SobreMim;
