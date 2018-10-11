import React from 'react';
import OverlayContent from '../overlay-content/overlay-content';

import styles from './hero.scss';


const Hero = () => {

  return (
    <div className={styles.root}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>
          Shizuku <br />
          Modern Japanese <br />
          Ramen & Craft Beer
          <OverlayContent count={2} />
        </h1>
      </div>
      <div className={styles.descriptionWrapper}>
        <p className={styles.description}>
          Shizuku is not your average Japanese restaurant. That’s partly because we serve the best ramen in Melbourne, and partly because our menu has a creative flair. Unlike other Japanese venues we also offer a serious selection of craft beer. And while we could go on about how ramen and beer is the perfect pair, there’s only one way to discover it for yourself.
        </p>
        <OverlayContent count={3} />
      </div>
    </div>
  );
};

export default Hero;