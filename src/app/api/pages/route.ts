// app/api/page/route.ts

import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const DOMAIN = 'https://iesma.com.br';
// const DOMAIN = 'https://faculdadecatolicadomaranhao.com'; // mudar pra esse depois de configurado

export async function GET(request: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return NextResponse.json(
      {
        error: true,
        message: 'Slug is required',
      },
      { status: 400 },
    );
  }

  try {
    const response = await axios.get(
      `${DOMAIN}/wp-json/wp/v2/${
        slug === 'pos-graduacao-em-liturgia' ? 'posts' : 'pages'
      }?slug=${slug}`,
    );
    if (response.status === 200) {
      return NextResponse.json(
        { error: false, data: response.data[0] },
        { status: 200 },
      );
    } else {
      return NextResponse.json(
        {
          error: true,
          message: 'Não foi possível processar a solicitação',
        },
        { status: response.status },
      );
    }
  } catch (err) {
    console.log('houve um erro', err);
    return NextResponse.json(
      {
        error: true,
        message: 'Não foi possível processar a solicitação',
      },
      { status: 500 },
    );
  }
}
