import React, { Component } from 'react'
import AddUserForm from './AddUserForm';
import ListUsers from './ListUsers';

class ListUsersWithAddForm extends Component {
  state = {
    users: [],
  };

  handleAddUser = user => {
    this.setState(prevState => ({ users: [...prevState.users, user] }));
  };

	  render() {
    return (
      <div>
      	ListUsersWithAddForm
      	<AddUserForm onAddUser={this.handleAddUser} />
      	<ListUsers />
      </div>  
    )
  }
}

export default ListUsersWithAddForm