import React from 'react';
import { Grid, Box, Link } from '@mui/material';
import { instagramPosts } from '../data/posts';
import { motion } from 'framer-motion';

const InstagramSection: React.FC = () => {
  return (
    <Box
      id="instagram-section"
      sx={{
        padding: '2rem',
        backgroundColor: '#F5F0ED',
      }}
    >
      <Grid container spacing={5} justifyContent="center">
        {instagramPosts.map((post) => {
          const animationVariant = {
            hidden: { opacity: 100, y: 0 }, // Alterado para y para movimentar de baixo para cima
            visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
          };

          return (
            <Grid item xs={12} sm={12} md={4} key={post.id}>
              <Link href={post.link} target="_blank" rel="noopener noreferrer">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={animationVariant}
                >
                  <Box
                    component="img"
                    src={post.imageUrl}
                    alt={`Instagram post ${post.id}`} 
                    sx={{
                      width: '100%',
                      height: '250px', // Definindo altura fixa
                      objectFit: 'cover', // Para manter a proporção da imagem
                      borderRadius: '5px',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  />
                </motion.div>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default InstagramSection;
