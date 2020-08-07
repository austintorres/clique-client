import React from 'react'
import { Redirect } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'

import apiUrl from './../../apiConfig.js'

class GameCreate extends React.Component {
  state = {
    game: {
      title: '',
      message: '',
      status: false
    },
    gameId: null
  }

  handleInputChange = (event) => {
    // game key from the input name field
    const gameKey = event.target.name
    // input value typed in from the user
    const value = event.target.value
    // makes a copy of the current state
    const gameCopy = Object.assign({}, this.state.game)
    // updates the copy with the new user input
    gameCopy[gameKey] = value
    // updates the state with the updated copy
    this.setState({ game: gameCopy })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.props)
    axios({
      method: 'POST',
      url: apiUrl + '/games',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.props.user.token}`
      },
      data: {
        game: this.state.game
      }
    })
      .then((res) => this.setState ({
        gameId: res.data.game._id
      }))
      .then(() => console.log(this.state))
      .catch(console.error)
  }

  render () {
    if (this.state.gameId) {
      return <Redirect to={`/games`} />
    }

    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Label>Video Game</Form.Label>
          <Form.Control as="select" onChange={this.handleInputChange} value={this.state.game.title} name="title">
            <option>Call of Duty: Warzone</option>
            <option>Fortnite</option>
            <option>Counter Strike: Global Offensive</option>
            <option>League of Legends</option>
            <option>Valorant</option>
            <option>Minecraft</option>
            <option>Apex Legends</option>
            <option>Overwatch</option>
            <option>World of Warcraft</option>
            <option>NBA 2K</option>
            <option>Rocket League</option>
            <option>Dungeons & Dragons</option>
            <option>Rainbow Six: Siege</option>
          </Form.Control>
          <Form.Label>Message</Form.Label>
          <Form.Control
            onChange={this.handleInputChange}
            value={this.state.game.message}
            name="message"
            placeholder="Example: Looking for a duo"
            />
          <Form.Label>Status</Form.Label>
          <Form.Control as="select" onChange={this.handleInputChange} value={this.state.game.status} name="status">
            <option value='true'>Online</option>
            <option value='false'>Offline</option>
          </Form.Control>
        <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

export default GameCreate
