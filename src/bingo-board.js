import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BingoRow from './bingo-row';


export default class BingoBoard extends Component {

  render() {
    return(
      <table>
        <thead className='header'>
          <BingoRow isHeaderRow/>
        </thead>
        <tbody>
        </tbody>
      </table>
    );
  }

}
