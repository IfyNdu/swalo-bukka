import PropTypes from 'prop-types';
import React from 'react';
import OverlayContent from '../overlay-content/overlay-content';

import styles from './section-text.scss';


const SectionText = ({ header, padding, paddingEdge, paragraphs, width }) => {

  const style = { width };

  return (
    <div {...{
      className: styles.root,
      style: {
        [paddingEdge]: padding,
        width: style.width
      }
    }}>
      <h2 {...{
        className: styles.header,
        // style
      }}>{header}</h2>
      {
        paragraphs && (
          paragraphs.map((paragraph, index) => {

            return (
              <p key={index} {...{
                className: styles.text,
                key: index,
                // style
              }} >
                {paragraph}
              </p>
            );
          })
        )
      }
      <OverlayContent count={5} />
    </div>
  );
};

SectionText.propTypes = {
  header: PropTypes.string,
  padding: PropTypes.string,
  paddingEdge: PropTypes.string,
  paragraphs: PropTypes.array,
  width: PropTypes.string
};

export default SectionText;