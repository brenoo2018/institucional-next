import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);

  const page = searchParams.get('page') || '1';
  const per_page = searchParams.get('per_page') || '10';

  try {
    const res = await fetch(
      `${process.env.WORDPRESS_API_URL}/posts?page=${page}&per_page=${per_page}`
    );
    const data = await res.json();
    // console.log('🚀 ~ GET ~ data:', data);

    if (!res.ok) {
      console.error(data);
      throw new Error('Failed to fetch API');
    }

    const total = parseInt(res.headers.get('X-WP-Total') || '0', 10);

    return NextResponse.json({ posts: data, total });
  } catch (err) {
    console.error('houve um erro', err);
    return NextResponse.json(
      {
        message: 'Não foi possível processar a solicitação',
      },
      { status: 500 }
    );
  }
}
