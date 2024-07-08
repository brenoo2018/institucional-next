import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

type TPropsPost = {
  params: {
    slug: string;
  };
};

// export const generateMetadata = ({ params }: TPropsPost): Metadata => {
//   return {
//     title: `Post ${params.slug}`,
//     description: 'Here you can find my blog posts.',
//   };
// };
export const generateMetadata = async ({
  params,
}: TPropsPost): Promise<Metadata> => {
  const title = await new Promise((resolve) => setTimeout(resolve, 1000)).then(
    () => `Post ASYNC ${params.slug}`
  );
  return {
    title,
    description: 'Here you can find my blog posts.',
  };
};

export default async function Post({ params }: TPropsPost) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/post?slug=${params.slug}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  const result = await response.json();
  const { post } = result;

  return (
    <main>
      <section>
        <div className="container">
          <div className="mx-md-5">
            <div className="my-4">
              <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/blog">Notícias</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {post.title.rendered}
                  </li>
                </ul>
              </nav>
            </div>
            <h1>{post.title.rendered}</h1>
            <div className="d-flex my-3">
              <Image
                src="/img/logo_normal.png"
                width={40}
                height={40}
                className="rounded-circle object-fit-cover"
                alt="Logo"
                quality={100}
                unoptimized
              />
              <div>
                <p className="m-0 fw-semibold">
                  {' '}
                  Faculdade Católica do Maranhão
                </p>
                <p className="m-0 tiny-text">
                  {new Date(post.modified_gmt).toLocaleString()}
                </p>
              </div>
            </div>
            {post.featured_image_urls && post.featured_image_urls.full && (
              <Image
                className="object-fit-contain w-100 rounded-4 my-4 bg-light"
                style={{ aspectRatio: '16/9' }}
                src={post.featured_image_urls.full[0]}
                alt="Featured"
                width={800}
                height={450}
              />
            )}
            <div
              id="content-post"
              className="wp-content"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
