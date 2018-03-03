import React from 'react';
import {connect} from 'react-redux';
import {renderIf} from '../../lib/utils';
import {categoryCreate} from '../../actions/category-actions';
import CategoryForm from '../category-form/category-form';
import CategoryItem from '../category-item/category-item';
import ExpenseForm from '../expense-form/expense-form';

class Dashboard extends React.Component {
  render() {
    return (
      <section className="dashboard">
        <h1>Budget App</h1>

        <CategoryForm
          buttonText='Create Category'
          onComplete={this.props.categoryCreate}/>

        {renderIf(this.props.categories.length, this.props.categories.map(category =>
          <CategoryItem
            className="category-items"
            key={category._id}
            category={category}/>)
        )}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
  categoryCreate: category => dispatch(categoryCreate(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
