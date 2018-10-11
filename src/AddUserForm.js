import React, { Component } from 'react'

class AddUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      	fname: '',
    	lname: '',
    	uname: '',
      	games: 0
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  addItem = event => {
    event.preventDefault();
    
    var itemToBeAdded = {
      fname : this.state.fname,
      lname : this.state.lname,
      uname : this.state.uname,
      games : 0
    }; 
    
    this.props.onAddUser(itemToBeAdded);
  };

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  inputIsEmpty = () => {
    return this.state.fname === '' || this.state.lname === '' || this.state.uname === ''  ;
  };
  
	  render() {
    return (
      <div>
       <form onSubmit={this.addItem}>
      	<input
            type='text'
        	name='fname'
            placeholder='First name'
            value={this.state.fname}
			onChange={this.handleInputChange}
         />
		<input
            type='text'
			name='lname'
            placeholder='Last name'
            value={this.state.lname}
			onChange={this.handleInputChange}
         />
		<input
            type='text'
			name='uname'
            placeholder='username'
            value={this.state.uname}
			onChange={this.handleInputChange}
         />
		<button disabled={this.inputIsEmpty()}>Add</button>
		</form>
      </div>  
    )
  }
}

export default AddUserForm