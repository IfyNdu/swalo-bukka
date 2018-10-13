import PropTypes from 'prop-types';
import React from 'react';

import styles from './floater.scss';


const Floater = ({ bounds, children, url }) => {

  return (
    <div {...{
      className: styles.root,
      style: {
        ...bounds,
        backgroundImage: `url(${url})`
      }
    }}>
      {children}
    </div>
  );
};

Floater.propTypes = {
  bounds: PropTypes.object,
  children: PropTypes.array
};

export default Floater;