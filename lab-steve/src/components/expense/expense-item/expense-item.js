import React from 'react';
import { connect } from 'react-redux';
import { renderIf } from '../../../lib/utils';
import ExpenseForm from '../expense-form/expense-form';
import { expenseUpdate, expenseDelete } from '../../../actions/expense-actions';

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editmode: false,
    };

    // Binding Handlers
    Object.getOwnPropertyNames(ExpenseItem.prototype)
      .filter(prop => prop.startsWith('handle'))
      .map(prop => this[prop] = this[prop].bind(this));
  }

  handleDelete() {
    this.props.expenseItemDelete(this.props.expense);
  }

  handleEditMode() {
    this.setState({ editmode: !this.state.editmode });
  }

  render() {
    return (
      <div className='expense-div'>
        <section className='edit-section' onDoubleClick={this.handleEditMode}>
          <h4 className='item-title whitetext'>{this.props.expense.name}</h4>
          <h4 className='redtext'>{'\u0024'} -{this.props.expense.cost}</h4>
          <button className='delete-btn' onClick={this.handleDelete}>{'\u2718'}</button>
        </section>
        {renderIf(this.state.editmode,
          <ExpenseForm
            expense={this.props.expense}
            buttonText='Update'
            onComplete={this.props.expenseItemUpdate}
          />
        )}
      </div>
    );
  }
}

// No need to know about all the stuff here
const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, getState) => ({
  expenseItemUpdate: expense => dispatch(expenseUpdate(expense)),
  expenseItemDelete: expense => dispatch(expenseDelete(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);
