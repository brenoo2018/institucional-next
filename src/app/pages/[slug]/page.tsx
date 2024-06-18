type TPropsPage = {
  params: {
    slug: string;
  };
};

export default function Page({ params }: TPropsPage) {
  return (
    <div>
      <h1>Page {params.slug}</h1>
    </div>
  );
}
