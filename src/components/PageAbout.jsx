import Image from 'next/image';
import styles from '~/styles/components/PageAbout.module.scss';

export const PageAbout = () => {
  return (
    <div className={styles.root}>
      <p className={styles.text}>
        This is about page
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat natus
        velit a. Maxime ratione delectus, veniam aliquam ipsa ut excepturi
        adipisci debitis ipsam mollitia dolorum fugiat quis harum voluptas
        asperiores?
      </p>
    </div>
  );
};
