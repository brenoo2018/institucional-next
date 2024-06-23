import React from 'react';

interface ContactTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

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
        <img
          src="https://iesma.com.br/wp-content/uploads/2024/01/cropped-cropped-Design-sem-nome-12.png"
          alt="Logo da Empresa"
          className="logo"
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
