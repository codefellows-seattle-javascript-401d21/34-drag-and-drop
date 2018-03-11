import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate, categoryDelete} from '../../action/category-action';
import CategoryForm from '../category-form/index';
import CategoryItem from '../category-item/index';


class Dashboard extends React.Component{

  render(){
    return(
      <section>
        <h1>Budget Tracker</h1>

        <CategoryForm
          buttonText='create'
          onComplete={this.props.dashboardCategoryCreate} />

        <ul>
          {
            this.props.categories.map(categoryItem => {
              return <CategoryItem 
                key={categoryItem.id}
                categoryItem={categoryItem}
                onClick={this.props.dashboardCategoryDelete} />;
            })
          }
        </ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses,
});

const mapDispatchToProps = (dispatch, getState) => ({
  dashboardCategoryCreate: category => dispatch(categoryCreate(category)),
  dashboardCategoryDelete: category => dispatch(categoryDelete(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
