import { Sequelize } from 'sequelize-typescript';
import config from '../config/Config';
import { User } from '../models/User';

/**
 * More info: https://www.mohammadfaisal.dev/blog/connect-to-postgres-server-using-sequalize
 */

const connection = new Sequelize({
  dialect: 'postgres',
  host: config.dbHost,
  username: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
  logging: false,
  models: [__dirname + '/../models/**.ts'],
});

export default connection;
