import React, { Component } from 'react'
import AddUserForm from './AddUserForm';
import ListUsers from './ListUsers';

class ListUsersWithAddForm extends Component {
  state = {
    users: [
      {
        fname: 'Tobi',
        lname: 'Lang',
        uname: 'tobiaslang',
        games: 0
      }
    ],
  };

  handleAddUser = user => {
    
    var found = this.state.users.filter(user1 => user1.uname === user.uname);
    if (found.length >= 1) alert("Username already in use, please use another username");
    else this.setState(prevState => ({ users: [...prevState.users, user] }));
      
  };

	  render() {
    return (
      <div>
      	<h1>ListUsersWithAddForm</h1>
      	<AddUserForm onAddUser={this.handleAddUser} />
      	<ListUsers users={this.state.users}/>
      </div>  
    )
  }
}

export default ListUsersWithAddForm