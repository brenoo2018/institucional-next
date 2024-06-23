'use client';
import { useState } from 'react';
import ModalDepo from '../modals/ModalDepo';
import Image from 'next/image';
const SectionDepositions = () => {
  const [currentVideo, setCurrentVideo] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const deposVideoLinks = [
    'https://drive.google.com/file/d/1IEga1kSHrQQvYyiqfFxUdA5axMW0Zb0V/preview',
    'https://drive.google.com/file/d/1S_LWOPx-s3MAypGR_eOl9ownr1ceJvt_/preview',
    'https://drive.google.com/file/d/1SXYIXrXVvVskxVveGZdXRY2MLUdUbhCy/preview',
    'https://drive.google.com/file/d/11K1mnyy89bgG1bwOwM1B_W_0crI6FQgL/preview',
  ];

  const openModal = (index: number) => {
    setCurrentVideo(deposVideoLinks[index]);
    setModalVisible(true);
  };

  const closeModal = () => {
    setCurrentVideo('');
    setModalVisible(false);
  };

  return (
    <>
      <section className="py-5 bg-depo">
        <div className="text-center">
          <h2 className="text-white fs-2">O que dizem nossos alunos</h2>
          <p className="text-white fw-light fs-4">
            Aqui vivemos experiências que só este agradável ambiente
            proporciona.
          </p>
        </div>
        <div className="container mt-5">
          <div className="row">
            {deposVideoLinks.map((link, index) => (
              <div key={index} className="col-sm-12 col-md-3">
                <div
                  className="vertical-video shadow-lg rounded-4 border mb-3"
                  style={{ backgroundImage: `url(/img/dep${index + 1}.png)` }}
                >
                  <div
                    className="position-relative d-flex justify-content-center"
                    style={{ bottom: '-80%' }}
                  >
                    <div
                      className="btn p-1 bg-white border shadow-lg rounded-circle position-absolute d-flex align-items-center justify-content-center"
                      style={{ width: '70px', height: '70px' }}
                      onClick={() => openModal(index)}
                    >
                      <i className="bi bi-play-fill fs-2"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="mt-3 col-sm-12 col-md-4">
              <div className="p-3 rounded-4 border bg-white mb-3 h-100 d-flex flex-column">
                <div className="d-flex mb-3">
                  <Image
                    src="/img/iran-gomes.png"
                    className="rounded-circle me-3 object-fit-cover"
                    width="40"
                    height="40"
                    alt="Depoimento Pe. Iran Gomes"
                  />
                  <div>
                    <span className="fw-semibold">Pe. Iran Gomes</span>
                    <br />
                    <span className="fw-light text-secondary">Padre</span>
                  </div>
                </div>
                <p className="mt-3 flex-grow-1">
                  Quem não vive para servir não serve para viver. Essa é a marca
                  que fica em mim e é o que muito conta naquilo que a gente quer
                  realizar aqui. Faculdade que acolhe a todos e a todas
                  indistintamente.
                </p>
              </div>
            </div>
            <div className="mt-3 col-sm-12 col-md-4">
              <div className="p-3 rounded-4 border bg-white mb-3 h-100 d-flex flex-column">
                <div className="d-flex mb-3">
                  <Image
                    src="/img/maura-lorena.png"
                    className="rounded-circle me-3 object-fit-cover"
                    width="40"
                    height="40"
                    alt="Depoimento Coord. Maura Lorena"
                  />
                  <div>
                    <span className="fw-semibold">Coord. Maura Lorena</span>
                    <br />
                    <span className="fw-light text-secondary">Professor</span>
                  </div>
                </div>
                <p className="mt-3 flex-grow-1">
                  É um trabalho da igreja Católica, voltada para educação. Nossa
                  missão é formar não só professores, educadores, mas Cristãos
                  engajados nas suas comunidades. E isso não é só na igreja
                  Católica.
                </p>
              </div>
            </div>
            <div className="mt-3 col-sm-12 col-md-4">
              <div className="p-3 rounded-4 border bg-white mb-3 h-100 d-flex flex-column">
                <div className="d-flex mb-3">
                  <Image
                    src="/img/jose-francisco.png"
                    className="rounded-circle me-3 object-fit-cover"
                    width="40"
                    height="40"
                    alt="Depoimento Pe. José Francisco"
                  />
                  <div>
                    <span className="fw-semibold">Pe. José Francisco</span>
                    <br />
                    <span className="fw-light text-secondary">Professor</span>
                  </div>
                </div>
                <p className="mt-3 flex-grow-1">
                  Nós remetemos a tradição Católica no ensino e na educação,
                  então vemos a excelência e a abertura com rigor e a seriedade
                  de uma educação que se faz a partir da tradição Cristã e
                  Católica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ModalDepo
        show={modalVisible}
        videoUrl={currentVideo}
        onClose={closeModal}
      />
    </>
  );
};

export default SectionDepositions;
