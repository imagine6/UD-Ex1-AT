import React, { Component } from 'react'

class ShoHideGamesButton extends Component {
	  render() {
        
    return (
      <div>
        {this.props.showhidegames > 0 ? (
          <button 
         	onClick={() => this.props.onChangeGames(0)}
  			>Hide games</button>
        ) : (
          <button 
          	onClick={() => this.props.onChangeGames(1)}
			>Show games</button>
        )}
      </div>  
    )
  }
}

export default ShoHideGamesButton