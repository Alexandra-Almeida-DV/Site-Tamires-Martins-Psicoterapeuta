import {
  Box,
  Container,
  Typography,
  Grid,
  IconButton
} from '@mui/material';
import { Instagram, WhatsApp } from '@mui/icons-material';

const ContactSection: React.FC = () => {
  return (
    <Container
      id="contato"
      sx={{
        padding: '2rem',
        backgroundColor: '#F5F0ED',
        marginTop: '50px'
      }}
    >
      <Grid container spacing={4} alignItems="center">

        {/* COLUNA ESQUERDA */}
        <Grid item xs={12} md={6}>
          <Box textAlign="center" mb={4}>
            <Typography
              variant="h3"
              fontFamily='"Dancing Script", cursive'
              mb={2}
            >
              Contato
            </Typography>

            <Typography
              variant="h5"
              fontFamily='"Quicksand", sans-serif'
              mb={2}
            >
              Entre em contato
            </Typography>

            <Typography fontFamily='"Quicksand", sans-serif'>
              Para agendar uma consulta ou tirar dúvidas,
              entre em contato diretamente pelo WhatsApp
              ou Instagram.
            </Typography>
          </Box>
        </Grid>

        {/* COLUNA DIREITA – BOTÕES DE CONTATO */}
        <Grid item xs={12} md={6}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={3}
          >
            <Typography
              variant="h6"
              fontFamily='"Quicksand", sans-serif'
            >
              Fale comigo:
            </Typography>

            <Box display="flex" gap={4}>
              <IconButton
                component="a"
                href="https://www.instagram.com/tamiresmartins.psi"
                target="_blank"
                aria-label="Instagram"
              >
                <Instagram sx={{ color: '#3D5361', fontSize: 40 }} />
              </IconButton>

              <IconButton
                component="a"
                href="https://wa.me/5516997366306"
                target="_blank"
                aria-label="WhatsApp"
              >
                <WhatsApp sx={{ color: '#3D5361', fontSize: 40 }} />
              </IconButton>
            </Box>
          </Box>
        </Grid>

      </Grid>
    </Container>
  );
};

export default ContactSection;
