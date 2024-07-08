import Image from 'next/image';
import { Divider } from './_common';

const ApresentationBlog = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="pe-md-5">
              <h1
                className="text-white mb-4 mt-5"
                style={{ fontSize: '100px' }}
              >
                Blog{' '}
                <span className="text-orange" style={{ fontSize: '150px' }}>
                  .
                </span>
              </h1>
              <h2 className="text-white fw-light fs-4 mb-5">
                Blog da Faculdade Católica do Maranhão: Artigos, ensinamentos e
                muito mais.
              </h2>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <Image
              src="/img/persona-blog.png"
              className="w-100"
              alt="Perfil blog"
              height={546}
              width={384}
              unoptimized
            />
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default ApresentationBlog;
