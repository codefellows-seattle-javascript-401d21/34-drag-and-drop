import React from 'react'

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.props.expense
      ? this.props.expense
      : {
        categoryId: this.props.categoryId,
        name: '',
        price: '',
      }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onComplete(this.state)
    this.setState({
      name: '',
      price: '',
    })
  }


  render() {
    return  (
      <section>
        <h2>{this.props.catTitle} expense</h2>
      <form className="expense-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          required="true"
          value={this.state.name}
          onChange={this.handleChange}/>

        <input className="test"
          type="number"
          name="price"
          placeholder="price"
          required="true"
          value={this.state.price}
          onChange={this.handleChange}/>

        <button className="create-exp-button" type="submit">{this.props.buttonText}</button>
      </form>
      </section>
    )
  }
}

export default ExpenseForm
