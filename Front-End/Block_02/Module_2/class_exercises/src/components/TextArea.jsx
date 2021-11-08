import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class TextArea extends Component {
  render() {
    const { name, handleChange } = this.props;

    return (
      <textarea
        name={name}
        id={name}
        cols="30"
        rows="10"
        onChange={handleChange}
      ></textarea>
    );
  }
}

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}
