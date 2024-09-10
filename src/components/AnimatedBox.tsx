import React from 'react';
import { Box, Grid, Link, Typography } from '@mui/material';
import { styled } from '@mui/system';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const StyledButton = styled("button")(({ theme }) => ({
    backgroundColor: "transparent",
    cursor: "pointer",
    border: `1px solid #FCC9CD`,
    borderRadius: "5px",
    padding: "5px 15px",
    width: "100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    '&:hover': {
      backgroundColor: theme.palette.secondary.light,
    }
  }));

const AnimatedBox = styled(Box)`
  opacity: 0;
  transform: translateX(100%);
  animation: slideIn 1s forwards;

  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateX(0); // Movendo o item de volta para o centro da tela
    }
  }

  // Ajustar a animação para dispositivos md e maiores
  @media (min-width: 960px) {
    transform: translateX(50vw); // Inicia o item fora da tela, mas a 50% da largura da viewport
    animation: slideInMd 1s forwards; // Usa uma animação diferente para md e maiores

    @keyframes slideInMd {
      to {
        opacity: 1;
        transform: translateX(0); // Garante que o item termine no meio da tela
      }
    }
  }
`;

const MyComponent: React.FC = () => {
  return (
    <AnimatedBox sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', marginTop: { xs: '-200px', md: '40px' } }}>
      <Grid 
  item 
  xs={12} 
  md={7} 
  textAlign="center"
  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
>
  <Typography 
    color="primary" 
    variant="h1" 
    fontFamily='Dancing Script'
    sx={{ 
      whiteSpace: { xs: 'normal', md: 'nowrap' }, 
      fontSize: { xs: '4rem', md: '7rem' }, 
      lineHeight: 1.2 
    }}
  >
    Tamires Martins
  </Typography>
  
  <Typography 
    color="primary" 
    variant="h4" 
    fontFamily='"Quicksand", sans-serif'
    sx={{ marginTop: '10px' }}
  >
    Psicoterapeuta
  </Typography>
  
  <Typography 
    color="secondary" 
    variant="h6" 
    fontFamily='"Quicksand", sans-serif'
    sx={{ marginTop: '5px' }}
  >
    CRP 06/206142
  </Typography>

  <Grid 
    container 
    display="flex" 
    justifyContent="center" 
    pt={3} 
    spacing={2} 
    sx={{ marginTop: { xs: '30px', md: '50px' } }}
  >
    <Grid 
      item 
      xs={4} 
      md={3} 
      display="flex" 
      justifyContent="center" 
      padding="3px"
    >
      <StyledButton>
        <Link href="https://wa.me/5516997366306" underline="none" color="secondary">
          <WhatsAppIcon />
        </Link>
      </StyledButton>
    </Grid>
    
    <Grid 
      item 
      xs={4} 
      md={3} 
      display="flex" 
      justifyContent="center" 
      padding="3px"
    >
      <StyledButton>
        <Link href="https://www.instagram.com/tamiresmartins.psi?igsh=OXI3eDdnOHJicmVq" underline="none" color="secondary">
          <InstagramIcon />
        </Link>
      </StyledButton>
    </Grid>
    
    <Grid 
      item 
      xs={4} 
      md={3} 
      display="flex" 
      justifyContent="center" 
      padding="3px"
    >
      <StyledButton>
        <Link href="mailto:contato@tamiresmartinspsi.com.br?subject=Consulta&body=Olá, gostaria de agendar uma consulta." underline="none" color="secondary" rel="noreferrer">
          <AlternateEmailIcon />
        </Link>
      </StyledButton>
    </Grid>
  </Grid>
</Grid>
</AnimatedBox>
  );
};

export default MyComponent;
