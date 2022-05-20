<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Professional NodeJS Boilerplate with Express, Typescript, Docker and Sequelize </h3>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

    <!-- ABOUT THE PROJECT -->

## About The Project

There are a lot of section that goes into creating a production grade NodeJS application. In this repository I tried to gather as much as possible. This is an ExpressJS application with the following features.

- Typescript all the way
- EsLint, Prettier and Husky integration
- Docker
- Sequelize integration
- Multiple Environments
- Logging
- Error handling in a central place
- Request Validation
- Swagger API documentation
- Dependency Injection
- Setting up Testing

Let me know what else can make this repo even better

<p align="right">(<a href="#top">back to top</a>)</p>

### How it was built?

One key difference with other similar projects is that I documented every step in the way. Following is a series of articles that will guide you on how to build this project from absolute scratch.

- [Creating NodeJS with Typescript from Scratch](https://www.mohammadfaisal.dev/blog/create-nodejs-typescript-boilerplate)
- [Adding Eslint, Prettier and Husky](https://www.mohammadfaisal.dev/blog/linter-formatter-for-nodejs-typescript)
- [Introduce Express into the Project](https://www.mohammadfaisal.dev/blog/create-express-typescript-boilerplate)
- [Adding Docker for Development and Production](https://www.mohammadfaisal.dev/blog/express-typescript-docker)
- [Setting up local database with Docker](https://www.mohammadfaisal.dev/blog/express-database-docker-compose)
- [Error Handling](https://www.mohammadfaisal.dev/blog/error-handling-nodejs-express)
- [Request Validation](https://www.mohammadfaisal.dev/blog/request-validation-nodejs-express)
- [Production Grade Logging](https://www.mohammadfaisal.dev/blog/nodejs-logging-for-production)
- [Environment Configuration](https://www.mohammadfaisal.dev/blog/nodejs-environment-handling)
- [Security Best Practices](https://www.mohammadfaisal.dev/blog/nodejs-security-best-practices)
- [Dependency Injection](https://www.mohammadfaisal.dev/blog/dependency-injection-in-nodejs)
- [Using Sequelize ORM](https://www.mohammadfaisal.dev/blog/connect-to-postgres-server-using-sequalize)
- [Adding Swagger for API Documentation](https://www.mohammadfaisal.dev/blog/api-documentation-in-express-with-swagger)

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

The major technologies that were used to build this project are:

- [NodeJS](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Sequelize](https://sequelize.org/)
- [Docker](https://www.docker.com/)

<p align="right">(<a href="#top">back to top</a>)</p>

## Getting Started

Here goes the instructions to get the project up and running.

### Prerequisites

To run this project You will need the following things installed on your machine

- NodeJS
- NPM
- Docker (Optional)

### Run with Docker

It's super simple. If you already have Docker installed and running on your machine you can just run

```sh
docker-compose up
```

It will give you 3 things

1. The Express server in development mode (With hot reloading support)
2. A PostgreSQL database server (If you prefer something else like MySQL just make a couple of change inside the `docker-compose.yaml` file)
3. A Database investigation tool named `Adminer` (You can inspect any kind of database from the browser)

If you want to change or update any code you can just make the change and from the console you will see that the server is getting updated.

### Run without docker

If you don't use Docker then you will get an exception specifying you don't have any database.
TO avoid that you can do 2 things.

1. First go inside the `.env.development` file and specify the following variables of a database server that you are using.

```
DB_HOST=database-layer
DB_NAME=dbname
DB_USER=dbuser
DB_PASSWORD=dbpassword
```

2. Otherwise go inside the `index.ts` file and on line number 29 comment of the following line

```js
dbClient = await connection.sync();
```

### Project Structure

If you want to add a new route then you will goto `/routes` folder and add a new Router.
Then register that router in the `index.ts` file under the `/routes` folder.

Then you will create a Controller under the `/controllers` directory.All business logics should go into there.

Specific use cases should be handles by Service classes under the `/service` folder.

All Database related things should go under `/repositories` folder.

To create a new model for data base look into the `/models` folder.

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/Mohammad-Faisal/professional-express-sequelize-docker-boilerplate/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/Mohammad-Faisal/professional-express-sequelize-docker-boilerplate/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/Mohammad-Faisal/professional-express-sequelize-docker-boilerplate/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/Mohammad-Faisal/professional-express-sequelize-docker-boilerplate/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/Mohammad-Faisal/professional-express-sequelize-docker-boilerplate/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/56faisal/
