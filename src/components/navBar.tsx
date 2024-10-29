import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import Slide from '@mui/material/Slide';
import { useTheme } from '@mui/material/styles';
import FaceIcon from '@mui/icons-material/Face';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Footer from './Footer';
import logopsi from '../assets/images/logopsi.png';
import logoTamires from '../assets/images/logoTamires.png';
import AvatarTm from '../assets/images/AvatarTm.jpeg';
import { Box } from '@mui/material';
import WhatsAppButtonAgende from './WhatsAppButtonAgende';
import ContactPageIcon from '@mui/icons-material/ContactPage';

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDrawerToggle = () => {
    console.log('Drawer toggle clicked');
    setDrawerOpen(!drawerOpen);
  };
  

const menuItems = [
  { text: 'Sobre Mim', icon: <FaceIcon color="secondary" />, link: '#sobre-mim' },
  { text: 'Psicoterapia', icon: <LocalFloristIcon color="secondary" />, link: '#psicoterapia' },
  { text: 'Psico-oncologia', icon: <LocalFloristIcon color="secondary" />, link: '#psicooncologia' },
  { text: 'Meu Trabalho', icon: <WorkOutlineIcon color="secondary" />, link: '#meu-trabalho' },
  { text: 'Contato', icon: <ContactPageIcon color="secondary" />, link: '#contato' },
];

  const renderMenuItems = () => (
    <List>
      {menuItems.map((item, index) => (
        <ListItem button key={index} component="a" href={item.link}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <>
      <AppBar
        position="absolute"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          boxShadow: 'none',
          width: '100vw',
          height: '100vh',
          zIndex: theme.zIndex.appBar,
          backgroundImage: `url(${AvatarTm})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top center',
          backgroundBlendMode: 'overlay',
          backgroundAttachment: 'fixed',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            marginTop: '60px',
            px: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Slide direction="down" in={isVisible} mountOnEnter unmountOnExit>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <a href="#">
                <Box
                  component="img"
                  src={logopsi}
                  alt="Logo Psi"
                  sx={{
                    width: { xs: '100px', sm: '100px', md: '150px', lg: '180px' },
                    height: 'auto',
                    marginTop: '-60px',
                  }}
                />
              </a>
              <a href="#">
                <Box
                  component="img"
                  src={logoTamires}
                  alt="Logo Tamires"
                  sx={{
                    width: { xs: '200px', sm: '150px', md: '200px', lg: '250px' },
                    height: 'auto',
                    marginTop: '0px',
                  }}
                />
              </a>
            </div>
          </Slide>

          {isMobile ? (
            <IconButton
              edge="start"
              color="primary"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Slide direction="down" in={isVisible} mountOnEnter unmountOnExit>
              <div style={{ display: 'flex' }}>
                {menuItems.map((item, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    component="a"
                    href={item.link}
                    sx={{
                      mx: { xs: 1, sm: 2, md: 3 },
                      color: '#3D5361',
                      textDecoration: 'none',
                      fontFamily: '"Quicksand", sans-serif',
                      fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
                    }}
                  >
                    {item.text}
                  </Typography>
                ))}
              </div>
            </Slide>
          )}

        </Toolbar>

        <Toolbar
          sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            paddingTop: { xs: '20px', sm: '30px', md: '60px' },
            gap: { xs: '10px', md: '30px' },
            px: { xs: 2, sm: 4, md: 6 },
          }}
        >
          <Slide direction="down" in={isVisible} mountOnEnter unmountOnExit timeout={{ enter: 1000, exit: 800 }}>
            <Typography
              variant="h5"
              color="primary"
              sx={{
                marginBottom: '20px',
                fontFamily: '"Quicksand", sans-serif',
                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
              }}
            >
              Tamires Martins Camargo - Psicoterapeuta CRP 06/206142
            </Typography>
          </Slide>

          <Slide direction="down" in={isVisible} mountOnEnter unmountOnExit timeout={{ enter: 1000, exit: 800 }}>
            <Typography
              variant="h2"
              color="primary"
              sx={{
                marginBottom: '25px',
                fontFamily: '"Dancing Script", cursive',
                fontSize: { xs: '3.5rem', sm: '3.5rem', md: '5.5rem' },
                lineHeight: 1.2
              }}
            >
              Psicoterapeuta clínica e <br /> oncológica
            </Typography>
          </Slide>

          <Slide direction="down" in={isVisible} mountOnEnter unmountOnExit timeout={{ enter: 1000, exit: 800 }}>
            <Typography
              variant="h6"
              color="primary"
              sx={{
                marginBottom: '15px',
                fontFamily: '"Quicksand", sans-serif',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }
              }}
            >
              Que bom que está aqui!
            </Typography>
          </Slide>

          <Slide direction="down" in={isVisible} mountOnEnter unmountOnExit timeout={{ enter: 1000, exit: 800 }}>
            <Typography
              variant="h5"
              color="primary"
              sx={{
                fontFamily: '"Quicksand", sans-serif',
                fontSize: { xs: '1rem', sm: '1.2rem', md: '1.3rem' }
              }}
            >
              Te ajudo a conquistar protagonismo frente <br /> ao tratamento oncológico e à vida.
            </Typography>
          </Slide>

          <Slide direction="down" in={isVisible} mountOnEnter unmountOnExit timeout={{ enter: 1000, exit: 800 }}>
            <Box sx={{ mt: 2 }}>
              <WhatsAppButtonAgende />
            </Box>
          </Slide>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <div
          style={{
            width: 230,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            zIndex: theme.zIndex.modal,
            backgroundColor: '#F5F0ED',
            color: '#3D5361',
            fontFamily: '"Quicksand", sans-serif',
          }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <Typography
            variant="h6"
            sx={{
              padding: theme.spacing(2),
              textAlign: 'center',
              fontFamily: '"Quicksand", sans-serif',
            }}
          >
            {/* Título ou logo */}
          </Typography>
          <div style={{ flexGrow: 1 }}>{renderMenuItems()}</div>
          <Footer />
        </div>
      </Drawer>
    </>
  );
};

export default Navbar
