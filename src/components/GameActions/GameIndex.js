import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import apiUrl from './../../apiConfig.js'
import GameCreate from './GameCreate'

class GameIndex extends React.Component {
  state = {
    games: null
  }

  componentDidMount () {
    axios.get(apiUrl + '/games')
      .then(response => {
        // handle success
        this.setState({
          games: response.data.games
        })
      })
      .catch(error => {
        // handle error
        console.log(error)
      })
  }
  render () {
    let jsx
    // if the API has not responded yet
    if (this.state.games === null) {
      jsx = <p>Loading...</p>

    // if the API responds with no games
  } else if (this.state.games.length === 0) {
      jsx = <p>No games, please add a game</p>
    // if the API responds with games
    } else {
      jsx = (
        <ul>
          {this.state.games.map(game => {
            return (
              <li key={game._id}>
                <Link to={`/games/${game._id}`}>{game.title}</Link>
              </li>
            )
          })}
        </ul>
      )
    }

    return (
      <div>
      <GameCreate />
        <h2>People Currently Looking for Games:</h2>
        {jsx}
      </div>
    )
  }
}

export default GameIndex
