import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BingoRow from './bingo-row';
import Words from './words';

export default class BingoBoard extends Component {

  constructor(props, ...args) {
    super(props, ...args);
    this.state = {
      words: this.getRandomTwentyFive(),
      boardState: this.getClearBoard()
    };
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

  render() {
    const { words, boardState } = this.state;
    const rows = [];
    for (let i=0; i < 5; i++) {
      const rowWords = words.slice(i * 5, (i + 1) * 5);
      const rowState = boardState[i];
      rows.push(<BingoRow words={rowWords} rowState={rowState} key={i} />);
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
        </main>
      </div>
    );
  }
}
