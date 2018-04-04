import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BingoRow from './bingo-row';
import Words from './words';

export default class BingoBoard extends Component {

  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      words: this.getRandomTwentyFive(),
      boardState: this.getClearBoard(),
      won: false
    };
    this.reset = this.reset.bind(this);
  }

  getClearBoard() {
    const matrix = [];
    for (let i=0; i < 5; i++) {
      const row = [];
      for (let j=0; j < 5; j++) {
        row.push(j === 2 && i === 2);
      }
      matrix.push(row);
    }
    return matrix;
  }

  getRandomIndex() {
    const min = 0;
    const max = Words.length;
    return Math.floor(Math.random() * (max - min)) + min;
  }

  getRandomTwentyFive() {
    const randomWords = [];
    const seen = {};
    for(let i =0; i < 25; i++) {
      const idx = this.getRandomIndex();
      if (idx in seen) {
        i--;
        continue;
      }
      seen[idx] = true;
      randomWords.push(Words[idx]);
    }
    return randomWords;
  }

  toggleCell(rowNum, colNum) {
    const { boardState } = this.state;
    const newState = boardState[rowNum][colNum] = !boardState[rowNum][colNum];
    const didWin = newState && this.isWinner(rowNum, colNum);
    this.setState({ boardState, won: didWin });
  }

  reset() {
    this.setState({ 
      won: false,
      boardState: this.getClearBoard(),
      words: this.getRandomTwentyFive()
    });
  }

  isWinner(rowNum, colNum) {
    if (this.isColumnWinner(colNum)){
      return true;
    } 
    if (this.isRowWinner(rowNum)) {
      return true;
    }
    if (rowNum === colNum && this.isTLBRWinner()) {
      return true;
    }
    if (rowNum + colNum === this.state.boardState.length - 1 && this.isTRBLWinner()) {
      return true;
    }
    return false;
  }

  isColumnWinner(colNum) {
    const { boardState } = this.state;
    return boardState.every((row) => {
      return row[colNum];
    });
  }

  isRowWinner(rowNum) {
    const { boardState } = this.state;
    return boardState[rowNum].every(val => val);
  }

  isTLBRWinner() {
    const { boardState } = this.state;
    return boardState.every((row, i) => {
      return row[i];
    });
  }

  isTRBLWinner() {
    const { boardState } = this.state;
    return boardState.every((row, i) => {
      return row[row.length - 1 - i];
    });
  }

  render() {
    const { words, boardState, won } = this.state;
    const rows = [];
    for (let i=0; i < 5; i++) {
      const rowWords = words.slice(i * 5, (i + 1) * 5);
      const rowState = boardState[i];
      rows.push(<BingoRow words={rowWords} rowState={rowState} key={i} isMiddleRow={i === 2} onCellClick={this.toggleCell.bind(this, i)}/>);
    }
    return (
      <div>
        <header>
          <h1>GoDaddy Buzzword Bingo</h1>
        </header>
        <main className='container'>
          <table className='bingo-table'>
            <thead className='bingo-header'>
              <BingoRow isHeaderRow/>
            </thead>
            <tbody className='bingo-body'>
              { rows }
            </tbody>
          </table>
          { won && 
            <div>
              <div className='overlay'></div>
              <div className='modal'>
                <p>You won!!!!</p>
                <p>
                  <button onClick={ this.reset }>Play Again</button>
                </p>
              </div>
            </div> }
        </main>
      </div>
    );
  }
}
