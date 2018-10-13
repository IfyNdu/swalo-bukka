import { Site_Data } from 'model';
import React from 'react';
import AboutUs from './sub-components/about-us';


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
      <React.Fragment>
        {
          Site_Data.about_us.map((data, key) => {

            return <AboutUs key={key} {...{
              ...data,
              handleClick
            }} />;
          })
        }
      </React.Fragment>
    );
  }
}

export default AboutSection;