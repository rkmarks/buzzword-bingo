import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BingoCell extends Component {

  constructor(props, ...args) {
    super(props, ...args)
    this.state = {
      isActive: false
    }
    this.setCellActive = this.setCellActive.bind(this);
  }

  setCellActive() {
    const { isActive } = this.state;
    this.setState({
      isActive: !isActive
    });
  }

  render() {
    const { children } = this.props;
    const { isActive } = this.state;
    const activeClass = isActive ? 'active-cell': '';
    return (
      <td className={`bingo-cell ${activeClass}`} onClick={this.setCellActive} >{ children }</td>
    );
  }
}

BingoCell.propTypes = {
  children: PropTypes.node.isRequired
};
