import React, { Component } from 'react'
import ListGamesPlayed from './ListGamesPlayed';

class ListUsersRow extends Component {
	  render() {
    return (
      <div>
      	ListUsersRow
      <ol className='contact-list'>
          {this.props.users.map((user) => {
            return this.props.showhidegames > 0 ? 
      			<li key={user.uname}>{user.uname} played {user.games} games.</li>
			:
				<li key={user.uname}>{user.uname} played * games.</li>
    	})}
        </ol>

      </div>  
    )
  }
}

export default ListUsersRow