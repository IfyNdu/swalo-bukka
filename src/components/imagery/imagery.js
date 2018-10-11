import React, { Component } from 'react';
import Article from './sub-components/article';
import Footer from './sub-components/footer';
import OverlayContent from '../overlay-content/overlay-content';

import styles from './imagery.scss';

const interval = 2000;

class Carousel extends Component {

  constructor(props) {
    super(props);

    this.state = {

      animateCurrIndex: 0,
      articles: [],
      currentIndex: 0,
    };

    this.timer = null;
  }

  componentDidMount() {

    this.setState(this.props);

    this.timer = setInterval(this.changeRamdomSlide, interval);
  }

  changeRamdomSlide = () => {

    this.handleClick(Math.floor(Math.random() * Math.floor(this.props.articles.length)));
  }

  onClickHandler = (_, currentIndex) => {

    clearTimeout(this.timer);
    this.handleClick(currentIndex);
    this.timer = setInterval(this.changeRamdomSlide, interval);
  }

  handleClick(currentIndex) {

    const stateValues = {

      animateCurrIndex: currentIndex,
      currentIndex
    };

    this.setState(stateValues);
  }


  renderSlides = () => this.state.articles.map(({ url }, i) => {

    const { currentIndex, height } = this.state;

    return (
      <Article key={`article--${i}`} {...{
        currentIndex,
        height,
        index: i,
        url
      }} />
    );
  })

  render() {

    const { articles, currentIndex, height, width } = this.state;
    const { onClickHandler, renderSlides } = this;
    const style = {
      height,
      width
    };

    return (
      <div {...{
        className: styles.container,
        // style
      }}>
        <div {...{
          className: styles.carousel,
          style
        }}>
          {this.state.articles && renderSlides()}
        </div>
        <Footer {...{
          articles,
          currentIndex,
          onClickHandler
        }} />
        <OverlayContent count={2} />
      </div>
    );
  }

}

export default Carousel;