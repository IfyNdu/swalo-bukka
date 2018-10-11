import PropTypes from 'prop-types';
import React from 'react';

import styles from './section-column.scss';


class SectionColumn extends React.Component {

  constructor(props) {

    super(props);
  }

  render() {

    return (
      <div className={styles.root}>
        {this.props.children}
      </div>
    );
  }
}

SectionColumn.propTypes = {
  children: PropTypes.array
};

export default SectionColumn;