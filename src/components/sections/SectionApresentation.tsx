'use client';
import Image from 'next/image';
import Link from 'next/link';
import ModalRegister from '../modals/ModalRegister';
import { useState } from 'react';

const SectionApresentation = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <section className="background-gradient">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="pe-md-5">
                <div className="text-center w-100 my-5 d-flex justify-content-center">
                  <Image
                    src="/img/logo-light.png"
                    height={70}
                    width={218}
                    alt="Logo Seção 1"
                  />
                </div>
                <h1 className="text-white mb-4">
                  Aqui, Aprendizado e Descoberta são Constantes.
                </h1>
                <h2 className="text-white fw-light fs-4">
                  Nossa Abordagem Educativa Holística Combina Excelência
                  Acadêmica, Valores Humanos e Compromisso com o Progresso
                  Social.
                </h2>
                <div className="bg-white rounded-4 p-3 mt-5">
                  <div className="text-center mb-3">
                    <h2 className="fw-normal">Conheça nossos cursos</h2>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-6">
                      <Link
                        href="/page/teologia"
                        className="btn btn-lg rounded-pill border w-100 mb-3"
                      >
                        Teologia
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <Link
                        href="/page/ciencias-religiosas"
                        className="btn btn-lg rounded-pill border w-100 mb-3"
                      >
                        Ciência das religiões
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <Link
                        href="/page/filosofia"
                        className="btn btn-lg rounded-pill border w-100 mb-3"
                      >
                        Filosofia
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                    <div className="col-sm-12 col-md-6">
                      <button
                        type="button"
                        className="btn btn-lg bg-orange text-white rounded-pill border w-100"
                        onClick={openModal}
                      >
                        Inscreva-se
                        <i className="bi bi-arrow-right-short"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6">
              <Image
                className="w-100"
                src="/img/persona-header.png"
                height={757}
                width={636}
                alt="Persona"
              />
            </div>
          </div>
        </div>
      </section>
      <ModalRegister show={modalVisible} onClose={closeModal} />
    </>
  );
};

export { SectionApresentation };
