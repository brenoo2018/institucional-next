'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ModalRegister from './modals/ModalRegister';
import { usePathname } from 'next/navigation';
import ApresentationBlog from './ApresentationBlog';
import Apresentation from './Apresentation';

const Navbar = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isBlogPage, setIsBlogPage] = useState(false);
  const [isHomePage, setIsHomePage] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsBlogPage(pathname.includes('/blog'));
    setIsHomePage(pathname === '/');
  }, [pathname]);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <header className="bg-header">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
            <Link href="/" className="navbar-brand">
              <Image src="/img/logo-light.png" height={40} width={120} alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown">
                  <Link
                    href="#"
                    className="nav-link dropdown-toggle text-white"
                    id="navbarDropdownQuemSomos"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    A Faculdade
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownQuemSomos"
                  >
                    <li>
                      <Link
                        href="/page/quem-somos"
                        className="dropdown-item text-white"
                      >
                        Apresentação
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/page/breve-historico-da-instituicao"
                        className="dropdown-item text-white"
                      >
                        Breve História
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/page/estrutura-organizacional"
                        className="dropdown-item text-white"
                      >
                        Estrutura organizacional
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/page/corpo-docente"
                        className="dropdown-item text-white"
                      >
                        Corpo docente
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/page/planos-de-cargos-e-carreira"
                        className="dropdown-item text-white"
                      >
                        Planos de Cargos e Carreiras
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    href="/page/palavra-do-diretor"
                    className="nav-link text-white"
                  >
                    Palavra do Diretor
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    href="#"
                    className="nav-link dropdown-toggle text-white"
                    id="navbarDropdownGraduacao"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Graduação
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownGraduacao"
                  >
                    <li>
                      <Link
                        href="/page/filosofia"
                        className="dropdown-item text-white"
                      >
                        Filosofia
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/page/teologia"
                        className="dropdown-item text-white"
                      >
                        Teologia
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/page/ciencias-religiosas"
                        className="dropdown-item text-white"
                      >
                        Ciência das Religiões
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    href="#"
                    className="nav-link dropdown-toggle text-white"
                    id="navbarDropdownPosGraduacao"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Pós Graduação
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownPosGraduacao"
                  >
                    <li>
                      <Link
                        href="/page/pos-graduacao-em-direito-publico"
                        className="dropdown-item text-white"
                      >
                        Direito público
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/page/historia-do-maranhao-e-africa"
                        className="dropdown-item text-white"
                      >
                        História do Maranhão e África
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/page/pos-graduacao-em-docencia-do-ensino-superior"
                        className="dropdown-item text-white"
                      >
                        Docência do ensino superior
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/page/pos-graduacao-lato-sensu-em-cultura-teologica"
                        className="dropdown-item text-white"
                      >
                        Cultura teológica
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/page/pos-graduacao-em-comunicacao-pastoral"
                        className="dropdown-item text-white"
                      >
                        Comunicação pastoral
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/page/pos-graduacao-em-liturgia"
                        className="dropdown-item text-white"
                      >
                        Liturgia
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    href="#"
                    className="nav-link dropdown-toggle text-white"
                    id="navbarDropdownCursosExtensao"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Extensão e Pesquisa
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownCursosExtensao"
                  >
                    <li>
                      <Link href="#" className="dropdown-item text-white">
                        Todos os cursos de extensão
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    href="#"
                    className="nav-link dropdown-toggle text-white"
                    id="navbarDropdownBiblioteca"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Biblioteca
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownBiblioteca"
                  >
                    <li>
                      <Link
                        href="/page/manual-de-normalizacao-de-monografia"
                        className="dropdown-item text-white"
                      >
                        Manual de Normalização de Monografia
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-white"
                        href="http://repositorio.iesma.edu.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Repositório Institucional
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item text-white"
                        href="https://bibliocons-iesma.eficaztech.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Consulta online
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/page/base-de-dados-para-pesquisa/"
                        className="dropdown-item text-white"
                      >
                        Periódicos para pesquisa
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    href="#"
                    className="nav-link dropdown-toggle text-white"
                    id="navbarDropdownServicos"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Serviços
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownServicos"
                  >
                    <li>
                      <Link
                        href="/page/taxas-de-servico-2023"
                        className="dropdown-item text-white"
                      >
                        Taxas de Serviços 2024
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/page/solicitacao-e-envio-de-documentos"
                        className="dropdown-item text-white"
                      >
                        Solicitação e Envio de Documentos
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    href="/blog"
                    className="nav-link btn rounded-pill text-white"
                  >
                    Notícias e Eventos
                  </Link>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="nav-link btn border rounded-pill bg-orange text-white"
                    onClick={openModal}
                  >
                    Matricular
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {isBlogPage && <ApresentationBlog />}
        {isHomePage && <Apresentation />}
      </header>
      <ModalRegister show={modalVisible} onClose={closeModal} />
    </>
  );
};

export default Navbar;
