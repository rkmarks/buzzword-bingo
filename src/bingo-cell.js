import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BingoCell extends Component {

  render() {
    const { children, isActive, isToggleable, onClick } = this.props;
    const activeClass = isActive ? 'active-cell': '';
    return (
      <td className={`bingo-cell ${activeClass}`} onClick={(isToggleable && onClick) || void 0} >{ children }</td>
    );
  }
}

BingoCell.propTypes = {
  isToggleable: PropTypes.bool,
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

BingoCell.defaultProps = {
  isToggleable: true
};
