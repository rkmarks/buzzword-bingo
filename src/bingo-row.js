import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BingoHeading from './bingo-heading';
import BingoCell from './bingo-cell';

const headerData = ['B', 'I', 'N', 'G', 'O'];

export default class BingoRow extends Component {

  render() {
    const { isHeaderRow, words, rowState } = this.props;
    let cells;
    if (isHeaderRow) {
      cells = headerData.map((letter, idx) => {
        return <BingoHeading key={ idx }>{ letter }</BingoHeading>;
      });
    } else {
      cells = words.map((word, idx) => {
        return <BingoCell key={idx}>{ word }</BingoCell>;
      });
    }
    return (
      <tr>{ cells }</tr>
    );
  }  
}

BingoRow.propTypes = {
  isHeaderRow: PropTypes.bool,
  words: PropTypes.arrayOf(PropTypes.string),
  rowState: PropTypes.arrayOf(PropTypes.bool)
};

BingoRow.defaultProps = {
  isHeaderRow: false
};
