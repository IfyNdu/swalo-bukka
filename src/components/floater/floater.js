import PropTypes from 'prop-types';
import React from 'react';
import OverlayContent from '../overlay-content/overlay-content';

import styles from './floater.scss';


const Floater = ({ bounds, children }) => {

  return (
    <div {...{
      className: styles.root,
      style: bounds
    }}>
      {children}
      <OverlayContent count={4} />
    </div>
  );
};

Floater.propTypes = {
  bounds: PropTypes.object,
  children: PropTypes.array
};

export default Floater;