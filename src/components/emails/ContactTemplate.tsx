import { Metadata } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

interface ContactTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}
const metadata: Metadata = {
  title: 'Contato',
  description: 'Contato',
};

export const ContactTemplate = ({
  name,
  email,
  phone,
  message,
}: ContactTemplateProps) => (
  <html lang="pt-br">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Contato</title>
      <style>{`
        .logo-container {
          text-align: center;
          margin-bottom: 20px;
        }
        .logo {
          max-width: 200px;
          height: auto;
        }
      `}</style>
    </head>
    <body>
      <div className="logo-container">
        <Image
          src="https://iesma.com.br/wp-content/uploads/2024/01/cropped-cropped-Design-sem-nome-12.png"
          alt="Logo da Empresa"
          className="logo"
          width={200}
          height={200}
        />
      </div>
      <h2>Novo contato recebido!</h2>
      <p>
        <strong>Nome:</strong> {name}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      <p>
        <strong>Telefone:</strong> {phone}
      </p>
      <p>
        <strong>Mensagem:</strong>
      </p>
      <p>{message}</p>
    </body>
  </html>
);
