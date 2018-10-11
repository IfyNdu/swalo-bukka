import PropTypes from 'prop-types';
import React from 'react';

import styles from './overlay-content.scss';


const OverlayContent = ({ count }) => {

  return (
    <div className={styles.root}>
      <span className={styles.count}>{count}</span>
    </div>
  );
};

OverlayContent.propTypes = {

  count: PropTypes.number
};

export default OverlayContent;