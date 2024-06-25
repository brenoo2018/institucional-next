'use client';

import { useState } from 'react';
import ModalRegister from '../modals/ModalRegister';

const SectionStatistics = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <>
      <section
        className="py-5"
        style={{ backgroundImage: 'url(/img/bg-pattern.png)' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h2 className="text-orange fs-1">
                Inúmeros motivos pra estudar na Universidade Católica do
                Maranhão
              </h2>
              <p className="fs-4 mb-4">
                Em 1976, a SOMACS fundou o Centro de Estudos Teológico, a
                principal missão do CET era ser um espaço fundamental para a
                formação sacerdotal, que carecia de um estudo que fosse
                localizado no próprio estado do Maranhão.
              </p>
              <button
                className="btn btn-lg rounded-pill bg-orange text-white my-4"
                onClick={openModal}
              >
                Inscreva-se <i className="bi bi-arrow-right-short"></i>
              </button>
            </div>
            <div className="col-sm-12 col-md-6">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div
                    className="p-3 rounded-4 border bg-white mb-3"
                    style={{ height: '250px' }}
                  >
                    <i className="bi bi-bar-chart fs-3 text-orange"></i>
                    <br />
                    <p className="fs-3 mb-3 text-blue-light fw-semibold">
                      Tradição Católica
                    </p>
                    <p className="text-secondary">
                      Desbrave os caminhos da tradição cristã desde suas origens
                      até os dias atuais.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div
                    className="p-3 rounded-4 border bg-white mb-3"
                    style={{ height: '250px' }}
                  >
                    <i className="bi bi-bar-chart fs-3 text-orange"></i>
                    <br />
                    <p className="fs-3 mb-3 text-blue-light fw-semibold">
                      Compreensão <br /> crítica
                    </p>
                    <p className="text-secondary">
                      Desenvolva habilidades para compreender o ser humano e as
                      relações que o constituem.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div
                    className="p-3 rounded-4 border bg-white mb-3"
                    style={{ height: '250px' }}
                  >
                    <i className="bi bi-bar-chart fs-3 text-orange"></i>
                    <br />
                    <p className="fs-3 mb-3 text-blue-light fw-semibold">
                      Teologia conciliar
                    </p>
                    <p className="text-secondary">
                      Explore um referencial teórico-metodológico que
                      proporcione a compreensão profunda do fenômeno religioso
                      pluralista contemporâneo.
                    </p>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div
                    className="p-3 rounded-4 border bg-white mb-3"
                    style={{ height: '250px' }}
                  >
                    <i className="bi bi-bar-chart fs-3 text-orange"></i>
                    <br />
                    <p className="fs-3 mb-3 text-blue-light fw-semibold">
                      Raízes da Religiosidade
                    </p>
                    <p className="text-secondary">
                      Explore e compreenda a riqueza da religiosidade popular
                      brasileira.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalRegister show={modalVisible} onClose={closeModal} />
    </>
  );
};

export { SectionStatistics };
