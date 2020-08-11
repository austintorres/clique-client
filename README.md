# Clique: A Description

This application allows the user to create, update, and delete game postings.

## Important Links

- [API Repository](https://github.com/austintorres/clique-server)
- [Deployed API](https://clique-server.herokuapp.com/)
- [Front End Repository](https://github.com/austintorres/clique-client)
- [Deployed Front End](https://austintorres.github.io/clique-client/)

## Planning Story

As a gamer, playing solo can be boring at times. **Clique** allows online gamers to meet and connect with other online users who are trying to play the same video game as a team/squad. This allows online users to have a live 'Online/Offline' status, 'Current Video Game' being played feature, and able to post, edit, and delete a message.

### User Stories

- As a user I want to sign in/up
- As a user I want to be able to change my password
- As a user I want to be able to sign out
- As a user I want to be able to switch my status between online and offline
- As a user I want to create many game requests
- As a user I want to edit or delete game requests
- (Version 1) As a user I want to be able to see my own game requests.

### Technologies Used (Back End)

- Express
- MongoDB
- Mongoose
- Node.JS
- React
- Bootstrap
- HTML
- CSS

### Catalog of Routes

##### User

Verb         |	URI Pattern
------------ | -------------
POST | /sign-out
POST | /sign-in
PATCH | /change-password
DELETE | /sign-out

---

##### Games

Verb         |	URI Pattern
------------ | -------------
GET | /games
GET | /games/:id
POST | /games
PATCH | /games/:id
DELETE | /games/:id

### Unsolved Problems

- Would like to eventually create a functional message board for teams.

## Images

#### Wireframe (Version 1):

![Clique Version 1 Wireframe]()

---

#### ERD:
![Clique Version 1 ERD](https://i.imgur.com/JH0b6Gj.png)
