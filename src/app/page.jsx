import { PageIndex } from '~/components/PageIndex';
import { getMetaData } from '~/libs/metaData';

export async function generateMetadata() {
  return getMetaData();
}

export default function Home() {
  return <PageIndex />;
}
