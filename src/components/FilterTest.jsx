'use client';

import { useState } from 'react';
import styles from '~/styles/components/FilterTest.module.scss';

export const FilterTest = () => {
  const [current, setCurrent] = useState('all');

  return (
    <div className={styles.root}>
      <select
        className={styles.select}
        value={current}
        onChange={(e) => {
          setCurrent(e.target.value);
        }}
      >
        {['all', 'odd', 'even'].map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
      <ul className={styles.list}>
        {[...Array(20)].map(
          (_, i) =>
            (current === 'all' ||
              (i % 2 === 0 && current === 'even') ||
              (i % 2 === 1 && current === 'odd')) && (
              <li className={styles.item} key={i}>
                {i}
              </li>
            )
        )}
      </ul>
    </div>
  );
};
