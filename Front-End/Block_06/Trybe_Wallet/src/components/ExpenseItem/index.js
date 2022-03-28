import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DeleteButton from '../DeleteButton';
import EditButton from '../EditButton';

export default class ExpenseItem extends Component {
  getExchange = () => {
    const { exchangeRates, currency } = this.props;
    const exchangeValue = Number.parseFloat(
      exchangeRates[currency].ask,
    ).toFixed(2);

    return exchangeValue;
  };

  getCompleteCurrency = () => {
    const { exchangeRates, currency } = this.props;
    const completeCurrency = exchangeRates[currency].name.split('/');

    return completeCurrency[0];
  };

  getConvertedValue = () => {
    const { value, exchangeRates, currency } = this.props;
    const exchange = exchangeRates[currency].ask;
    const convertedValue = value * exchange;

    return convertedValue.toFixed(2);
  };

  render() {
    const { id, value, description, method, tag } = this.props;

    return (
      <tr>
        <td>{description}</td>
        <td>{tag}</td>
        <td>{method}</td>
        <td>{value}</td>
        <td>{this.getCompleteCurrency()}</td>
        <td>Real</td>
        <td>{this.getExchange()}</td>
        <td>{this.getConvertedValue()}</td>
        <td>
          <EditButton id={ id } />
          <DeleteButton id={ id } />
        </td>
      </tr>
    );
  }
}

ExpenseItem.propTypes = {
  id: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  exchangeRates: PropTypes.string.isRequired,
};
