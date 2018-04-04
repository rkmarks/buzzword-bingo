import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BingoHeading from './bingo-heading';
import BingoCell from './bingo-cell';

const headerData = ['B', 'I', 'N', 'G', 'O'];

export default class BingoRow extends Component {

  render() {
    const { isHeaderRow, words, rowState, isMiddleRow, onCellClick } = this.props;
    let cells;
    if (isHeaderRow) {
      cells = headerData.map((letter, idx) => {
        return <BingoHeading key={ idx }>{ letter }</BingoHeading>;
      });
    } else {
      cells = words.map((word, idx) => {
        if (isMiddleRow && idx === 2) {
          return <BingoCell isActive={rowState[idx]} key={idx} isToggleable={false}>Free Cell</BingoCell>;
        }
        return <BingoCell isActive={rowState[idx]} key={idx} onClick={() => { onCellClick(idx); }}>{ word }</BingoCell>;
      });
    }
    return (
      <tr>{ cells }</tr>
    );
  }  
}

BingoRow.propTypes = {
  isMiddleRow: PropTypes.bool,
  isHeaderRow: PropTypes.bool,
  words: PropTypes.arrayOf(PropTypes.string),
  rowState: PropTypes.arrayOf(PropTypes.bool),
  onCellClick: PropTypes.func 
};

BingoRow.defaultProps = {
  isHeaderRow: false,
  isMiddleRow: false
};
