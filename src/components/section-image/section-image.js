import PropTypes from 'prop-types';
import React from 'react';

import styles from './section-image.scss';


const SectionImage = ({ height, url, width }) => {

  const style = {
    backgroundImage: `url(${url})`,
    height,
    width
  };

  return (

    <div className={styles.root}>
      <div className={styles.pic} style={style}>
      </div>
    </div >
  );
};

SectionImage.propTypes = {
  appear: PropTypes.bool,
  height: PropTypes.string,
  url: PropTypes.string,
  width: PropTypes.string
};

export default SectionImage;