import React, { Component } from 'react'
import ShowHideGamesButton from './ShowHideGamesButton';
import ListUsersRow from './ListUsersRow';

class ListUsers extends Component {
	  render() {
    return (
      <div>
      	ListUsers
      	<ShowHideGamesButton />
      	<ListUsersRow />
      </div>  
    )
  }
}

export default ListUsers