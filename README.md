# Fantasy Tour de France SPA

[![Logo](https://i.imgur.com/JArn7Kt.png)](https://www.letour.fr/en/)

### Description

Fantasy Tour de France it's a simple single page application (SPA) that lets you pick a team of riders to compete while the race progresses. You score points based on how well your riders qualify after each stage is completed. You can change your team along the way to pick the best riders for different types of stage.

### Tech

Fantasy Tour de France uses a number of open source projects to work:
* [MongoDB](https://www.mongodb.com) - Free and open-source cross-platform document-oriented database
* [Mongoose](http://mongoosejs.com/index.html) - Elegant MongoDB object modeling for NodeJS
* [NodeJS](https://nodejs.org/en/) - Evented I/O for the backend
* [ExpressJS](https://expressjs.com) - Fast, unopinionated, minimalist web framework for NodeJS
* [JSONWebToken](https://jwt.io) - Used for authorization
* [ReactJS](https://reactjs.org) - A JavaScript library for building user interfaces

The goal of this project is to show the core concepts of building SPA with ReactJS. In this project I've used:

* React Hooks (They let you use state and other React features without writing a class)
* React Higher Order Components
* React Functional Components
* React Router for routing
* Request, Auth, CRUD and Helper services in attempt to abstract some of the functionality

### Installation

Fantasy Tour de France requires 
* [MongoDB](https://www.mongodb.com/download-center#community) v3.6+
* [NodeJS](https://nodejs.org/en/) v8+

Install MongoDB and start the database (port: 27017)

```sh
$ cd back-end
$ start-mongodb
```

Install the dependencies and start the server (port: 8000)

```sh
$ cd back-end
$ npm install
$ npm start
```

Install the dependencies and start the client (port: 3000)

```sh
$ cd..
$ cd front-end
$ npm install
$ npm start
```

### Features

- Anonymous users
    - View all stages and details about each stage
    - View all cycling teams and details about their riders
    - View information on how to play the fantasy game
    - Login/Register

- Authenticated users
    - Create a fantasy team with 8 riders, having a limited budget
    - Make changes to the team when transfers are open

- Admin users
    - Create/Edit stages
    - Create/Edit cycling teams
    - Create/Edit riders
    - Lock/Unlock transfers
    - Submit results after stages are complete so the points can be calculated 

### Authors

* [Zhelyan Radoev](https://github.com/jeliozver)

### License
----

MIT