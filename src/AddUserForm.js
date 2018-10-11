import React, { Component } from 'react'

class AddUserForm extends Component {
  state = {
    fname: '',
    lname: '',
    uname: '',
  };

  addItem = event => {
    event.preventDefault();
    this.props.onAddUser(this.state.fname, this.state.lname, this.state.uname);
  };

  handleChange = event => {
    this.setState({ fname: event.target.fname });
  };

  inputIsEmpty = () => {
    return this.state.fname === '' ;
  };
  
	  render() {
    return (
      <div>
      	<input
            type='text'
            placeholder='First name'
            value={this.state.fname}
         />
		<input
            type='text'
            placeholder='Last name'
            value={this.state.lname}
         />
		<input
            type='text'
            placeholder='username'
            value={this.state.uname}
         />
		<button disabled={this.inputIsEmpty()}>Add</button>
      </div>  
    )
  }
}

export default AddUserForm