import PropTypes from 'prop-types';
import React from 'react';
import Image from './sub-components/image';
import Footer from './sub-components/footer';

import styles from './imagery.scss';


const interval = 3000;

class Carousel extends React.Component {

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

    this.setState({
      animateCurrIndex: currentIndex,
      currentIndex
    });
  }

  renderSlides = () => this.state.articles.map(({ url }, i) => {

    const { currentIndex, height } = this.state;

    return (
      <Image key={`image--${i}`} {...{
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
    const style = { height, width };

    return (
      <div className={styles.container}>
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
      </div>
    );
  }
}

Carousel.propTypes = {
  articles: PropTypes.array,
  height: PropTypes.string,
  width: PropTypes.string
};

export default Carousel;