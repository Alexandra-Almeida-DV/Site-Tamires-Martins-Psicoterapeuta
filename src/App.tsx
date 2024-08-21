import { Typography, Box, Grid, Link, AppBar, Toolbar, IconButton, Drawer } from '@mui/material';
import SobreMim from './components/SobreMim';
import Psicoterapia from './components/Psicoterapia';
import MeuTrabalho from './components/MeuTrabalho';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { styled } from '@mui/material/styles';
import AvatarTm from '../src/assets/images/AvatarTm.jpeg';
import { AnimatedBackground } from './components/AnimatedBackground';
import WhatsAppFloatButton from './components/WhatsAppFloatButton';
import Footer from './components/Footer';
import MenuLateral from './components/menulateral/MenuLateral';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import Logo from './assets/images/psilogo.jpeg'

const StyledButton = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  border: '1px solid #FCC9CD',
  borderRadius: "5px",
  padding: "5px 15px",
  width: "50%",
  color: theme.palette.primary.contrastText,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  }
}));

const StyledImg = styled('img')(() => ({
  width: '70%',
  borderRadius: '50%',
  border: '3px solid #FCC9CD',
  marginTop: '20px', // Ajuste a margem superior
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '100%', // Faz a imagem se ajustar a diferentes tamanhos de tela
  display: 'block', // Garante que a imagem seja centralizada
}));

const App: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false); // Define o estado como booleano
  
    const handleDrawerToggle = () => {
      setOpen(!open); // Alterna o estado booleano
      console.log("Drawer toggle clicked, current state:", open);
    };

  
  return (
    <>
     <div>
      <AppBar position="static">
      <Toolbar>
  {/* Ícone de menu para dispositivos menores */}
  <Box sx={{ display: { xs: 'block', md: 'none' } }}>
    <IconButton 
      edge="start" 
      color="inherit" 
      aria-label="menu" 
      onClick={handleDrawerToggle} 
    >
      <MenuIcon />
    </IconButton>

    <Drawer
      anchor="left"
      open={open}  // Controla se o Drawer está aberto
      onClose={handleDrawerToggle}  // Fecha o Drawer ao clicar fora
    >
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={handleDrawerToggle}  // Fecha o Drawer ao clicar no conteúdo
        onKeyDown={handleDrawerToggle} // Fecha o Drawer ao pressionar uma tecla
      >
        <MenuLateral />
      </Box>
    </Drawer>
  </Box>

  {/* Menu lateral para dispositivos grandes */}
  <Box sx={{ display: { xs: 'none', md: 'block' } }}>
    <MenuLateral />
  </Box>
</Toolbar>
        </AppBar>
      </div>

      <main style={{ height: '120vh', padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Box position="relative">
              <Box position="absolute" width={"150%"} top={-100} right={0}>
                <AnimatedBackground />
              </Box>
              <Box position="relative" textAlign="center">
                <StyledImg src={AvatarTm} />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7} container direction="column" alignItems="center" textAlign="center">
            <Typography color="primary" variant="h1" textAlign="center" pb={2} gap='20px' fontFamily="Dancing Script">Tamires Martins</Typography>
            <Box sx={{ mb: 2 }}>
          <img 
            src={Logo} 
            alt="Logo" 
            style={{ 
              maxWidth: '160px', // Ajuste o tamanho conforme necessário
              height: 'auto' 
            }} 
          />
          <Typography color="primary" variant="h4" textAlign="center" gap='20px'>Psicoterapeuta</Typography>
          <Typography color="secondary" variant="h6" textAlign="center">CRP 06/206142</Typography>
          </Box>
            <Grid container display="flex" justifyContent="center" pt={3} gap='20px' marginTop='50px'>
              <Grid item xs={12} md={3} display="flex" justifyContent="center" padding="3px">
                <StyledButton>
                  <Link href={'https://wa.me/5516997366306'} underline="none" color="secondary">
                    <WhatsAppIcon />
                  </Link>
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={3} display="flex" justifyContent="center" padding="3px">
                <StyledButton>
                  <Link href={'https://www.instagram.com/tamiresmartins.psi?igsh=OXI3eDdnOHJicmVq'} underline="none" color="secondary">
                    <InstagramIcon />
                  </Link>
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={3} display="flex" justifyContent="center" padding="3px">
                <StyledButton>
                  <Link href={'http://mailto:contato@tamiresmartinspsi.com.br'} underline="none" color="secondary">
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
      <div id="psicoterapia">
        <Psicoterapia />
        </div>
        <div id="meu-trabalho">
        <MeuTrabalho />
        </div>
        <div id="redes-sociais'">
          <Footer />
        </div>     
      </div>
      <WhatsAppFloatButton />
      </>
  );
};

export default App;