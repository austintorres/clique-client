import React from 'react'
import Card from 'react-bootstrap/Card'

const GuestLogin = () => {
  return (
    <div className="guest-box">
      <Card>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">Hello....</Card.Subtitle>
          <Card.Title>Welcome to Clique</Card.Title>
          <strong>
          <Card.Text>We are still under construction, in the meantime, you can still search, create, update, and delete games.</Card.Text>
          <Card.Text>Have fun! And please send feedback to <a href = "mailto: hello@austintorres.com">feedback!</a></Card.Text>
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
