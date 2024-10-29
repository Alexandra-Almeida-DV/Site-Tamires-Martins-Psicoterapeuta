import React from 'react';
import { Container, Toolbar } from '@mui/material';
import NavBar from './components/navBar';
import Footer from './components/Footer';
import WhatsAppFloatButton from './components/WhatsAppFloatButton';
import SobreMim from './components/SobreMim';
import Psicoterapia from './components/Psicoterapia';
import Psicooncologia from './components/Psicooncologia';
import InstagramSection from './components/InstagramSecsion';
import MeuTrabalho from './components/MeuTrabalho';
import QuoteSection from './components/QuoteSection';
import ContactSection from './components/ContactSecsion';

const App: React.FC = () => {
  return (
    <>
      {/* Navbar fixa no topo */}
      <NavBar />
      
      {/* Adiciona um espaço abaixo da barra de navegação para evitar sobreposição */}
      <Toolbar sx={{ minHeight: '50px' }} />

      {/* Conteúdo principal responsivo */}
      <Container maxWidth="lg" sx={{ marginTop: '60rem' }}>
        <SobreMim />

        <Psicoterapia />

        <Psicooncologia />

        <InstagramSection />

        <MeuTrabalho />

        <QuoteSection />

        <ContactSection />
      </Container>

      {/* Botão flutuante do WhatsApp */}
      <WhatsAppFloatButton />

      {/* Rodapé fixo */}
      <Footer />
    </>
  );
};

export default App; 
