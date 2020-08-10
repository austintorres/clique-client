import React from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import apiUrl from './../../apiConfig'

import { Button, Spinner } from 'react-bootstrap'

class GameShow extends React.Component {
  state = {
    game: null,
    deleted: false
  }

  deleteGame = () => {
    const gameId = this.props.match.params.id
    axios({
      method: 'DELETE',
      url: apiUrl + `/games/${gameId}`,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
    .then(response => {
      this.setState({
        deleted: true
      })
    })
    .catch(console.error)
  }

  render () {
    const game = this.props.location.state
    console.log(game)
    if (this.state.deleted === true) {
      return <Redirect to='/games' />
    }

    const gameId = this.props.match.params.id

    let jsx
    // if the API has not responded yet
    if (game === null) {
      jsx = <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>
      // after API responds
    } else {
      jsx = (
        <div>
          <p><strong>Post ID:</strong> {gameId}</p>
          <p><strong>Status:</strong> {game.status ? "Online" : "Offline"}</p>
          <h4><strong>Title:</strong> {game.title}</h4>
          <h6><strong>Message:</strong> {game.message}</h6>
          <Link to={`/games/${gameId}/edit`}>
            <Button variant="success">Update</Button>
          </Link>
          <Button variant="danger" onClick={this.deleteGame}>Delete</Button>
        </div>
      )
    }

    return (
      <div>
        {jsx}
      </div>
    )
  }
}

export default GameShow
