import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import OverlayContent from '../../overlay-content/overlay-content';

import styles from './about-us.scss';


const AboutUs = ({ actions, handleClick, header, paragraphs, width }) => {

  const style = { width };

  return (
    <div className={styles.root}>
      <h2 className={styles.header}>{header}</h2>
      {
        paragraphs && (
          paragraphs.map((paragraph, index) => {

            return (
              <p key={index} {...{
                className: styles.text,
                key: index,
                style
              }} >
                {paragraph}
              </p>
            );
          })
        )
      }
      {
        actions && (
          actions.map(({ title, url }, index) => {

            return (
              <React.Fragment key={`about-us--${index}`}>
                <p key={index} {...{
                  className: classnames(styles.text, styles.action),
                  onClick: e => handleClick(url, e)
                }}>
                  {title}
                </p><br />
              </React.Fragment>
            );
          })
        )
      }
      <OverlayContent count={1} />
    </div>
  );
};

AboutUs.propTypes = {
  actions: PropTypes.array,
  handleClick: PropTypes.func,
  header: PropTypes.string,
  paragraphs: PropTypes.array,
  width: PropTypes.string
};

export default AboutUs;