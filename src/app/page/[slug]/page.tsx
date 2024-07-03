import Image from 'next/image';

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
  // console.log('🚀 ~ Page ~ page:', page);

  return (
    <main>
      <section>
        <div className="container">
          <div className="mx-md-5">
            <div className="my-4">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Início</a>
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
                src="https://iesma.com.br/wp-content/uploads/2024/01/cropped-cropped-Design-sem-nome-12.png"
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
            {page.featured_image_urls && page.featured_image_urls.full && (
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
          </div>
        </div>
      </section>
    </main>
  );
}
