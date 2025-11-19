import React from 'react';
import { Box, Container, Typography, TextField, Button, Grid, IconButton } from '@mui/material';
import { Instagram, WhatsApp } from '@mui/icons-material';

const ContactSection: React.FC = () => {
  return (
    <Container 
    id="contato" 
    sx={{ padding: '2rem', backgroundColor: '#F5F0ED', marginTop: '50px'}}>
      <Grid container spacing={4}>
        
        {/* Coluna da Esquerda: Texto e Ícones de Redes Sociais */}
<Grid item xs={12} md={6}>
  <Box textAlign="center" mb={8}>
    <Typography variant="h3" gutterBottom fontFamily='"Dancing Script", cursive' mb={2}>
      Contato
    </Typography>
    <Typography variant="h5" gutterBottom fontFamily='"Quicksand", sans-serif' mb={1}>
      Entre em contato
    </Typography>
    <Typography variant="body1" mb={6} fontFamily='"Quicksand", sans-serif'>
      Fico muito grata que você tenha me procurado, espero que eu possa ajudar você!
    </Typography>
  </Box>

  <Box display="flex" justifyContent="center" gap={3} mb={6}>
    <IconButton
      component="a"
      href="https://www.instagram.com/tamiresmartins.psi?igsh=OXI3eDdnOHJicmVq"
      target="_blank"
      aria-label="Instagram"
    >
      <Instagram sx={{ color: '#3D5361' }} />
    </IconButton>
    <IconButton
      component="a"
      href="https://wa.me/5516997366306"
      target="_blank"
      aria-label="WhatsApp"
    >
      <WhatsApp sx={{ color: '#3D5361' }} />
    </IconButton>
  </Box>
</Grid>

        
        {/* Coluna da Direita: Formulário de Contato */}
        <Grid item xs={12} md={6}>
          <Box component="form" noValidate autoComplete="off" action="https://formsubmit.co/contato@tamiresmartinspsi.com.br"
            method="POST">
          <Typography variant="h6" fontFamily='"Quicksand", sans-serif'>
            Se preferir, preeencha o formulário e entrarei em contato com você:
        </Typography>

        <input type="hidden" name="_subject" value="Novo contato via formulário" />
        <input type="hidden" name="_next" value="https://tamiresmartinspsi.com.br/obrigado" />

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Nome"
                  placeholder="Nome"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Celular"
                  placeholder="(+00) 99999 - 9999"
                  variant="outlined"
                  type="tel"
                  inputProps={{ pattern: '[0-9()#&+*-=.]+' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  placeholder="Email"
                  variant="outlined"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Cidade"
                  placeholder="Cidade"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Motivo"
                  placeholder="Motivo"
                  variant="outlined"
                  multiline
                  rows={3}
                />
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" type="submit" fullWidth>
                  Enviar
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactSection;
