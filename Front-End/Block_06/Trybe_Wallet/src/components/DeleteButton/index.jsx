import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { deleteExpense } from '../../actions';

class DeleteButton extends Component {
  handleDelete = () => {
    const { id, deleteBill } = this.props;
    deleteBill(id);
  };

  render() {
    return (
      <button
        type="button"
        onClick={ this.handleDelete }
        data-testid="delete-btn"
      >
        Apagar
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  deleteBill: (id) => dispatch(deleteExpense(id)),
});

export default connect(null, mapDispatchToProps)(DeleteButton);

DeleteButton.propTypes = {
  id: PropTypes.number.isRequired,
  deleteBill: PropTypes.func.isRequired,
};
