import React from 'react'
import { Link } from 'react-router-dom'

import { Form, Button } from 'react-bootstrap'

const GameForm = ({ game, handleSubmit, handleInputChange, cancelPath }) => (
  <Form onSubmit={handleSubmit}>
    <Form.Label>Video Game</Form.Label>
    <Form.Control as="select" onChange={handleInputChange} value={game.title} name="title">
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

    <Form.Label>Message</Form.Label>
    <Form.Control
      onChange={handleInputChange}
      value={game.message}
      name="message"
      placeholder="Example: Looking for a duo"
    />

    <Form.Label>Status</Form.Label>
    <Form.Control as="select" onChange={handleInputChange} value={game.status} name="status">
      <option value="true">Online</option>
      <option value="false">Offline</option>
    </Form.Control>

      <Button variant="primary" type="submit">Submit</Button>
      <Link to={cancelPath}><Button variant="danger">Cancel</Button></Link>
  </Form>
)

export default GameForm
