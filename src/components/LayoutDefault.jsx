import { GlobalHeader } from '~/components/GlobalHeader';
import styles from '~/styles/components/LayoutDefault.module.scss';

export const LayoutDefault = ({ children }) => {
  return (
    <>
      <GlobalHeader />

      <main className={styles.main}>{children}</main>
    </>
  );
};
