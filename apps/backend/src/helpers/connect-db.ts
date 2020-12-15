import 'pg';
import 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Cake } from '~dbModels/cake';

export const connectDatabase = (next) => async (...args) => {
  const sequelize =  new Sequelize({
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    dialect: 'postgres',
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    models: [Cake],
  });
  try {
    await sequelize.authenticate();
    return next(...args);
  } catch {
    throw new Error('Failed to connect to database');
  }
}
