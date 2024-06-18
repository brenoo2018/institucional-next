export async function fetchAPI(
  endpoint: string,
  params: string = ''
): Promise<any> {
  const url = `${process.env.WORDPRESS_API_URL}${endpoint}${params}`;
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    console.error(data);
    throw new Error('Failed to fetch API');
  }

  return data;
}

export async function getPosts(
  page: number = 1,
  perPage: number = 20
): Promise<{ posts: any[]; total: number }> {
  const params = `?page=${page}&per_page=${perPage}`;
  const url = `${process.env.WORDPRESS_API_URL}/posts${params}`;
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    console.error(data);
    throw new Error('Failed to fetch API');
  }

  const total = parseInt(res.headers.get('X-WP-Total') || '0', 10);
  return { posts: data, total };
}

export async function getPostBySlug(slug: string): Promise<any> {
  const params = `?slug=${slug}`;
  const posts = await fetchAPI('posts', params);
  return posts[0];
}

export async function getPages(
  page: number = 1,
  perPage: number = 20
): Promise<any[]> {
  const params = `?page=${page}&per_page=${perPage}`;
  return fetchAPI('pages', params);
}

export async function getPageBySlug(slug: string): Promise<any> {
  const params = `?slug=${slug}`;
  const pages = await fetchAPI('pages', params);
  return pages[0];
}