import Image from 'next/image';

const SectionTrust = () => {
  return (
    <section className="my-5">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div
              className="border rounded-4 overflow-hidden mb-3"
              style={{ height: '225px' }}
            >
              <div className="row m-0">
                <div className="col-4 p-0">
                  <Image
                    src="/img/e1.png"
                    className="w-100 object-fit-cover"
                    style={{ height: '225px' }}
                    alt="Estrutura organizacional"
                    width={150}
                    height={225}
                  />
                </div>
                <div className="col-8">
                  <div className="p-3">
                    <h3>Estrutura organizacional</h3>
                    <p>
                      Temos a oferecer a melhor estrutura organizacional para
                      uma formação de excelência!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div
              className="border rounded-4 overflow-hidden mb-3"
              style={{ height: '225px' }}
            >
              <div className="row m-0">
                <div className="col-4 p-0">
                  <Image
                    src="/img/e2.png"
                    className="w-100 object-fit-cover"
                    style={{ height: '225px' }}
                    alt="Corpo docente"
                    width={150}
                    height={225}
                  />
                </div>
                <div className="col-8">
                  <div className="p-3">
                    <h3>Corpo docente</h3>
                    <p>Os melhores e mais qualificados estão aqui.</p>
                    <div className="d-flex gap-2">
                      <Image
                        src="/img/george.jpg"
                        className="aspect-ratio-1 rounded-circle object-fit-cover position-relative border-2"
                        width={50}
                        height={50}
                        alt="George"
                      />
                      <Image
                        src="/img/antônio-jose- soares.jpg"
                        className="aspect-ratio-1 rounded-circle object-fit-cover position-relative border-2"
                        style={{ left: '-20px' }}
                        width={50}
                        height={50}
                        alt="Antônio José Soares"
                      />
                      <Image
                        src="/img/claudio-correa.jpeg"
                        className="aspect-ratio-1 rounded-circle object-fit-cover position-relative border-2"
                        style={{ left: '-40px' }}
                        width={50}
                        height={50}
                        alt="Claudio Correa"
                      />
                      <Image
                        src="/img/claudio-roberto.jpg"
                        className="aspect-ratio-1 rounded-circle object-fit-cover position-relative border-2"
                        style={{ left: '-60px' }}
                        width={50}
                        height={50}
                        alt="Claudio Roberto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4">
            <div
              className="border rounded-4 overflow-hidden mb-3"
              style={{ height: '225px' }}
            >
              <Image
                src="/img/selo-mec.png"
                className="h-100 rounded-4"
                alt="Selo MEC"
                width={339}
                height={223}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTrust;
