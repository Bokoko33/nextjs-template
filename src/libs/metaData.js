const SITE_NAME = 'Next.js Template';
const DESCRIPTION = 'This is Next.js Template';
const URL = '';

export const getMetaData = ({ title } = {}) => {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  return {
    title: pageTitle,
    description: DESCRIPTION,
    openGraph: {
      title: pageTitle,
      description: DESCRIPTION,
      url: URL,
      siteName: SITE_NAME,
      locale: 'ja_JP',
      type: 'website',
      images: ['/images/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: DESCRIPTION,
    },
  };
};
