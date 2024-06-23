'use client';
import { useState } from 'react';
import ModalRegister from '../modals/ModalRegister';

const SectionOurStudent = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <section className="py-5">
        <div className="text-center">
          <h2 className="fs-2">Venha ser nosso aluno</h2>
          <p className="fw-light fs-4">
            Seu diploma carrega histórias e impactos reais
          </p>
          <button
            type="button"
            className="btn btn-lg bg-orange text-white rounded-pill border mt-5 px-4"
            onClick={openModal}
          >
            Inscreva-se
            <i className="bi bi-arrow-right-short"></i>
          </button>
        </div>
      </section>
      <ModalRegister show={modalVisible} onClose={closeModal} />
    </>
  );
};

export default SectionOurStudent;
