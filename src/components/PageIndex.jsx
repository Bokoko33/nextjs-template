import Image from 'next/image';
import { FilterTest } from '~/components/FilterTest';
import styles from '~/styles/components/PageIndex.module.scss';

export const PageIndex = () => {
  return (
    <div className={styles.root}>
      <p className={styles.copy}>This is Next.js Template</p>

      <ul className={styles.list}>
        {[...Array(2)].map((_, i) => (
          <li className={styles.item} key={i}>
            <Image
              src={`/images/sample_0${i + 1}.jpg`}
              fill={true}
              sizes="100vw"
              alt=""
              priority={true}
              style={{
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </li>
        ))}
      </ul>

      <p className={styles.desc}>Client Component</p>
      <FilterTest />
    </div>
  );
};
