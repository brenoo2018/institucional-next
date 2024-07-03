import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);

  const slug = searchParams.get('slug');

  try {
    const res = await fetch(
      `${process.env.WORDPRESS_API_URL}/posts?slug=${slug}`
    );
    const data = await res.json();

    if (!res.ok) {
      console.error(data);
      throw new Error('Failed to fetch API');
    }

    return NextResponse.json({ page: data[0] }, { status: 200 });
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
