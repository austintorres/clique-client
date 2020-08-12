import React from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import apiUrl from './../../apiConfig'
import messages from './../AutoDismissAlert/messages'

import { Button, Spinner, Card } from 'react-bootstrap'

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
    .then(() => this.props.msgAlert({
      heading: 'Delete Success',
      message: messages.deleteSuccess,
      variant: 'success'
    }))
    .catch(() => this.props.msgAlert({
      heading: 'Uh oh! Could not destroy that one!',
      message: messages.deleteFailure,
      variant: 'danger'
    }))
  }

  render () {
    const game = this.props.location.state
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
        <div className="game-card">
          <Card>
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">ID: {gameId}</Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">Status: {game.status ? "Online" : "Offline"}</Card.Subtitle>
              <Card.Title>{game.title}</Card.Title>
              <Card.Text>Message: {game.message}</Card.Text>
              <Card.Text>Gamertag: {game.gamertag}</Card.Text>
              <Card.Text>Location: {game.location}</Card.Text>
              <Link to={`/games/${gameId}/edit`}><Button variant="success">Update</Button></Link>
              <section className="divider"/>
              <Button variant="danger" onClick={this.deleteGame}>Delete</Button>
            </Card.Body>
          </Card>
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
