import { Site_Data } from 'model';
import React from 'react';
import {
  AboutUsSection,
  Banner,
  ContactSection,
  Floater,
  Hero,
  Imagery,
  MapContainer,
  SectionColumn,
  SectionImage,
  SectionText
} from 'components';

import styles from './app.scss';


class App extends React.Component {

  render() {

    return (
      <React.Fragment>
        <Banner />
        <Floater
          {...Site_Data.logo_floater} />
        <Floater
          {...Site_Data.hamburger_floater} />
        <Hero {...Site_Data.hero} />
        <div className={styles.sections}>
          <SectionColumn>
            <Imagery {...{
              articles: Site_Data.section1.articles,
              height: '704px',
              width: '90%'
            }} />
            <SectionText {...{
              header: Site_Data.section1.header,
              padding: Site_Data.section1.padding,
              paddingEdge: Site_Data.section1.paddingEdge,
              paragraphs: Site_Data.section1.paragraphs,
            }} />
            <SectionImage {...{
              height: '461px',
              url: 'https://media.giphy.com/media/Yab54vTDJk89y/giphy.gif',
              width: '90%'
            }} />
            <SectionImage {...{
              height: '345px',
              url: 'https://s3-eu-west-1.amazonaws.com/swalo-buka/img/pexels-photo-390403.jpeg',
              width: '90%'
            }} />
          </SectionColumn>
          <SectionColumn>
            <SectionText {...{
              padding: Site_Data.section2.padding,
              paddingEdge: Site_Data.section2.paddingEdge,
              paragraphs: Site_Data.section2.paragraphs
            }} />
            <SectionImage {...{
              height: '479px',
              url: 'https://s3-eu-west-1.amazonaws.com/swalo-buka/img/food-salad-dinner-eating.jpg',
              width: '90%'
            }} />
            <SectionImage {...{
              height: '479px',
              url: 'https://s3-eu-west-1.amazonaws.com/swalo-buka/img/food-restaurant-menu-asia.jpg',
              width: '90%'
            }} />
            <Imagery {...{
              articles: Site_Data.section2.articles,
              height: '435px',
              width: '90%'
            }} />
          </SectionColumn>
          <SectionColumn>
            <AboutUsSection />
          </SectionColumn>
          <SectionColumn>
            <ContactSection />
            <MapContainer {...{
              height: Site_Data.map.height,
              initialCenter: Site_Data.map.initialCenter,
              name: Site_Data.title,
              zoom: Site_Data.map.zooom
            }} />
          </SectionColumn>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
