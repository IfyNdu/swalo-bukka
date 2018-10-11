import classnames from 'classnames';
import { Site_Data } from 'model';
import React from 'react';
import OverlayContent from '../overlay-content/overlay-content';

import styles from './contact-section.scss';


const ContactSection = () => {

  return (
    <form className={styles.root}>
      {
        Site_Data.contact_us && (
          Site_Data.contact_us.map(({ input, key, name, placeholder, type }) => {

            return input === 'input'
              ? <input key={key} {...{
                className: styles.text,
                name,
                placeholder,
                type
              }} />
              : <textarea key={key} {...{
                className: classnames(styles.text, styles.textArea),
                name,
                placeholder
              }} />;
          })
        )
      }
      <button className={styles.submit}>SUBMIT</button>
      <OverlayContent count={1} />
    </form>
  );
};

export default ContactSection;