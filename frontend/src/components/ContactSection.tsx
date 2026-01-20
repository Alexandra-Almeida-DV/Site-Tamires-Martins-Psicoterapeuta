import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  IconButton
} from '@mui/material';
import { Instagram, WhatsApp } from '@mui/icons-material';
import { enviarEmail } from '../services/api';

const ContactSection: React.FC = () => {
  // 🔹 ESTADOS
  const [nome, setNome] = useState('');
  const [celular, setCelular] = useState('');
  const [cidade, setCidade] = useState('');
  const [email, setEmail] = useState('');
  const [motivo, setMotivo] = useState('');

  const [loading, setLoading] = useState(false);
  const [sucesso, setSucesso] = useState(false);
  const [erro, setErro] = useState('');

  // 🔹 SUBMIT
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErro('');
    setSucesso(false);

    try {
      await enviarEmail({
        nome,
        email,
        celular,
        cidade,
        motivo: `
Nome: ${nome}
Email: ${email}
Celular: ${celular}
Cidade: ${cidade}

Motivo do contato:
${motivo}
        `,
      });

      setSucesso(true);
      setNome('');
      setCelular('');
      setCidade('');
      setEmail('');
      setMotivo('');
    } catch {
      setErro('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Container
      id="contato"
      sx={{ padding: '2rem', backgroundColor: '#F5F0ED', marginTop: '50px' }}
    >
      <Grid container spacing={4}>

        {/* COLUNA ESQUERDA */}
        <Grid item xs={12} md={6}>
          <Box textAlign="center" mb={8}>
            <Typography variant="h3" fontFamily='"Dancing Script", cursive'>
              Contato
            </Typography>
            <Typography variant="h5" fontFamily='"Quicksand", sans-serif'>
              Entre em contato
            </Typography>
            <Typography fontFamily='"Quicksand", sans-serif'>
              Fico muito grata que você tenha me procurado, espero poder ajudar você!
            </Typography>
          </Box>

          <Box display="flex" justifyContent="center" gap={3}>
            <IconButton
              component="a"
              href="https://www.instagram.com/tamiresmartins.psi"
              target="_blank"
            >
              <Instagram sx={{ color: '#3D5361' }} />
            </IconButton>

            <IconButton
              component="a"
              href="https://wa.me/5516997366306"
              target="_blank"
            >
              <WhatsApp sx={{ color: '#3D5361' }} />
            </IconButton>
          </Box>
        </Grid>

        {/* COLUNA DIREITA – FORMULÁRIO */}
        <Grid item xs={12} md={6}>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <Typography mb={2} fontFamily='"Quicksand", sans-serif'>
              Se preferir, preencha o formulário e entrarei em contato com você:
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Celular"
                  value={celular}
                  onChange={(e) => setCelular(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Motivo"
                  multiline
                  rows={3}
                  value={motivo}
                  onChange={(e) => setMotivo(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={loading}
                >
                  {loading ? 'Enviando...' : 'Enviar'}
                </Button>
              </Grid>

              {sucesso && (
                <Grid item xs={12}>
                  <Typography color="success.main">
                    Mensagem enviada com sucesso!
                  </Typography>
                </Grid>
              )}

              {erro && (
                <Grid item xs={12}>
                  <Typography color="error.main">
                    {erro}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Box>
        </Grid>

      </Grid>
    </Container>
  );
};

export default ContactSection;