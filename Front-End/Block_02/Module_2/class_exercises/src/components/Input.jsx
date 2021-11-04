import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Input extends Component {
  render() {
    const { type, name } = this.props.inputConfig;
    const { handleChange } = this.props;

    return (
      <>
        <input type={type} name={name} id={name} onChange={handleChange} />
      </>
    );
  }
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
