import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.expense
      ? this.props.expense
      : {
        categoryId: this.props.categoryId,
        title: '',
        price: 0,
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.onComplete(this.state);
    console.log(this.props);
    this.setState({
      categoryId: this.props.categoryId,
      title: '',
      price: 0,
    });
  }
  render() { 
    return ( 
      <div>
        <h2>Add an expense</h2>
        <form className="expense-form" onSubmit={this.handleSubmit}>
          <input className="title"
            type="text"
            name="title"
            value={this.state.title}
            placeholder="Expense Title"
            onChange= {this.handleChange}
          />
          <input className="price"
            type="number"
            name="price"
            value={this.state.price}
            onChange= {this.handleChange}
          />
          <button type="submit">{this.props.buttonText}</button>
        </form>
      </div>
    );
  }
}
export default ExpenseForm;