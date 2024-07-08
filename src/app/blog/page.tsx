import Pagination from '@/components/Pagination';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

type TPropsSearchParams = {
  page?: string;
  per_page?: string;
};

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Generated by create next app',
};

export default async function Blog({
  searchParams,
}: {
  searchParams?: TPropsSearchParams;
}) {
  const page = searchParams?.page || '1';
  const per_page = searchParams?.per_page || '10';
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  const response = await fetch(
    `${baseUrl}/api/posts?page=${page}&per_page=${per_page}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }
  );
  const { posts, total } = await response.json();
  // console.log('🚀 ~ posts:', posts);

  return (
    // <h1>blog</h1>
    <div>
      <main>
        <div className="container">
          <div className="position-relative" style={{ top: '-50px' }}>
            <div className="row mt-3">
              {posts.slice(0, 6).map((post: any) => (
                <div className="col-sm-12 col-md-4 mb-3" key={post.id}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-decoration-none text-black"
                  >
                    <div className="p-3 border rounded-4 bg-white tiny-text h-100">
                      <div className="row">
                        <div className="col-7">
                          <div className="d-flex justify-content-between">
                            <button className="btn btn-sm bg-orange rounded-pill text-white mb-3">
                              Notícia
                            </button>
                            <p className="m-0 tiny-text">
                              {new Date(post.modified_gmt).toLocaleDateString()}
                            </p>
                          </div>
                          <h2 className="text-decoration-none text-black fs-3">
                            {post.title.rendered.length > 40
                              ? `${post.title.rendered.slice(0, 40)}...`
                              : post.title.rendered}
                          </h2>
                          <div
                            style={{ textAlign: 'justify' }}
                            dangerouslySetInnerHTML={{
                              __html: post.excerpt.rendered,
                            }}
                          />
                          <Link
                            href={`/blog/${post.slug}`}
                            className="btn rounded-pill border border-secondary me-2"
                          >
                            Ler mais <i className="bi bi-arrow-right-short"></i>
                          </Link>
                        </div>
                        <div className="col-5">
                          <div className="cover-blog-hero">
                            <Image
                              src={post.featured_image_urls.full[0]}
                              className="w-100 h-100 rounded-4 object-fit-cover shadow-lg"
                              alt=""
                              width={300}
                              height={300}
                              quality={100}
                              unoptimized
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <h2 className="mb-5">
            <i className="bi bi-list-stars me-3"></i>Mais artigos
          </h2>
          <div className="row">
            {posts.slice(6).map((post: any) => (
              <div className="col-sm-12 mb-3" key={post.id}>
                <div className="p-3 border rounded-4">
                  <div className="row">
                    <div className="col-3">
                      <Image
                        src={post.featured_image_urls.full[0]}
                        style={{ aspectRatio: '1/1' }}
                        className="h-100 w-100 object-fit-cover rounded-4"
                        alt=""
                        width={100}
                        height={100}
                        quality={100}
                        unoptimized
                      />
                    </div>
                    <div className="col-9">
                      <h2
                        className="d-inline-block text-truncate"
                        style={{ maxWidth: '100%' }}
                      >
                        {post.title.rendered}
                      </h2>
                      <div
                        style={{ textAlign: 'justify' }}
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt.rendered,
                        }}
                      />
                      <Link
                        href={`/blog/${post.slug}`}
                        className="btn rounded-pill border border-secondary me-2"
                      >
                        Ler mais <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Pagination
        page={Number(page)}
        per_page={Number(per_page)}
        total={total}
      />
    </div>
  );
}
