import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const DOMAIN = 'https://iesma.com.br';
// const DOMAIN = 'https://faculdadecatolicadomaranhao.com'; // mudar pra esse depois de configurado

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const response = await axios.get(
      `${DOMAIN}/wp-json/wp/v2/posts?per_page=100`,
    );
    if (response.status === 200) {
      return NextResponse.json(
        { error: false, data: response.data },
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
