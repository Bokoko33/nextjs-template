import Image from 'next/image';
import Link from 'next/link';
import styles from '~/styles/components/GlobalHeader.module.scss';

export const GlobalHeader = () => {
  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <Link href="/" className={styles.link}>
          top
        </Link>
        <Link href="/about" className={styles.link}>
          about
        </Link>
      </div>
    </header>
  );
};
