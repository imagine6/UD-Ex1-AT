import React, { Component } from 'react'
import ShowHideGamesButton from './ShowHideGamesButton';
import ListUsersRow from './ListUsersRow';

class ListUsers extends Component {
  
    state = {
      showhidegames: 1
    };

	handleChangeGames = (showhide) => {
    this.setState(() => ({
      showhidegames: showhide
    }))
      
  };
 
	  render() {
        console.log(this.props.users);
    return (
      <div>
      	ListUsers
      	<ShowHideGamesButton 
          showhidegames={this.state.showhidegames} 
          onChangeGames={this.handleChangeGames} 
		/>
      	<ListUsersRow users={this.props.users} showhidegames={this.state.showhidegames}/>
      
      </div>  
    )
  }
}

export default ListUsers