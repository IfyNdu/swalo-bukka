import PropTypes from 'prop-types';
import React from 'react';

import styles from './hero.scss';


const Hero = ({ body }) => {

  return (
    <div className={styles.root}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>
          Loreum <br />
          Ipsum dolor <br />
          sit amet & consectetur
        </h1>
      </div>
      <div className={styles.descriptionWrapper}>
        <p className={styles.description}>{body}</p>
      </div>
    </div>
  );
};

Hero.propTypes = {
  body: PropTypes.string
};

export default Hero;