import React from 'react';
import { Box, Typography, Grid, Toolbar } from '@mui/material';
import cardpsi from '../assets/images/cardpsi.jpeg';

const Psicoterapia: React.FC = () => {
  return (
    <Box 
      sx={{
        padding: { xs: '2rem 1rem', md: '4rem 2rem' }, 
        backgroundColor: '#E7EFF9', 
        justifyContent: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '1rem',
        textAlign: 'center',
        gap: { xs: '2rem', md: '2.5rem' }, 
      }}
    >
      <Grid 
        container 
        spacing={{ xs: 4, md: 8 }}  
        sx={{ marginTop: { xs: '1rem', md: '0.5rem' } }}
      >
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: { xs: '1rem', md: '3rem' } }}>
            <Toolbar />
            <Typography 
              variant="h3" 
              sx={{ 
                marginTop: '0.5rem',
                color: '#587596',  
                fontWeight: 'lighter', 
                letterSpacing: '0.05em',
                fontFamily:'"Quicksand", sans-serif' 
              }}
            >
              Psicoterapia
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: '#587596', 
                lineHeight: 1.8,
                fontFamily: '"Noto Serif", serif' 
              }}
            >
              A psicoterapia é uma modalidade de cuidado em saúde mental realizada
              através do trabalho colaborativo entre o terapeuta e o paciente. Através dela você pode compartilhar suas angústias, dúvidas, dificuldades, problemas
              para que consiga lidar com suas demandas de forma saudável.
              Dentro de um espaço seguro, ético, acolhedor e sem julgamentos. Buscaremos juntos, estratégias para o enfrentamento de momentos de crise e dificuldades.
              Além disso você será convidado a explorar algo único, seu autoconhecimento.
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box sx={{ padding: { xs: '1rem', md: '3rem' } }}>
            <Toolbar />
            <Typography 
              variant="h3" 
              sx={{ 
                marginTop: '0.5rem',
                color: '#587596',
                fontWeight: 'lighter',
                letterSpacing: '0.05em',
                fontFamily:'"Quicksand", sans-serif',
              }}
            >
              Psico-oncologia
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                marginTop: '2rem',
                color: '#587596',
                lineHeight: 1.8,
                fontFamily: '"Noto Serif", serif'
              }}
            >
              A psico-oncologia é uma área que une a oncologia e a psicologia com o objetivo de aprimorar a assistência ao paciente e favorecer a atenção integral
              às suas necessidades biopsicossociais e espirituais. As ações da psico-oncologia visam a garantir três aspectos principais: a integralidade da assistência,
              a qualidade de vida, a dignidade da morte. O ideal é que a assistência seja oferecida em todas as fases do tratamento.
            </Typography>
          </Box>
        </Grid>
      </Grid>

      <Box 
        sx={{ 
          marginTop: '1rem', 
          width: '100%', 
          textAlign: 'center'
        }}
      >
        <img 
          src={cardpsi} 
          style={{ 
            maxWidth: '100%', 
            height: 'auto', 
            borderRadius: '15px',
            boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',  // Sombra mais pronunciada
            transition: 'transform 0.3s ease',  // Efeito de transição
          }}
          alt="Psicoterapia"
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}  // Efeito hover
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        />
      </Box>
    </Box>
  );
};

export default Psicoterapia;
