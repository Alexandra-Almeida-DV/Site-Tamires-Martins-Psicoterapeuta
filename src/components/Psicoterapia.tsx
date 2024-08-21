import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import cardpsi from '../assets/images/cardpsi.jpeg';

const Psicoterapia: React.FC = () => {
  return (
    <Box 
      sx={{
        padding: { xs: '2rem 1rem', md: '4rem 2rem' }, // Ajuste de padding para xs e md
        backgroundColor: '#E7EFF9',
        justifyContent: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: { xs: '1rem', md: '1.5rem' }, // Ajuste de gap para xs e md
      }}
    >
      <Grid 
        container 
        spacing={{ xs: 2, md: 6 }}  // Ajuste de espaçamento para xs e md
        sx={{ marginTop: { xs: '1rem', md: '2rem' } }}
      >
        <Grid item xs={12} md={6}> {/* Tamanho ajustado para xs e md */}
          <Box 
            sx={{ 
              padding: { xs: '1rem', md: '3rem' }, 
              textAlign: { xs: 'center', md: 'center' } // Alinhamento do texto para xs e md
            }}
          >
            <Typography variant="h3" sx={{ marginBottom: '1rem' }}> {/* Ajuste de marginBottom */}
              Psicoterapia
            </Typography>
            <Typography variant="h6">
              A psicoterapia é uma modalidade de cuidado em saúde mental realizada
              através do trabalho colaborativo entre o terapeuta e o paciente. Através dela você pode compartilhar suas angústias, dúvidas, dificuldades, problemas
              para que consiga lidar com suas demandas de forma saudável.
              Dentro de um espaço seguro, ético, acolhedor e sem julgamentos. Buscaremos juntos, estratégias para o enfrentamento de momentos de crise e dificuldades.
              Além disso você será convidado a explorar algo único, seu autoconhecimento.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}> {/* Tamanho ajustado para xs e md */}
          <Box 
            sx={{ 
              padding: { xs: '1rem', md: '3rem' }, 
              textAlign: { xs: 'center', md: 'center' } // Alinhamento do texto para xs e md
            }}
          >
            <Typography variant="h3" sx={{ marginBottom: '1rem' }}> {/* Ajuste de marginBottom */}
              Psico-oncologia
            </Typography>
            <Typography variant="h6">
              A psico-oncologia é uma área que une a oncologia e a psicologia com o objetivo de aprimorar a assistência ao paciente e favorecer a atenção integral
              às suas necessidades biopsicossociais e espirituais. As ações da psico-oncologia visam a garantir três aspectos principais: a integralidade da assistência,
              a qualidade de vida, a dignidade da morte. O ideal é que a assistência seja oferecida em todas as fases do tratamento.
            </Typography>
          </Box>
        </Grid> 
      </Grid>
      
      {/* Adicionando a imagem ao final da seção */}
      <Box 
        sx={{ 
          marginTop: '3rem', 
          width: '80%', 
          textAlign: 'center' 
        }}
      >
        <img 
          src={cardpsi} 
          style={{ 
            maxWidth: '80%', 
            height: 'auto', 
            borderRadius: '15px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' 
          }} 
          alt="Psicoterapia"
        />
      </Box>
    </Box>
  );
};

export default Psicoterapia;
