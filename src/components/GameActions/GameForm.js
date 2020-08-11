import React from 'react'
import { Link } from 'react-router-dom'

import { Form, Button } from 'react-bootstrap'

const GameForm = ({ game, handleSubmit, handleInputChange, cancelPath }) => (
  <div className="edit-form">
    <h3 className="edit-title">Update This Game:</h3>
    <Form className="edit-form-inner" onSubmit={handleSubmit}>
      <Form.Label className="edit-form-label">Video Game</Form.Label>
      <Form.Control className="edit-form-control" as="select" onChange={handleInputChange} value={game.title} name="title">
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

      <Form.Label className="edit-form-label">Message</Form.Label>
      <Form.Control className="edit-form-control"
        onChange={handleInputChange}
        value={game.message}
        name="message"
        placeholder="Example: Looking for a duo"
      />

      <Form.Label className="edit-form-label">Status</Form.Label>
      <Form.Control  className="edit-form-control" as="select" onChange={handleInputChange} value={game.status} name="status">
        <option value="true">Online</option>
        <option value="false">Offline</option>
      </Form.Control>
      <br />
      <Button className="edit-submit-btn" variant="primary" type="submit">Submit</Button>
      <section className="divider"/>
      <Link to={cancelPath}><Button className="edit-cancel-btn" variant="danger">Cancel</Button></Link>
      </Form>
    </div>
)

export default GameForm
