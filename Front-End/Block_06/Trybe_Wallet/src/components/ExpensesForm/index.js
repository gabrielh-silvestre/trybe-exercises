import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addExpense, editExpense, getCurrency } from '../../actions';

import Input from '../Input';
import Select from '../Select';

const EXPENSE_NOT_SELECTED = -1;
const PAYMENT_METHOD = ['Dinheiro', 'Cartão de crédito', 'Cartão de débito'];
const CATEGORIES = ['Alimentação', 'Lazer', 'Trabalho', 'Transporte', 'Saúde'];
const INITIAL_STATE = {
  value: '',
  description: '',
  currency: 'USD',
  method: PAYMENT_METHOD[0],
  tag: CATEGORIES[0],
};

class ExpensesForm extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  componentDidMount() {
    const { getCurrencies } = this.props;
    getCurrencies();
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    const { expenses, editId, expenseEdit, addBill } = this.props;
    event.preventDefault();

    if (editId === EXPENSE_NOT_SELECTED) {
      addBill({
        id: expenses.length,
        ...this.state,
      });
    } else {
      expenseEdit({
        id: expenses[editId].id,
        ...this.state,
        exchangeRates: expenses[editId].exchangeRates,
      });
    }

    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { value, description, currency, method, tag } = this.state;
    const { currencies, editId } = this.props;

    return (
      <form onSubmit={ this.handleSubmit }>
        <fieldset>
          <Input
            label="Valor"
            type="number"
            name="value"
            value={ `${value}` }
            onChange={ this.handleChange }
            testId="value-input"
          />
          <Input
            label="Descrição"
            type="text"
            name="description"
            value={ description }
            onChange={ this.handleChange }
            testId="description-input"
          />
          <Select
            label="Moeda"
            name="currency"
            value={ currency }
            options={ currencies.filter((curr) => curr !== 'USDT') }
            onChange={ this.handleChange }
            testId="currency-input"
          />
          <Select
            label="Método de Pagamento"
            name="method"
            value={ method }
            options={ PAYMENT_METHOD }
            onChange={ this.handleChange }
            testId="method-input"
          />
          <Select
            label="Tag"
            name="tag"
            value={ tag }
            options={ CATEGORIES }
            onChange={ this.handleChange }
            testId="tag-input"
          />

          {editId === EXPENSE_NOT_SELECTED ? (
            <button type="submit">Adicionar despesa</button>
          ) : (
            <button type="submit">Editar despesa</button>
          )}
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
  editId: state.wallet.editId,
});

const mapDispatchToProps = (dispatch) => ({
  addBill: (bill) => dispatch(addExpense(bill)),
  getCurrencies: () => dispatch(getCurrency()),
  expenseEdit: (expenseId) => dispatch(editExpense(expenseId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesForm);

ExpensesForm.propTypes = {
  getCurrencies: PropTypes.func.isRequired,
  addBill: PropTypes.func.isRequired,
  editId: PropTypes.number.isRequired,
  currencies: PropTypes.oneOfType(Object),
  expenseEdit: PropTypes.func.isRequired,
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      method: PropTypes.string.isRequired,
      tag: PropTypes.string.isRequired,
      exchangeRates: PropTypes.oneOfType(Object),
    }).isRequired,
  ).isRequired,
};

ExpensesForm.defaultProps = {
  currencies: {},
};
