import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BingoRow from './bingo-row';


export default class BingoBoard extends Component {

  render() {
    return(
      <div>
        <header className='header'>
          <h1>GoDaddy Buzzword Bingo</h1>
        </header>
        <main className='container'>
          <table className='bingo-table'>
            <thead className='bingo-header'>
              <BingoRow isHeaderRow/>
            </thead>
            <tbody className='bingo-body'>
              <BingoRow/>
            </tbody>
          </table>
        </main>
      </div>
    );
  }
}
