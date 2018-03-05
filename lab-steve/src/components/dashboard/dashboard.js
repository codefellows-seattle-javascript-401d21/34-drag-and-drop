import React from 'react';
import { connect } from 'react-redux';
import { categoryCreate } from '../../actions/category-actions';
import CategoryForm from '../category/category-form/category-form';
import CategoryItem from '../category/category-item/category-item';
import './_dashboard.scss';

class Dashboard extends React.Component {
  render() {
    return (
      <section className='container'>
        <h1 className='page-title'>Expense Tracker</h1>

        <section className='centsmart-section'>
          <CategoryForm
            buttonText='Create'
            onComplete={this.props.dashboardCategoryCreate}
          />

          {this.props.categories
            ? this.props.categories.map(cat => (
              <CategoryItem
                key={cat._id}
                category={cat}
              />
            ))
            : undefined
          }
        </section>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
});

const mapDispatchToProps = (dispatch, getState) => ({
  dashboardCategoryCreate: category => dispatch(categoryCreate(category))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
