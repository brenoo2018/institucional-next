import { Metadata } from 'next';

type TPropsPost = {
  params: {
    slug: string;
  };
};

// export const generateMetadata = ({ params }: TPropsPost): Metadata => {
//   return {
//     title: `Post ${params.slug}`,
//     description: 'Here you can find my blog posts.',
//   };
// };
export const generateMetadata = async ({
  params,
}: TPropsPost): Promise<Metadata> => {
  const title = await new Promise((resolve) => setTimeout(resolve, 1000)).then(
    () => `Post ASYNC ${params.slug}`
  );
  return {
    title,
    description: 'Here you can find my blog posts.',
  };
};

export default function Post({ params }: TPropsPost) {
  return (
    <div>
      <h1>Post {params.slug}</h1>
    </div>
  );
}
