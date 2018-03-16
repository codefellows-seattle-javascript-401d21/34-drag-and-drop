import React from 'react';
import { connect } from 'react-redux';
import { renderIf } from '../../../lib/utils';
import CategoryForm from '../category-form/category-form';
import { categoryUpdate, categoryDelete } from '../../../actions/category-actions';
import { expenseCreate } from '../../../actions/expense-actions';
import ExpenseForm from '../../expense/expense-form/expense-form';
import ExpenseItem from '../../expense/expense-item/expense-item';

class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editmode: false,
      expenseaddmode: false,
    };

    // Binding Handlers
    Object.getOwnPropertyNames(CategoryItem.prototype)
      .filter(prop => prop.startsWith('handle'))
      .map(prop => this[prop] = this[prop].bind(this));
  }

  handleDelete() {
    this.props.categoryItemDelete(this.props.category);
  }

  handleEditMode() {
    this.setState({ editmode: !this.state.editmode });
  }

  handleExpenseToggle() {
    this.setState({ expenseaddmode: !this.state.expenseaddmode });
  }

  calcRemainingBudget() {
    let budget = parseInt(this.props.category.budget);

    return budget - this.props.expenses[this.props.category._id]
      .reduce((acc, exp) => acc + parseInt(exp.cost), 0);
  }

  calcRedGreenClass() {
    let className = 'item-title';
    if (this.calcRemainingBudget() >= 0) {
      return className.concat(' greentext');
    }
    return className.concat(' redtext');
  }

  render() {
    return (
      <div className='category-item'>
        <section className='edit-section' onDoubleClick={this.handleEditMode}>
          <h4 className={this.calcRedGreenClass()}>{this.props.category.name}</h4>
          <h4 className={this.calcRedGreenClass()}>
            {'\u0024'}{this.calcRemainingBudget()}
          </h4>
          <button className='delete-btn' onClick={this.handleDelete}>{'\u2718'}</button>
        </section>
        {renderIf(this.state.editmode,
          <CategoryForm
            category={this.props.category}
            formClassName='category-form'
            buttonText='Update'
            onComplete={this.props.categoryItemUpdate}
          />
        )}
        <button className='form-btn' onClick={this.handleExpenseToggle}>Create Expense</button>
        {renderIf(this.state.expenseaddmode,
          <ExpenseForm
            buttonText='Create'
            categoryId={this.props.category._id}
            onComplete={this.props.expenseItemCreate}
          />
        )}
        {renderIf(this.props.expenses[this.props.category._id].length,
          this.props.expenses[this.props.category._id].map(exp => (
            <ExpenseItem
              key={exp._id}
              expense={exp}
            />
          ))
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  expenses: state.expenses,
});

// import action creators and attach them to props
const mapDispatchToProps = (dispatch, getState) => ({
  categoryItemDelete: category => dispatch(categoryDelete(category)),
  categoryItemUpdate: category => dispatch(categoryUpdate(category)),
  expenseItemCreate: expense => dispatch(expenseCreate(expense)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
