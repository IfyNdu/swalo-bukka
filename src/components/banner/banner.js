import { Site_Data } from 'model';
import React from 'react';
import OverlayContent from '../overlay-content/overlay-content';

import styles from './banner.scss';


const Banner = () => {

  return (
    <div className={styles.root}>
      <div className={styles.overlay} />
      <OverlayContent count={1} />
      <h1 className={styles.title}>{Site_Data.title}</h1>
    </div>
  );
};

export default Banner;