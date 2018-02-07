import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BingoHeading extends Component {

  render() {
    return (
      <th>{ this.props.children }</th>
    );
  }
}

BingoHeading.propTypes = {
  children: PropTypes.node.isRequired
};
