import React from 'react'
import {connect} from 'react-redux'
import {categoryCreate} from '../../actions/category-actions'
import {categoryUpdate} from '../../actions/category-actions'
import CategoryForm from '../category/category-form'
import CategoryItem from '../category/category-item'
import ExpenseForm from '../category/expense-form'
import {renderIf} from '../../lib/utils'

class Dashboard extends React.Component {
  render() {
    return (
      
      <section className="dashboard">
        <h1>Budget Tracker</h1>

        <div className="wrapper">
        <div className="one">
        <CategoryForm
          buttonText='create category'
          onComplete={this.props.categoryCreate}/>
        </div>

        <div className="two">
        {renderIf(this.props.categories,
          this.props.categories.map(cat =>
            <CategoryItem
              className="category-items"
              key={cat._id}
              category={cat}></CategoryItem>)
        )}
         </div>
        </div>
      </section>
     
    )
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  expenses: state.expenses,
})

const mapDispatchToProps = (dispatch, getState) => ({
  categoryCreate: category => dispatch(categoryCreate(category)),
  categoryUpdate: category => dispatch(categoryUpdate(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
