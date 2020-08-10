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

  componentDidMount () {
    const gameId = this.props.match.params.id
    return axios({
      url: apiUrl + `/games/${gameId}`,
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
    .then(response => {
      this.setState({
        game: response.data.game
      })
    })
    .catch(error => {
      // handle the error
      console.log(error)
    })
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

  updateGame = (gameId, data) => {
    axios({
      method: 'PATCH',
      url: apiUrl + '/games/' + gameId,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        game: {
          title: data.title,
          message: data.message,
          status: data.status
        }
      }
    })
    .then(response => {
      this.setState({
        updated: true,
        game: response.data.game
      })
    })
    .catch(console.error)
  }

  render () {
    if (this.state.deleted === true) {
      return <Redirect to='/games' />
    }

    const gameId = this.props.match.params.id

    let jsx
    // if the API has not responded yet
    if (this.state.game === null) {
      jsx = <Spinner animation="border" role="status"><span className="sr-only">Loading...</span></Spinner>
      // after API responds
    } else {
      jsx = (
        <div>
        <p><strong>Post ID:</strong> {gameId}</p>
        <p><strong>Status:</strong> {this.state.game.status ? "Online" : "Offline"}</p>
        <h4><strong>Title:</strong> {this.state.game.title}</h4>
        <h6><strong>Message:</strong> {this.state.game.message}</h6>
        <Button variant="success">Update</Button>
        <Link to={`/games`}><Button variant="danger" onClick={this.deleteGame}>Delete</Button></Link>
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
