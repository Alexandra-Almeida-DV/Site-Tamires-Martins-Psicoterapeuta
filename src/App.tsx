import { Grid, Box, AppBar, Toolbar, Container } from '@mui/material';
import { AnimatedBackground } from './components/AnimatedBackground';
import WhatsAppFloatButton from './components/WhatsAppFloatButton';
import Footer from './components/Footer';
import NavBar from './components/navBar';
import SobreMim from './components/SobreMim';
import Psicoterapia from './components/Psicoterapia';
import MeuTrabalho from './components/MeuTrabalho';
import InstagramCard from './components/InstagramCard';
import postInstapsi from './assets/images/potInstapsi.png';
import postInstapsi2 from './assets/images/potInstapsi2.png';
import AnimatedBox from './components/AnimatedBox';
import AnimatedBox2 from './components/AnimatedBox2';

const App: React.FC = () => {
  return (
    <>
<div>
  <AppBar position="fixed">
    <Toolbar>
      <NavBar />
    </Toolbar>
  </AppBar>
</div>
<Toolbar sx={{ minHeight: '50px' }} /> {/* Altura ajustável */}
<Container maxWidth="lg"> 
<main style={{ padding: '3px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
  <Grid container spacing={2} >
    <Grid item xs={12} md={5} sx={{ marginTop: { xs: '0px', md: '5px' }, padding: { xs: '0px', md: '0px' }}}>
      <Container>
        <AnimatedBox2 />
      </Container>
      <Box position="relative">
        <Box position="absolute" width="100%" top={-50} right={0}>
          <AnimatedBackground />
        </Box>
      </Box>
    </Grid>
    <Grid item xs={12} md={7}  sx={{ marginTop: { xs: '0px', md: '5px' }, padding: { xs: '0px', md: '0px' }}}>
      <Container>
        <AnimatedBox />
      </Container>
    </Grid>
  </Grid>
</main>
</Container>

<Container maxWidth="lg"> 
        <div id="sobre-mim">
          <SobreMim />
        </div>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6} sx={{ marginTop: { xs: '150px', md: '300px' } }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <InstagramCard
                image={postInstapsi2}
                instagramUrl="https://www.instagram.com/tamiresmartins.psi/p/C_Qw9lyxQoC/">
              </InstagramCard>
            </div>
          </Grid>

          <Grid item xs={12} md={6} sx={{ marginTop: { xs: '150px', md: '300px' } }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <InstagramCard
                image={postInstapsi}
                instagramUrl="https://www.instagram.com/tamiresmartins.psi/p/C_bD4tkxv_4/?img_index=1">
              </InstagramCard>
            </div>
          </Grid>
        </Grid>
      </Container>

      <div id="psicoterapia">
        <Psicoterapia />
      </div>
      <div id="meu-trabalho">
        <MeuTrabalho />
      </div>

      <WhatsAppFloatButton />
      <Footer />
    </>
  );
};

export default App;
