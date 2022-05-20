import dotenv from 'dotenv';
dotenv.config({ path: __dirname + `/../../.env.${process.env.NODE_ENV}` });

/**
 * More info: https://www.mohammadfaisal.dev/blog/nodejs-environment-handling
 */
const config = {
  port: process.env.PORT,
  dbUrl: process.env.DB_URL,
  dbHost: process.env.DB_HOST ?? 'test_host',
  dbUser: process.env.DB_USER ?? 'test_user',
  dbPassword: process.env.DB_PASSWORD ?? 'test_password',
  dbName: process.env.DB_NAME ?? 'test_db',
};

export default config;
