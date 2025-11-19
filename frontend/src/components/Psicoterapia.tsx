import React, { useRef, useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import fundopsicoterapia from '../assets/images/fundopsicoterapia.jpg';

const Psicoterapia: React.FC = () => {
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
    hidden: { opacity: 0, y: -100 }, // Efeito da esquerda para a direita
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const textAnimation = {
    hidden: { opacity: 0, y: -100 }, // Efeito da esquerda para a direita
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.3 } },
  };


  return (
    <Box
      ref={sectionRef}
      id="psicoterapia"
      sx={{
        minHeight: { xs: '70vh', md: '80vh' },
        padding: '2rem 2rem',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Filtro escuro para aumentar contraste e transparência
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        textAlign: 'start',
        gap: '2.5rem', // Aumenta o espaçamento entre os elementos
        marginTop: { xs: '50px', md: '40px' },
        backgroundImage: `url(${fundopsicoterapia})`,
        backgroundSize: { xs: '92% 80%', md: 'contain' },
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
          Psicoterapia
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
           A psicoterapia é uma modalidade de cuidado em saúde mental
              realizada através do trabalho colaborativo entre o terapeuta e o
              paciente. Através dela você pode compartilhar suas angústias,
              dúvidas, dificuldades, problemas para que consiga lidar com suas
              demandas de forma saudável. Dentro de um espaço seguro, ético,
              acolhedor e sem julgamentos. Buscaremos juntos, estratégias para
              o enfrentamento de momentos de crise e dificuldades. Além disso,
              você será convidado a explorar algo único, seu autoconhecimento.


        </Typography>
      </motion.div>

    </Box>
  );
};

export default Psicoterapia;
