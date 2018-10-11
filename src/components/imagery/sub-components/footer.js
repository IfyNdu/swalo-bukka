import PropTypes from 'prop-types';
import React from 'react';
import Dot from './dot';

import styles from './footer.scss';


const Footer = ({ articles, currentIndex, onClickHandler }) => {

  return (

    <div className={styles.container}>
      {
        articles && (
          articles.map((_, index) => {

            return (
              <Dot key={index} {...{
                currentIndex,
                index,
                onClickHandler
              }} />
            );
          })
        )
      }
    </div>
  );
};

Footer.propTypes = {
  articles: PropTypes.array,
  currentIndex: PropTypes.number,
  onClickHandler: PropTypes.func
};

export default Footer;