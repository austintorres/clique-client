import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Spinner, Button } from 'react-bootstrap'

import apiUrl from './../../apiConfig.js'

class GameIndex extends React.Component {
  state = {
    games: null
  }

  componentDidMount () {
  return axios({
    url: apiUrl + '/games',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${this.props.user.token}`
    }
  })
    .then(response => {
      this.setState({
        games: response.data.games
      })
    })
    .catch(error => {
      // handle the error
      console.log(error)
    })
  }

  render () {
    let gameJSX
    // if the API has not responded yet
    if (this.state.games === null) {
      gameJSX = <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>
    // if the API responds with no games
  } else if (this.state.games.length === 0) {
      gameJSX = <p>No one is looking for a game right now, you can always add one!</p>
    // if the API responds with games
    } else {
      gameJSX = (
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
      <Link to={`/create`}>
      <Button variant="primary" size="lg">Create</Button>
      </Link>
        <h2>People Currently Looking for Games:</h2>
        {gameJSX}
      </div>
    )
  }
}

export default GameIndex
