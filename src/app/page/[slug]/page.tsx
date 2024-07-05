import Image from 'next/image';
import Link from 'next/link';

type TPropsPage = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: TPropsPage) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/page?slug=${params.slug}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const result = await response.json();
  const { page } = result;

  let contentRendered = page.content.rendered;
  let imageUrl = '';
  let textContent = contentRendered;
  let lastParagraph = '';

  if (params.slug === 'palavra-do-diretor') {
    // Extrair URL da imagem do conteúdo renderizado
    const imageUrlMatch = contentRendered.match(/<img[^>]+src="([^">]+)"/);
    imageUrl = imageUrlMatch ? imageUrlMatch[1] : '';

    // Extrair e remover o último parágrafo do conteúdo renderizado
    let paragraphs = contentRendered.match(/<p[^>]*>.*?<\/p>/gs) || [];
    lastParagraph = paragraphs.pop(); // Pega o último parágrafo
    textContent = paragraphs.join(''); // Recria o conteúdo sem o último parágrafo

    // Remover a imagem do conteúdo principal
    textContent = textContent.replace(/<figure.*<\/figure>/, '').trim();
  }

  return (
    <main>
      <section>
        <div className="container">
          <div className="mx-md-5">
            <div className="my-4">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/">Início</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {page.title.rendered}
                  </li>
                </ol>
              </nav>
            </div>
            <h1>{page.title.rendered}</h1>
            <div className="d-flex my-3">
              <Image
                src="/img/logo_normal.png"
                width={40}
                height={40}
                className="rounded-circle object-fit-cover"
                alt="Logo"
              />
              <div>
                <p className="m-0 fw-semibold">IESMA</p>
                <p className="m-0 tiny-text">
                  {new Date(page.modified_gmt).toLocaleString()}
                </p>
              </div>
            </div>
            <>
              {params.slug === 'palavra-do-diretor' ? (
                <div className="row align-items-center my-4">
                  <div className="col-lg-5 col-md-6 text-center">
                    <div className="img-diretor">
                      <Image
                        height={400}
                        width={400}
                        src={imageUrl}
                        alt="Imagem do Diretor"
                        className="img-fluid rounded-circle border border-white"
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 col-md-6 mt-4 mt-md-0">
                    <div
                      id="content-post"
                      className="wp-content"
                      dangerouslySetInnerHTML={{ __html: textContent }}
                    />
                    <div
                      id="content-post"
                      className="wp-content text-end"
                      dangerouslySetInnerHTML={{ __html: lastParagraph }}
                    />
                  </div>
                </div>
              ) : (
                <>
                  {page.featured_image_urls &&
                    page.featured_image_urls.full && (
                      <Image
                        className="object-fit-contain w-100 rounded-4 my-4 bg-light"
                        style={{ aspectRatio: '16/9' }}
                        src={page.featured_image_urls.full[0]}
                        alt="Featured"
                        width={800}
                        height={450}
                      />
                    )}
                  <div
                    id="content-post"
                    className="wp-content"
                    dangerouslySetInnerHTML={{ __html: page.content.rendered }}
                  />
                </>
              )}
            </>
          </div>
        </div>
      </section>
    </main>
  );
}
