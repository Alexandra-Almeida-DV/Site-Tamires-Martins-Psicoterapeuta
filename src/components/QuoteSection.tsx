import React from 'react';
import { Box, Typography, Icon } from '@mui/material';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const QuoteSection: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        backgroundColor: '#3D5361',
        maxWidth: '100%',
        margin: '0 auto',
        marginTop: '2rem',
      }}
    >

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.9 }}
      >
        <Icon sx={{ fontSize: 40, color: '#D6B7B5' }}>
          <FaQuoteLeft />
        </Icon>
      </motion.div>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', sm: '1.25rem' },
            color: '#D6B7B5',
            textAlign: 'center',
            marginTop: '1rem',
          }}
        >
          "Dor compartilhada é dor amenizada."
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 'bold',
            color: '#D6B7B5',
            textAlign: 'center',
            marginTop: '1rem',
          }}
        >
          - Santo Agostinho
        </Typography>
      </motion.div>
    </Box>
  );
};

export default QuoteSection;
