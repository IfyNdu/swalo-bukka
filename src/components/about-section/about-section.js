import { Site_Data } from 'model';
import React from 'react';
import AboutUs from './sub-components/about-us';

import styles from './about-section.scss';


class AboutSection extends React.Component {

  constructor(props) {

    super(props);
  }

  handleClick = url => {
    window.open(url, '_blank');
  }

  render() {

    const { handleClick } = this;

    return (
      <div className={styles.root}>
        {
          Site_Data.about_us.map((data, key) => {

            return <AboutUs key={key} {...{
              ...data,
              handleClick
            }} />;
          })
        }
      </div>
    );
  }
}

export default AboutSection;