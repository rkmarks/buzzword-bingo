import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BingoRow from './bingo-row';


export default class BingoBoard extends Component {

  render() {
    return(
      <table className='bingo-table'>
        <thead className='bingo-header'>
          <BingoRow isHeaderRow/>
        </thead>
        <tbody className='bingo-body'>
        </tbody>
      </table>
    );
  }
}
