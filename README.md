## Building the Ultimate Express Typescript Boilerplate

This repository is a demonstration of how to build a ExpressJS boilerplate from scratch using NodeJS.

To run in development mode, you need to run

```sh
npm run dev
```

or inside docker image

```sh
docker-compose up
```

You should be up and running with the project on http://localhost:4000
Your Database Server will be on: http://localhost:5432
Your adminer database inspection tool will be at http://localhost:8080

### How it was built?

If you want to learn about how different parts came together you can follow the following articles.

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

### Project Structure

If you want to add a new route then you will goto `/routes` folder and add a new Router.
Then register that router in the `index.ts` file under the `/routes` folder.

Then you will create a Controller under the `/controllers` directory.All business logics should go into there.

Specific use cases should be handles by Service classes under the `/service` folder.

All Database related things should go under `/repositories` folder.

To create a new model for data base look into the `/models` folder.
