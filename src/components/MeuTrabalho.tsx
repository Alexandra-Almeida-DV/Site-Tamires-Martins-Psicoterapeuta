import React from 'react';
import { Box, Typography } from '@mui/material';
import WhatsAppButtonAgende from '../components/WhatsAppButtonAgende';

const MeuTrabalho: React.FC = () => {
  return (
    <Box
      sx={{
        minHeight: '50vh',
        padding: '2rem',
        backgroundColor: '#E7EFF9',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: '1.5rem',
      }}
    >
      <Typography variant="h3" sx={{ marginBottom: '1.5rem' }}>
        Meu Trabalho
      </Typography>
      <Typography
        variant="h6"
        sx={{
          maxWidth: '600px', // Limita a largura máxima do texto
          fontSize: {
            xs: '0.875rem', // Tamanho da fonte para telas extra pequenas
            sm: '1rem',     // Tamanho da fonte para telas pequenas
            md: '1.125rem', // Tamanho da fonte para telas médias
            lg: '1.25rem',  // Tamanho da fonte para telas grandes
          },
          marginTop: '0.5rem',
        }}
      >
        As sessões são realizadas semanalmente de forma online. Esta
        modalidade permite que você tenha acesso à psicoterapia onde estiver,
        de modo flexível. As sessões têm duração de 50 minutos e são realizadas
        através de vídeo chamadas pela plataforma Google Meet. Para saber mais
        sobre a psicoterapia, valores, agendamento, entre em contato através do
        WhatsApp ou e-mail. Lá conversaremos melhor e poderei elucidar suas dúvidas.
      </Typography>
      <Box sx={{ textAlign: 'center', marginTop: '2rem' }}>
        <WhatsAppButtonAgende />
      </Box>
    </Box>
  );
};

export default MeuTrabalho;
