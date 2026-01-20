import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// TRANSPORTER (configura o envio de e-mails)
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_PORT === "465", // SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// ROTA DE TESTE
app.get("/api", (req, res) => {
  res.json({ status: "API ok", message: "Backend rodando!" });
});

// ROTA DE ENVIO DE EMAIL
app.post("/enviar-email", async (req, res) => {
  console.log("📩 Dados recebidos:", req.body);

  const { nome, email, celular, cidade, motivo } = req.body;

  if (!nome || !email || !celular || !cidade || !motivo) {
    console.log("❌ Campos faltando");
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  const mailOptions = {
    from: `"Site Psicoterapia" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_TO || process.env.EMAIL_USER,
    subject: `Novo contato do site - ${nome}`,
    html: `
      <h2>Novo contato pelo site</h2>
      <p><strong>Nome:</strong> ${nome}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Celular:</strong> ${celular}</p>
      <p><strong>Cidade:</strong> ${cidade}</p>
      <p><strong>Motivo:</strong></p>
      <p>${motivo}</p>
    `,
  };

  try {
    console.log("📤 Tentando enviar email...");
    await transporter.sendMail(mailOptions);
    console.log("✅ Email enviado com sucesso!");
    res.json({ success: true });
  } catch (error) {
    console.error("🔥 ERRO AO ENVIAR EMAIL:", error);
    res.status(500).json({ error: "Erro ao enviar email." });
  }
});


const PORT = 4000;
app.listen(PORT, () =>
  console.log(`Servidor rodando na porta ${PORT}`)
);
