import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa';

import styles from './about-us.scss';


const icons = {
  call_us: <FaPhone className={styles.icon} />,
  facebook: <FaFacebook className={styles.icon} />,
  instagram: <FaInstagram className={styles.icon} />,
  twitter: <FaTwitter className={styles.icon} />
};

const AboutUs = ({
  actions,
  handleClick,
  header,
  id,
  paragraphs,
  width }) => {

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
                {icons[id]}{paragraph}
              </p>
            );
          })
        )
      }
      {
        actions && (
          actions.map(({ key, title, url }, index) => {

            return (
              <p key={index} {...{
                className: classnames(styles.text, styles.action),
                onClick: e => handleClick(url, e)
              }}>
                {icons[key]}{title}
              </p>
            );
          })
        )
      }
    </div>
  );
};

AboutUs.propTypes = {
  actions: PropTypes.array,
  handleClick: PropTypes.func,
  header: PropTypes.string,
  id: PropTypes.string,
  paragraphs: PropTypes.array,
  width: PropTypes.string
};

export default AboutUs;