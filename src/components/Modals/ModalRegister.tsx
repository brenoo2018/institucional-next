'use client';
import { useState } from 'react';
import { phoneMask } from '@/utils/mask';

type TPropsModal = {
  show: boolean;
  onClose: () => void;
};

const ModalRegister = ({ show, onClose }: TPropsModal) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    if (id === 'phone') {
      if (value.length === 16) return; // Limitação do tamanho do telefone para a máscara

      const maskedPhone = phoneMask(value);
      setFormData({ ...formData, [id]: maskedPhone });
      return;
    }

    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;

    try {
      await fetch('/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, message }),
      });

      onClose();

      // Redirecionar para o WhatsApp
      const whatsappMessage = `Nome: ${name}\nEmail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`;
      const whatsappUrl = `https://wa.me/5598985950295?text=${encodeURIComponent(
        whatsappMessage
      )}`;
      window.open(whatsappUrl, '_blank');
    } catch (error) {
      alert('Por favor, revise seus dados de inscrição!');
    }
  };

  return (
    <>
      {show && <div className="modal-backdrop fade show"></div>}
      <div
        className={`modal fade ${show ? 'show' : ''}`}
        tabIndex={-1}
        aria-labelledby="registerModalLabel"
        aria-hidden={!show}
        role="dialog"
        style={{ display: show ? 'block' : 'none' }}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="registerModalLabel">
                Inscrição
              </h1>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={onClose}
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit} id="capture">
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Nome do interessado"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label htmlFor="name">Nome</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="meumelhoremail@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder=""
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <label htmlFor="phone">Telefone</label>
                </div>
                <div className="form-floating mt-3">
                  <textarea
                    className="form-control"
                    placeholder="Digite a mensagem aqui"
                    id="message"
                    style={{ height: '100px' }}
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="message">Digite a mensagem aqui</label>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-lg bg-orange text-white rounded-pill border w-100">
                    Inscrever-se
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalRegister;
