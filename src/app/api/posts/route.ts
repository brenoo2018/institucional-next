import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);

  const page = searchParams.get('page');
  const per_page = searchParams.get('per_page');

  try {
    const res = await fetch(
      `${process.env.WORDPRESS_API_URL}/?posts=${page}&per_page=${per_page}`
    );
    const data = await res.json();

    if (!res.ok) {
      console.error(data);
      throw new Error('Failed to fetch API');
    }

    const total = parseInt(res.headers.get('X-WP-Total') || '0', 10);

    return NextResponse.json({ pages: data, total });
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
