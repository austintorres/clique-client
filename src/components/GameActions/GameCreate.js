import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

import apiUrl from './../../apiConfig.js'

class GameCreate extends React.Component {
  state = {
    game: {
      title: '',
      message: '',
      status: false
    }
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
      data: {
        game: this.state.game
      }
    })
      .then(res => {
        this.setState({
          game: {
            title: '',
            message: '',
            status: false
          }
        })
      })
      .catch(console.error)
  }

  render () {
    return (
      <div>
      <Form onSubmit={this.handleSubmit}>
          <Form.Label>Video Game:</Form.Label>
          <Form.Control
            onChange={this.handleInputChange}
            value={this.state.game.title}
            name="title"
            placeholder="Enter video game title"
            required={true}
            />
          <Form.Label>Message</Form.Label>
          <Form.Control
            onChange={this.handleInputChange}
            value={this.state.game.message}
            name="message"
            placeholder="Example: Looking for a duo"
            />
          <Form.Label>Status</Form.Label>
          <Form.Control
            as="select"
            onChange={this.handleInputChange}
            value={this.state.game.status}
            name="status">
            <option value='true'>Online</option>
            <option value='false'>Offline</option>
          </Form.Control>
        <Button variant="primary"  type="submit">Submit</Button>
        </Form>
      </div>
    )
  }
}

export default GameCreate
