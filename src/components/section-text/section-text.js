import PropTypes from 'prop-types';
import React from 'react';

import styles from './section-text.scss';

const SectionText = ({ header, padding, paddingEdge, paragraphs }) => {

  return (
    <div {...{
      className: styles.root,
      style: {
        [paddingEdge]: padding
      }
    }}>
      {
        header && (<h2 {...{
          className: styles.header,
          // style
        }}>{header}</h2>)
      }
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
    </div>
  );
};

SectionText.propTypes = {
  header: PropTypes.string,
  padding: PropTypes.string,
  paddingEdge: PropTypes.string,
  paragraphs: PropTypes.array
};

export default SectionText;