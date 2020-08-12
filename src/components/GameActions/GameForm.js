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

      <Form.Label className="edit-form-label">Gamertag</Form.Label>
      <Form.Control
      className="edit-form-control"
      onChange={handleInputChange}
      value={game.gamertag}
      name="gamertag"
      placeholder="Potato1234"
      />

      <Form.Label className="edit-form-label">Location</Form.Label>
      <Form.Control className="edit-form-control" as="select" onChange={handleInputChange} value={game.location} name="location">
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
