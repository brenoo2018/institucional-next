import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-2">
            <p className="fw-semibold">A Faculdade</p>
            <Link
              href="/page/quem-somos"
              className="text-decoration-none mb-2 text-secondary"
            >
              Quem somos
            </Link>
            <br />
            <Link
              href="/page/estrutura-organizacional"
              className="text-decoration-none mb-2 text-secondary"
            >
              Estrutura Organizacional
            </Link>
            <br />
            <Link
              href="/page/palavra-do-diretor"
              className="text-decoration-none mb-2 text-secondary"
            >
              Palavra do Diretor
            </Link>
            <br />
            <Link
              href="/page/guia-academico/"
              className="text-decoration-none mb-2 text-secondary"
            >
              Guia Acadêmico
            </Link>
            <br />
            <Link
              href="/page/corpo-docente"
              className="text-decoration-none mb-2 text-secondary"
            >
              Corpo docente
            </Link>
            <br />
            <Link
              href="/page/conap/"
              className="text-decoration-none mb-2 text-secondary"
            >
              CONAP
            </Link>
            <br />
            <Link
              href="/page/relatorios-enade/"
              className="text-decoration-none mb-2 text-secondary"
            >
              Relatórios ENADE
            </Link>
            <br />
            <Link
              href="/page/regimento-interno/"
              className="text-decoration-none mb-2 text-secondary"
            >
              Regimento interno
            </Link>
            <br />
            <Link
              href="/page/planos-de-cargos-e-carreira"
              className="text-decoration-none mb-2 text-secondary"
            >
              Planos de Cargos e Carreira
            </Link>
            <br />
          </div>
          <div className="col-sm-12 col-md-2">
            <p className="fw-semibold">Graduação</p>
            <Link
              href="/page/filosofia"
              className="text-decoration-none mb-2 text-secondary"
            >
              Filosofia
            </Link>
            <br />
            <Link
              href="/page/ciencias-religiosas"
              className="text-decoration-none mb-2 text-secondary"
            >
              Ciência das religiões
            </Link>
            <br />
            <Link
              href="/page/teologia"
              className="text-decoration-none mb-2 text-secondary"
            >
              Teologia
            </Link>
            <br />
          </div>
          <div className="col-sm-12 col-md-2">
            <p className="fw-semibold">Pós-Graduação</p>
            <Link
              href="/page/pos-graduacao-em-direito-publico"
              className="text-decoration-none mb-2 text-secondary"
            >
              Direito público
            </Link>
            <br />
            <Link
              href="/page/historia-do-maranhao-e-africa"
              className="text-decoration-none mb-2 text-secondary"
            >
              História do Maranhão e África
            </Link>
            <br />
            <Link
              href="/page/pos-graduacao-em-docencia-do-ensino-superior"
              className="text-decoration-none mb-2 text-secondary"
            >
              Docência do ensino superior
            </Link>
            <br />
            <Link
              href="/page/pos-graduacao-lato-sensu-em-cultura-teologica"
              className="text-decoration-none mb-2 text-secondary"
            >
              Cultura teológica
            </Link>
            <br />
            <Link
              href="/page/pos-graduacao-em-comunicacao-pastoral"
              className="text-decoration-none mb-2 text-secondary"
            >
              Comunicação pastoral
            </Link>
            <br />
            <Link
              href="/page/pos-graduacao-em-liturgia"
              className="text-decoration-none mb-2 text-secondary"
            >
              Liturgia
            </Link>
            <br />
          </div>
          <div className="col-sm-12 col-md-2">
            <p className="fw-semibold">Pesquisa e Inovação</p>
            <Link
              href="/page/extensao"
              className="text-decoration-none mb-2 text-secondary"
            >
              Núcleo de Extensão e Pesquisa Científica
            </Link>
            <br />
            <Link
              href="/page/xxxiv-semana-academica-iesma-2023-2"
              className="text-decoration-none mb-2 text-secondary"
            >
              XXXIV Semana Acadêmica – IESMA 2023
            </Link>
            <br />
          </div>
          <div className="col-sm-12 col-md-2">
            <p className="fw-semibold">Biblioteca</p>
            <Link
              href="/page/biblioteca"
              className="text-decoration-none mb-2 text-secondary"
            >
              Biblioteca
            </Link>
            <br />
            <Link
              href="/page/sobre-a-biblioteca"
              className="text-decoration-none mb-2 text-secondary"
            >
              Sobre a biblioteca
            </Link>
            <br />
            <Link
              href="/page/produtos-e-servicos/"
              className="text-decoration-none mb-2 text-secondary"
            >
              Produtos e serviços
            </Link>
            <br />
            <Link
              href="/page/base-de-dados-para-pesquisa/"
              className="text-decoration-none mb-2 text-secondary"
            >
              Periódicos para pesquisa
            </Link>
            <br />
            <Link
              href="/page/revista-ecos-do-iesma/"
              className="text-decoration-none mb-2 text-secondary"
            >
              Revista ECOS
            </Link>
            <br />
          </div>
          <div className="col-sm-12 col-md-2">
            <p className="fw-semibold">Outros</p>
            <Link
              href="/page/inscricoes-abertas"
              className="text-decoration-none mb-2 text-secondary"
            >
              Matrículas abertas
            </Link>
            <br />
            <Link
              href="/page/solicitacao-e-envio-de-documentos"
              className="text-decoration-none mb-2 text-secondary"
            >
              Solicitação e envio de docs
            </Link>
            <br />
            <Link
              href="/page/cpa"
              className="text-decoration-none mb-2 text-secondary"
            >
              CPA
            </Link>
            <br />
          </div>
          <div className="col-sm-12 col-md-2">
            <p className="fw-semibold">Ouvidoria</p>
            <Link href="#" className="text-decoration-none mb-2 text-secondary">
              (98) 3334-6458 - Telefone
            </Link>
            <br />
            <Link
              href="https://wa.me/5598985950295"
              className="text-decoration-none mb-2 text-secondary"
              target="_blank"
            >
              (98) 8595-0295 - WhatsApp
            </Link>
            <br />
          </div>
          <div className="col-sm-12 col-md-3">
            <Image
              src="/img/selo-mec.png"
              className="w-100 rounded-4 my-3"
              alt="Selo Mev"
              height={261}
              width={172}
            />
          </div>
        </div>
        <hr />
      </div>
      <div className="py-3">
        <div className="container text-secondary">
          Faculdade Católica do Maranhão - Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
};

export default Footer;
