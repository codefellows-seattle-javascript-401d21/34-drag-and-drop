import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../../lib/utils';
import ExpenseForm from '../expense-form/expense-form';
import {expenseUpdate, expenseDelete} from '../../../actions/expense-actions';

class ExpenseItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expense: this.props.expense ?
        this.props.expense :
        {
          name: '',
          expense: 0,
          categoryId: this.props.categoryId,
        },
      editing: false,
    };

    let memberFunctions = Object.getOwnPropertyNames(ExpenseItem.prototype);
    for (let functionName of memberFunctions) {
      if (functionName.startsWith('handle')) {
        this[functionName] = this[functionName].bind(this);
      }
    }
  }

  handleUpdate(exp) {
    this.setState({
      editing: !this.state.editing,
    });

    this.props.expenseItemExpenseUpdate(exp);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.expenseItemExpenseDelete(this.props.expense);
  }

  render() {
    console.log('expense-item props: ', this.props);

    return (
      <div className="expense-item" key={this.props.expense._id} onDoubleClick={this.handleUpdate}>
        <h2>{this.props.expense.name}</h2>
        <p>Expense: ${this.props.expense.expense}</p>
        <button onClick={this.handleDelete}>{this.props.buttonText}</button>

        {renderIf(this.state.editing, <ExpenseForm expense={this.props.expense} buttonText="update expense" onComplete={this.handleUpdate} />)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.expense,
});

const mapDispatchToProps = (dispatch, getState) => ({
  expenseItemExpenseUpdate: exp => dispatch(expenseUpdate(exp)),
  expenseItemExpenseDelete: exp => dispatch(expenseDelete(exp)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseItem);