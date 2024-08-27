import React, { useState } from 'react';
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
import { useTheme } from '@mui/material/styles';
import FaceIcon from '@mui/icons-material/Face';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import Logo from '../assets/images/psilogo.jpeg'
import Footer from './Footer';

const Navbar: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const menuItems = [
    { text: 'Sobre Mim', icon: <FaceIcon color="secondary" />, link: '#sobre-mim' },
    { text: 'Psicoterapia', icon: <LocalFloristIcon color="secondary" />, link: '#psicoterapia' },
    { text: 'Meu Trabalho', icon: <WorkOutlineIcon color="secondary" />, link: '#meu-trabalho' },
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
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
              <img
                src={Logo}
                alt="Logo"
                style={{ width: '5%', maxWidth: 200, borderRadius: '50%' }}
              />
            </a>
          </Typography>
          {isMobile ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            menuItems.map((item, index) => (
              <Typography
                key={index}
                variant="body1"
                component="a"
                href={item.link}
                sx={{ margin: theme.spacing(2), color: '#F59D99', textDecoration: 'none', fontFamily:'"Quicksand", sans-serif' }}
              >
                {item.text}
              </Typography>
            ))
          )}
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
        <div
          style={{ width: 230, 
            display: 'flex', 
            flexDirection: 'column', 
            height: '100%',
          }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <Typography variant="h6" sx={{ padding: theme.spacing(2), textAlign: 'center', fontFamily:'"Quicksand", sans-serif' , color: '' }}>
            <img
              src={Logo}
              alt="Logo"
              style={{ width: '80%', maxWidth: 200, borderRadius: '50%' }}
            />
          </Typography>
            <div style={{ flexGrow: 1 }}>
              {renderMenuItems()}
            </div>
          <Footer />
        </div>
      </Drawer>

      <Toolbar />
    </>
  );
};

export default Navbar;
