# 🌿 Site Institucional — Tamires Martins | Psicoterapeuta

Site institucional desenvolvido para a psicoterapeuta **Tamires Martins**, com foco em presença digital profissional, acolhimento e facilidade de contato via redes sociais.

🔗 **Site no ar:**  
👉 https://tamiresmartinspsi.com.br

---

## 📌 Sobre o Projeto

Este projeto consiste em um **site institucional estático**, criado para apresentar os serviços de psicoterapia clínica e oncológica, valores, informações profissionais e meios de contato.

Inicialmente, o projeto contou com uma arquitetura full stack (frontend + backend para envio de e-mails).  
Durante o processo, foi realizada uma **decisão técnica estratégica**:  
➡️ adaptar o projeto para um **site estático**, totalmente compatível com a hospedagem da cliente, mantendo a possibilidade de evolução futura.

O contato é feito diretamente via:
- WhatsApp
- Instagram
- E-mail

Sem impacto negativo para a experiência do usuário.

---

## 🛠️ Tecnologias Utilizadas

### Frontend
- **React**
- **TypeScript**
- **Vite**
- **Material UI (MUI)**
- **CSS responsivo**
- **React Hooks**

### Backend (mantido para futura evolução)
- **Node.js**
- **Express**
- **Nodemailer**
- **Dotenv**

> ⚠️ O backend não está ativo em produção no momento, pois a hospedagem atual não oferece suporte a Node.js.  
> Ele foi mantido no repositório para **escalabilidade futura**.

---

## 📱 Funcionalidades

- Layout responsivo (desktop e mobile)
- Design clean e acolhedor
- Seções institucionais:
  - Sobre
  - Serviços
  - Áreas de atuação
  - Contato
- Botões diretos para:
  - WhatsApp
  - Instagram
- Navegação SPA (Single Page Application)

---

## 🚀 Deploy

O frontend foi buildado com **Vite** e hospedado como site estático.

### Processo de deploy:
- `npm run build`
- Upload do conteúdo da pasta `dist` para `public_html`
- Configuração de SPA via `.htaccess`

---

## 📂 Estrutura do Projeto

```bash
Site-Tamires-Martins-Psicoterapeuta/
├── backend/        # Backend em Node.js (não ativo em produção)
├── front-end/      # Frontend React + Vite
├── .gitignore
└── README.md
