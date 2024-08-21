import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Box, Link } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FaceIcon from '@mui/icons-material/Face';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { useTheme } from '@mui/material/styles'; // Import useTheme
import Logo from '../../../src/assets/images/psilogo.jpeg';

const drawerWidth = 240;

const MenuLateral: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
 
  function toggleDrawer(open: boolean) {
    return () => {
      setOpen(open);
    };
  }

  const drawerItems = [
    { text: 'Sobre Mim', icon: <FaceIcon color="secondary" />, link: '#sobre-mim' },
    { text: 'Psicoterapia', icon: <LocalFloristIcon color="secondary" />, link: '#psicoterapia' },
    { text: 'Meu Trabalho', icon: <WorkOutlineIcon color="secondary" />, link: '#meu-trabalho' },
    { text: 'Redes Sociais', icon: <ContactPageIcon color="secondary" />,  link: '#redes-sociais' },
  ];

  const drawerContent = (
    <Box
      sx={{
        width: drawerWidth,
        padding: 2,
        backgroundColor: '#E7EFF9',
        color: theme.palette.text.primary,
        height: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 2,
        }}
      >
        <img
          src={Logo}
          alt="Logo"
          style={{ width: '80%', maxWidth: 200, borderRadius: '50%' }} 
        />
      </Box>
      <List>
      {drawerItems.map((item, index) => (
        <Link href={item.link} key={index} underline="none" color="inherit">
          <ListItem button>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        </Link>
      ))}
    </List>
    </Box>
  );

  return (
    <div>
      {/* Button to open drawer */}
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        sx={{ display: 'block' }} // Always show the button
      >
        <MenuIcon />
      </IconButton>
      {/* Drawer component */}
      <Drawer
        variant="temporary" // Always use 'temporary' for both mobile and desktop
        anchor="left"
        open={open} // Control the drawer open state
        onClose={toggleDrawer(false)} // Close drawer when clicking outside
        sx={{
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </div>
  );
};

export default MenuLateral;
