import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { startEdit } from '../../actions';

// const EXPENSE_NOT_SELECTED = -1;

class EditButton extends Component {
  handleStartEdit = () => {
    const { id, editStart } = this.props;
    // const isExpenseSelected = editId !== EXPENSE_NOT_SELECTED;

    // if (isExpenseSelected) editStart(EXPENSE_NOT_SELECTED);
    // else editStart(id);
    editStart(id);
  };

  render() {
    return (
      <button
        type="button"
        onClick={ this.handleStartEdit }
        data-testid="edit-btn"
      >
        Editar
      </button>
    );
  }
}

// const mapStateToProps = (state) => ({
// editId: state.wallet.editId,
// });

const mapDispatchToProps = (dispatch) => ({
  editStart: (expenseId) => dispatch(startEdit(expenseId)),
});

export default connect(null, mapDispatchToProps)(EditButton);

EditButton.propTypes = {
  // editId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  editStart: PropTypes.func.isRequired,
};
