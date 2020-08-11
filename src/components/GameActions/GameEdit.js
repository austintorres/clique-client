import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import apiUrl from './../../apiConfig'

import GameForm from './GameForm'

class GameEdit extends React.Component {
  state = {
    game: {
      title: '',
      message: '',
      status: '',
    },
    updated: false
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
  }

  handleInputChange = (event) => {
    const updatedGame = { [event.target.name]: event.target.value }

    const editedGame = Object.assign({}, this.state.game, updatedGame)

    this.setState({ game: editedGame })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const gameId = this.props.match.params.id
    axios({
      method: 'PATCH',
      url: apiUrl + `/games/${gameId}`,
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        game: {
          title: this.state.game.title,
          message: this.state.game.message,
          status: this.state.game.status
        }
      }
    })
    .then(response => {
      this.setState({
        updated: true,
        game: response.data.game
      })
    })
    .then(() => this.props.msgAlert({
      heading: 'Hip Hip, Hooray! Update Complete!',
      variant: 'success'
    }))
    .catch(console.error)
  }

render () {
  console.log('game edit render')
  if (this.state.updated === true) {
    return <Redirect to={`/games`} />
  }

return (
    <GameForm
      game={this.state.game}
      handleInputChange={this.handleInputChange}
      handleSubmit={this.handleSubmit}
      cancelPath={`/games`}
    />
    )
  }
}

export default GameEdit
