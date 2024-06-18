type TPropsPost = {
  params: {
    slug: string;
  };
};

export default function Post({ params }: TPropsPost) {
  return (
    <div>
      <h1>Post {params.slug}</h1>
    </div>
  );
}
