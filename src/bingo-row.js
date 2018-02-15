import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BingoHeading from './bingo-heading';
import words from './words';

const headerData = ['B', 'I', 'N', 'G', 'O'];

export default class BingoRow extends Component {

  render() {
    const { isHeaderRow } = this.props;
    let cells;
    if (isHeaderRow) {
      cells = headerData.map((letter, idx) => {
        return <BingoHeading key={ idx }>{ letter }</BingoHeading>;
      });
    } else {
      
    }
    return (
      <tr>{ cells }</tr>
    );
  }  
}

BingoRow.propTypes = {
  isHeaderRow: PropTypes.bool
};

BingoRow.defaultProps = {
  isHeaderRow: false
};
