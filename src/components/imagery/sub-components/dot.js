import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './dot.scss';


const Dot = ({ currentIndex, index, onClickHandler }) => {

  return (

    <div {...{
      className: classnames(styles.dot, {
        [styles.selected]: currentIndex === index
      }),
      onClick: e => onClickHandler(e, index)
    }} />
  );
};

Dot.propTypes = {
  currentIndex: PropTypes.number,
  index: PropTypes.number,
  onClickHandler: PropTypes.func
};

export default Dot;