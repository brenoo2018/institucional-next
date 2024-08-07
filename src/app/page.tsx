import {
  Divider,
  SectionCourses,
  SectionDepositions,
  SectionOurStudent,
  SectionStatistics,
  SectionTrust,
} from '@/components/';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Faculdade Católica do Maranhão - Página Inicial',
  description:
    'Descubra uma educação transformadora na Faculdade Católica do Maranhão. Cursos de qualidade, infraestrutura moderna e um ambiente acolhedor para seu crescimento acadêmico e pessoal.',
  keywords: [
    'faculdade',
    'católica',
    'do',
    'maranhão',
    'são luís',
    'educação',
    'cursos',
    'infraestrutura',
    'ambiente acolhedor',
  ],
  authors: [{ name: 'Pe. Iran Gomes' }],
  openGraph: {
    title: 'Faculdade Católica do Maranhão - Página Inicial',
    description:
      'Descubra uma educação transformadora na Faculdade Católica do Maranhão. Cursos de qualidade, infraestrutura moderna e um ambiente acolhedor para seu crescimento acadêmico e pessoal.',
    type: 'website',
    url: 'https://www.faculdadecatolicadomaranhao.com/', // URL da sua página inicial
    images: [
      {
        url: 'https://iesma.com.br/wp-content/uploads/2024/01/cropped-cropped-cropped-Design-sem-nome-12-192x192.png', // URL da imagem de destaque
        width: 1200,
        height: 630,
        alt: 'Faculdade Católica do Maranhão',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Faculdade Católica do Maranhão - Página Inicial',
    description:
      'Descubra uma educação transformadora na Faculdade Católica do Maranhão. Cursos de qualidade, infraestrutura moderna e um ambiente acolhedor para seu crescimento acadêmico e pessoal.',
    images: [
      'https://iesma.com.br/wp-content/uploads/2024/01/cropped-cropped-cropped-Design-sem-nome-12-192x192.png',
    ], // URL da imagem de destaque
  },
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  icons: {
    icon: '/img/favicon.ico', // Caminho para o seu favicon
  },
  alternates: {
    canonical: 'https://www.faculdadecatolicadomaranhao.com/', // URL canônica da sua página
  },
};

export default function Home() {
  return (
    <>
      <Divider />
      <SectionTrust />
      <SectionCourses />
      <SectionStatistics />
      <Divider />
      <SectionDepositions />
      <SectionOurStudent />
    </>
  );
}
