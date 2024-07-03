export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const slug = searchParams.get('slug');
  console.log('🚀 ~ GET ~ slug:', slug);

  try {
    const res = await fetch(
      `${process.env.WORDPRESS_API_URL}/pages?slug=${slug}`
    );
    const data = await res.json();

    if (!res.ok) {
      return Response.json({ message: res.statusText }, { status: 500 });
    }

    return Response.json({ page: data[0] });
  } catch (err) {
    console.error('houve um erro', err);
    return Response.json(
      { message: 'Não foi possível processar a solicitação' },
      { status: 500 }
    );
  }
}
