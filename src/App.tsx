import { styled } from '@mui/material/styles';
import { Grid, Box, Typography, Link, AppBar, Toolbar } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { AnimatedBackground } from './components/AnimatedBackground';
import  AvatarTm from '../src/assets/images/AvatarTm.jpeg'
import WhatsAppFloatButton from './components/WhatsAppFloatButton';
import Footer from './components/Footer';
import NavBar from './components/navBar';
import SobreMim from './components/SobreMim';
import Psicoterapia from './components/Psicoterapia';
import MeuTrabalho from './components/MeuTrabalho';


const StyledImg = styled('img')(({ theme }) => ({
  width: '70%',
  borderRadius: '50%',
  border: '3px solid #FCC9CD',
  marginTop: '150px', 
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '100%', 
  display: 'block', 
  [theme.breakpoints.down('sm')]: {
    width: '90%',
    marginTop: '50px',
  },
}));

const StyledButton = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  cursor: "pointer",
  border: `1px solid #FCC9CD`,
  borderRadius: "5px",
  padding: "5px 15px",
  width: "50%",
  color: theme.palette.primary.contrastText,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  }
}));


const App: React.FC = () => {
  return (
    <>
      <div>
      <AppBar position="static">
      <Toolbar>
        <NavBar />
      </Toolbar>  
    </AppBar>
    </div>
    <main style={{ height: '100vh', padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={5}>
          <Box position="relative">
            <Box position="absolute" width="150%" top={-100} right={0}>
              <AnimatedBackground />
            </Box>
            <Box position="relative" textAlign="center">
              <StyledImg src={AvatarTm} alt="Avatar" />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={7} sx={{ marginTop: { xs: '50px', md: '150px' } }}>
          <Typography color="primary" variant="h1" textAlign="center" pb={2} fontFamily='Dancing Script'>
            Tamires Martins
          </Typography>
          <Typography color="primary" variant="h4" textAlign="center" fontFamily='"Quicksand", sans-serif'>
            Psicoterapeuta
          </Typography>
          <Typography color="secondary" variant="h6" textAlign="center" fontFamily='"Quicksand", sans-serif'>
            CRP 06/206142
          </Typography>
          <Grid container display="flex" justifyContent="center" pt={3} spacing={2} sx={{ marginTop: { xs: '30px', md: '50px' } }}>
            <Grid item xs={4} md={3} display="flex" justifyContent="center" padding="3px">
              <StyledButton>
                <Link href="https://wa.me/5516997366306" underline="none" color="secondary">
                  <WhatsAppIcon />
                </Link>
              </StyledButton>
            </Grid>
            <Grid item xs={4} md={3} display="flex" justifyContent="center" padding="3px">
              <StyledButton>
                <Link href="https://www.instagram.com/tamiresmartins.psi?igsh=OXI3eDdnOHJicmVq" underline="none" color="secondary">
                  <InstagramIcon />
                </Link>
              </StyledButton>
            </Grid>
            <Grid item xs={4} md={3} display="flex" justifyContent="center" padding="3px">
              <StyledButton>
              <Link href="mailto:contato@tamiresmartinspsi.com.br?subject=Consulta&body=Olá, gostaria de agendar uma consulta." underline="none" color="secondary" rel="noreferrer">
                 <AlternateEmailIcon />
               </Link>
              </StyledButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </main>
    <div>
      <div id="sobre-mim">
        <SobreMim />
      </div>
      <Toolbar />
      <div id="psicoterapia">
        <Psicoterapia />
      </div>
      <div id="meu-trabalho">
        <MeuTrabalho />
      </div>
      </div>
    <WhatsAppFloatButton />
    <Footer />
    </>
  );
};


export default App;
