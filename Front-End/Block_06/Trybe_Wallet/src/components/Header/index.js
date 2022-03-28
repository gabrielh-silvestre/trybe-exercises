import React, { Component } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

class Header extends Component {
  getTotalExpenses = () => {
    const { totalExpenses } = this.props;

    return totalExpenses
      .reduce(
        (acc, { value, currency, exchangeRates }) => (
          acc + value * exchangeRates[currency].ask
        ),
        0,
      )
      .toFixed(2);
  };

  render() {
    const { userEmail } = this.props;

    return (
      <header>
        <div>
          <h1>Trybe</h1>

          <section>
            <p data-testid="email-field">{userEmail}</p>
            <p data-testid="total-field">
              {this.getTotalExpenses()}
              {' '}
              <span data-testid="header-currency-field">BRL</span>
            </p>
          </section>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  totalExpenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  totalExpenses: PropTypes.oneOfType([
    {
      value: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      exchangeRates: PropTypes.oneOfType(Object).isRequired,
    },
  ]),
};

Header.defaultProps = {
  totalExpenses: [],
};
