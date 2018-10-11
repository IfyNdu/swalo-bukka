import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './article.scss';


const Article = ({
  currentIndex,
  index,
  url,
  height
}) => {

  const imageStyle = {
    backgroundImage: `url(${url})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height
  };

  return (

    <div {...{
      className: classnames(styles.container, {
        [styles.current]: index === currentIndex
      })
    }}>
      <div {...{
        className: classnames(styles.imageContainer),
        style: imageStyle
      }} />
    </div>
  );
};

Article.propTypes = {
  currentIndex: PropTypes.number,
  index: PropTypes.number,
  url: PropTypes.string
};

export default Article;