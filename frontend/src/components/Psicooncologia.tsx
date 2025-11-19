import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import fundopsicooncologia from '../assets/images/fundopsicooncologia.png';
import Agendarsessão from './Agendarsessão';

const Psicooncologia: React.FC = () => {
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          controls.start('visible');
        }
      },
      { threshold: 0.5 }
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
    hidden: { opacity: 0, x: 100 }, // Efeito da esquerda para a direita
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  const textAnimation = {
    hidden: { opacity: 0, x: 100 }, // Efeito da esquerda para a direita
    visible: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 0.3 } },
  };

  const buttonAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.6 } },
  };

  return (
    <Box
      ref={sectionRef}
      id="psicooncologia"
      sx={{
        minHeight: { xs: '80vh', md: '80vh' },
        padding: '2rem 2rem',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Filtro escuro para aumentar contraste e transparência
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        textAlign: 'center',
        gap: '2.0rem', // Aumenta o espaçamento entre os elementos
        marginTop: { xs: '50px', md: '40px' },
        backgroundImage: `url(${fundopsicooncologia})`,
        backgroundSize: { xs: '100% 90%', md: 'conver' },
        backgroundPosition: { xs: 'center', md: 'center' },
        backgroundBlendMode: 'overlay',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Título com animação */}
      <motion.div initial="hidden" animate={isVisible ? "visible" : "hidden"} variants={titleAnimation}>
        <Typography
          variant="h3"
          color="#3D5361"
          fontFamily='"Dancing Script", cursive'
          sx={{ mb: '2rem' }} // Adiciona margem inferior
        >
          Psico-oncologia
        </Typography>
      </motion.div>

      {/* Texto com animação */}
      <motion.div initial="hidden" animate={controls} variants={textAnimation}>
        <Typography
          variant="h6"
          sx={{
            maxWidth: '600px',
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem', lg: '1.25rem' },
            fontFamily: '"Quicksand", sans-serif',
            color: '#3D5361',
            mb: '4rem', // Adiciona margem inferior maior para espaçamento do botão
          }}
        >
          A psico-oncologia é uma área que une a oncologia e a psicologia
              com o objetivo de aprimorar a assistência ao paciente e
              favorecer a atenção integral às suas necessidades
              biopsicossociais e espirituais. As ações da psico-oncologia
              visam a garantir três aspectos principais: a integralidade da
              assistência, a qualidade de vida, a dignidade da morte. O ideal
              é que a assistência seja oferecida em todas as fases do
              tratamento.

        </Typography>
      </motion.div>

      <motion.div initial="hidden" animate={controls} variants={buttonAnimation}>
        <Box sx={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <Agendarsessão />
        </Box>
      </motion.div>
    </Box>
  );
};

export default Psicooncologia;
