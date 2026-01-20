import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export interface EmailData {
  nome: string;
  email: string;
  celular: string;
  cidade: string;
  motivo: string;
}

export async function enviarEmail(dados: EmailData) {
  const response = await axios.post(
    `${API_URL}/enviar-email`,
    dados,
    {
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  return response.data;
}
