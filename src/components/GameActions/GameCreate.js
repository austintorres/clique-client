import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import axios from 'axios'
import apiUrl from './../../apiConfig.js'
import messages from './../AutoDismissAlert/messages'

class GameCreate extends React.Component {
  state = {
    game: {
      title: '',
      message: '',
      gamertag: '',
      location:'',
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
    .then(() => this.props.msgAlert({
      heading: 'Hooray! That Post Was Created!',
      message: messages.createGameSuccess,
      variant: 'success'
    }))
    .catch(() => this.props.msgAlert({
      heading: 'Whoops, Something Went Wrong!',
      message: messages.createGameFailure,
      variant: 'danger'
    }))
  }

  render () {
    if (this.state.gameId) {
      return <Link to={`/create`} />
    }

    return (
      <div className="create-form">
      <h3 className="edit-title">Post A Game:</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Label>Video Game</Form.Label>
          <Form.Control as="select" onChange={this.handleInputChange} value={this.state.game.title} name="title">
            <option value="disabled">Pick a game title:</option>
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

          <Form.Label>Gamertag</Form.Label>
          <Form.Control
          onChange={this.handleInputChange}
          value={this.state.game.gamertag}
          name="gamertag"
          placeholder="Potato1234"
          />

          <Form.Label>Location</Form.Label>
          <Form.Control as="select" onChange={this.handleInputChange} value={this.state.game.location} name="location">
            <option></option>
            <option>Alabama</option>
            <option>Alaska</option>
            <option>Arizona</option>
            <option>Arkansas</option>
            <option>California</option>
            <option>Colorado</option>
            <option>Connecticut</option>
            <option>Delaware</option>
            <option>Florida</option>
            <option>Georgia</option>
            <option>Hawaii</option>
            <option>Idaho</option>
            <option>Illinois</option>
            <option>Indiana</option>
            <option>Iowa</option>
            <option>Kansas</option>
            <option>Kentucky</option>
            <option>Louisiana</option>
            <option>Maine</option>
            <option>Maryland</option>
            <option>Massachusetts</option>
            <option>Michigan</option>
            <option>Minnesota</option>
            <option>Mississippi</option>
            <option>Missouri</option>
            <option>Montana</option>
            <option>Nebraska</option>
            <option>Nevada</option>
            <option>New Hampshire</option>
            <option>New Jersey</option>
            <option>New Mexico</option>
            <option>New York</option>
            <option>North Carolina</option>
            <option>North Dakota</option>
            <option>Ohio</option>
            <option>Oklahoma</option>
            <option>Oregon</option>
            <option>Pennsylvania</option>
            <option>Rhode Island</option>
            <option>South Carolina</option>
            <option>South Dakota</option>
            <option>Tennessee</option>
            <option>Texas</option>
            <option>Utah</option>
            <option>Vermont</option>
            <option>Virginia</option>
            <option>Washington</option>
            <option>West Virginia</option>
            <option>Wisconsin</option>
            <option>Wyoming</option>
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
            <option value="true">Online</option>
            <option value="false">Offline</option>
          </Form.Control>

          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

export default GameCreate
