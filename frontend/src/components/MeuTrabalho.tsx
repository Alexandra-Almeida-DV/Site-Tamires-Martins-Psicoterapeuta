import React, { useRef, useEffect } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import WhatsAppButton from '../components/WhatsAppButton';
import meutrabalho from '../assets/images/meutrabalho.jpg';
import fundomeutrabalho from '../assets/images/fundomeutrabalho.png';

const MeuTrabalho: React.FC = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          controls.start('visible');
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  const titleAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9 } },
  };

  const textAnimation = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 0.3 } },
  };

  const buttonAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.6 } },
  };

  const imageAnimation = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, scale: 1, transition: { duration: 3, delay: 0.3 } },
  };

  return (
    <Box
      ref={sectionRef}
      id="meu-trabalho"
      sx={{
        minHeight: { xs: '80vh', md: '80vh' },
        padding: '2rem',
        backgroundColor: 'rgba(245, 240, 237, 0.8)',
        backgroundImage: `url(${fundomeutrabalho})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'left',
        gap: '2.5rem',
        marginTop: { xs: '30px', md: '40px' },
      }}
    >
      <motion.div initial="hidden" animate={controls} variants={titleAnimation}>
        <Typography
          variant="h3"
          color="#3D5361"
          fontFamily='"Dancing Script", cursive'
          sx={{ mb: '2rem' }}
        >
          Meu Trabalho
        </Typography>
      </motion.div>

      <Grid container spacing={10} direction={{ xs: 'column', md: 'row' }}>
        {/* Coluna para o texto */}
        <Grid item xs={12} md={6}>
          <motion.div initial="hidden" animate={controls} variants={textAnimation}>
            <Typography
              variant="h6"
              sx={{
                maxWidth: '600px',
                fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem' },
                fontFamily: '"Quicksand", sans-serif',
                color: '#3D5361',
                mb: '4rem',
              }}
            >
              As sessões são realizadas semanalmente de forma online e presencial. Estas
              modalidades permitem que você tenha acesso à psicoterapia onde estiver,
              de modo flexível. As sessões têm duração de 50 minutos e são realizadas
              através de vídeo chamadas pela plataforma Google Meet. Para saber mais
              sobre a psicoterapia, valores, agendamento, entre em contato através do
              WhatsApp ou e-mail. Lá conversaremos melhor e poderei elucidar suas dúvidas.
            </Typography>
          </motion.div>
        </Grid>

        {/* Coluna para a imagem com efeito de surgimento */}
        <Grid item xs={12} md={6}>
          <motion.img
            src={meutrabalho}
            alt="Descrição da imagem"
            initial="hidden"
            animate={controls}
            variants={imageAnimation}
            style={{
              width: '60%',
              height: 'auto',
              borderRadius: '8px',
            }}
          />
        </Grid>
      </Grid>

      <motion.div initial="hidden" animate={controls} variants={buttonAnimation}>
        <Box sx={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <WhatsAppButton />
        </Box>
      </motion.div>
    </Box>
  );
};

export default MeuTrabalho;
