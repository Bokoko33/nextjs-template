import { PageAbout } from '~/components/PageAbout';
import { getMetaData } from '~/libs/metaData';

export async function generateMetadata() {
  return getMetaData();
}

export default function About() {
  return <PageAbout />;
}
