import { PageIndex } from '~/components/PageIndex';

export async function generateMetadata() {
  const title = 'Next.js Template';
  const description = 'This is Next.js Template';

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: 'localhost:3000',
      siteName: title,
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function Home() {
  return <PageIndex />;
}
