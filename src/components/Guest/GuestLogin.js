import React from 'react'
import Card from 'react-bootstrap/Card'

const GuestLogin = () => {
  return (
    <div className="guest-box">
      <Card>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">Hello....</Card.Subtitle>
          <Card.Title>Welcome to Clique</Card.Title>
          <Card.Text><strong>As this project is still not complete, you can still search, create, update, delete, and all that good stuff.</strong></Card.Text>
          <Card.Text>Have fun! And please send me feedback!</Card.Text>
          <strong>
          <Card.Text>Please feel free to use our guest log in</Card.Text>
          <Card.Text>E-mail: guest@guest.com</Card.Text>
          <Card.Text>Password: 123</Card.Text>
          </strong>
        </Card.Body>
      </Card>
    </div>
  )
}

export default GuestLogin
