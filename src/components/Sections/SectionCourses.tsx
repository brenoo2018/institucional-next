'use client';
import { useState } from 'react';
import Link from 'next/link';
import ModalRegister from '../Modals/ModalRegister';

const SectionCourses = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [activeTab, setActiveTab] = useState('graduacao');

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <section className="py-5 bg-blue">
        <div className="container">
          <div className="text-center">
            <h2 className="fs-2 text-white">Explore nossa sessão de cursos</h2>
          </div>
          <div className="d-flex justify-content-center gap-2 mt-3">
            <button
              className={`btn btn-lg border rounded-pill text-white ${
                activeTab === 'graduacao' ? 'btn-active' : 'btn-graduacao'
              }`}
              onClick={() => handleTabClick('graduacao')}
            >
              Graduação
            </button>
            <button
              className={`btn btn-lg border rounded-pill text-white ${
                activeTab === 'posGraduacao'
                  ? 'btn-active'
                  : 'btn-pos-graduacao'
              }`}
              onClick={() => handleTabClick('posGraduacao')}
            >
              Pós-Graduação
            </button>
          </div>
          <div className="mt-5">
            <div
              className={`row ${activeTab === 'graduacao' ? '' : 'd-none'}`}
              id="graduacao-courses"
            >
              <div className="col-sm-12 col-md-4">
                <div className="p-3 rounded-4 border bg-white mb-3">
                  <h2 className="fs-4 fw-normal mb-4">Filosofia</h2>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-clock me-2"></i>4 anos
                  </p>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-file-text me-2"></i>Licenciatura
                  </p>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-building me-2"></i>Presencial
                  </p>
                  <div className="text-center">
                    <button
                      className="btn bg-orange text-white rounded-pill w-100 mb-3"
                      onClick={openModal}
                    >
                      Inscreva-se <i className="bi bi-arrow-right-short"></i>
                    </button>
                    <Link href="/page/filosofia" className="text-black">
                      Sobre o curso
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="p-3 rounded-4 border bg-white mb-3">
                  <h2 className="fs-4 fw-normal mb-4">Ciências da Religião</h2>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-clock me-2"></i>3 anos
                  </p>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-file-text me-2"></i>Bacharel
                  </p>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-building me-2"></i>Presencial
                  </p>
                  <div className="text-center">
                    <button
                      className="btn bg-orange text-white rounded-pill w-100 mb-3"
                      onClick={openModal}
                    >
                      Inscreva-se <i className="bi bi-arrow-right-short"></i>
                    </button>
                    <Link
                      href="/page/ciencias-religiosas"
                      className="text-black"
                    >
                      Sobre o curso
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="p-3 rounded-4 border bg-white mb-3">
                  <h2 className="fs-4 fw-normal mb-4">Teologia</h2>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-clock me-2"></i>4 anos
                  </p>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-file-text me-2"></i>Bacharel
                  </p>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-building me-2"></i>Presencial
                  </p>
                  <div className="text-center">
                    <button
                      className="btn bg-orange text-white rounded-pill w-100 mb-3"
                      onClick={openModal}
                    >
                      Inscreva-se <i className="bi bi-arrow-right-short"></i>
                    </button>
                    <Link href="/page/teologia" className="text-black">
                      Sobre o curso
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`row ${activeTab === 'posGraduacao' ? '' : 'd-none'}`}
              id="pos-graduacao-courses"
            >
              <div className="col-sm-12 col-md-4">
                <div className="p-3 rounded-4 border bg-white mb-3">
                  <h2 className="fs-4 fw-normal mb-4">Direito Público</h2>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-clock me-2"></i>14 meses
                  </p>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-file-text me-2"></i>Pós graduação
                  </p>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-building me-2"></i>Online
                  </p>
                  <div className="text-center">
                    <button
                      className="btn bg-orange text-white rounded-pill w-100 mb-3"
                      onClick={openModal}
                    >
                      Inscreva-se <i className="bi bi-arrow-right-short"></i>
                    </button>
                    <Link
                      href="/page/pos-graduacao-em-direito-publico"
                      className="text-black"
                    >
                      Sobre o curso
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="p-3 rounded-4 border bg-white mb-3">
                  <h2 className="fs-4 fw-normal mb-4">
                    História do Maranhão e África
                  </h2>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-clock me-2"></i>15 meses
                  </p>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-file-text me-2"></i>Pós graduação
                  </p>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-building me-2"></i>Online
                  </p>
                  <div className="text-center">
                    <button
                      className="btn bg-orange text-white rounded-pill w-100 mb-3"
                      onClick={openModal}
                    >
                      Inscreva-se <i className="bi bi-arrow-right-short"></i>
                    </button>
                    <Link
                      href="/page/historia-do-maranhao-e-africa"
                      className="text-black"
                    >
                      Sobre o curso
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="p-3 rounded-4 border bg-white mb-3">
                  <h2 className="fs-4 fw-normal mb-4">
                    Docência do Ensino Superior
                  </h2>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-clock me-2"></i>12 meses
                  </p>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-file-text me-2"></i>Pós graduação
                  </p>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-building me-2"></i>Online
                  </p>
                  <div className="text-center">
                    <button
                      className="btn bg-orange text-white rounded-pill w-100 mb-3"
                      onClick={openModal}
                    >
                      Inscreva-se <i className="bi bi-arrow-right-short"></i>
                    </button>
                    <Link
                      href="/page/pos-graduacao-em-docencia-do-ensino-superior"
                      className="text-black"
                    >
                      Sobre o curso
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="p-3 rounded-4 border bg-white mb-3">
                  <h2 className="fs-4 fw-normal mb-4">
                    Lato Sensu em Cultura Teológica
                  </h2>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-clock me-2"></i>12 meses
                  </p>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-file-text me-2"></i>Pós graduação
                  </p>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-building me-2"></i>Online
                  </p>
                  <div className="text-center">
                    <button
                      className="btn bg-orange text-white rounded-pill w-100 mb-3"
                      onClick={openModal}
                    >
                      Inscreva-se <i className="bi bi-arrow-right-short"></i>
                    </button>
                    <Link
                      href="/page/pos-graduacao-lato-sensu-em-cultura-teologica"
                      className="text-black"
                    >
                      Sobre o curso
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="p-3 rounded-4 border bg-white mb-3">
                  <h2 className="fs-4 fw-normal mb-4">Comunicação Pastoral</h2>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-clock me-2"></i>12 meses
                  </p>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-file-text me-2"></i>Pós graduação
                  </p>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-building me-2"></i>Online
                  </p>
                  <div className="text-center">
                    <button
                      className="btn bg-orange text-white rounded-pill w-100 mb-3"
                      onClick={openModal}
                    >
                      Inscreva-se <i className="bi bi-arrow-right-short"></i>
                    </button>
                    <Link
                      href="/page/pos-graduacao-em-comunicacao-pastoral"
                      className="text-black"
                    >
                      Sobre o curso
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="p-3 rounded-4 border bg-white mb-3">
                  <h2 className="fs-4 fw-normal mb-4">Liturgia</h2>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-clock me-2"></i>12 meses
                  </p>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-file-text me-2"></i>Pós graduação
                  </p>
                  <p className="fs-5 text-secondary">
                    <i className="bi bi-building me-2"></i>Online
                  </p>
                  <div className="text-center">
                    <button
                      className="btn bg-orange text-white rounded-pill w-100 mb-3"
                      onClick={openModal}
                    >
                      Inscreva-se <i className="bi bi-arrow-right-short"></i>
                    </button>
                    <Link
                      href="/page/pos-graduacao-em-liturgia"
                      className="text-black"
                    >
                      Sobre o curso
                    </Link>
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

export default SectionCourses;
