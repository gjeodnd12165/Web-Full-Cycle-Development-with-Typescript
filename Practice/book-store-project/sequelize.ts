import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
  dialect: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'root',
  timezone: '+09:00',
  database: 'BookShop',
  define: {
    underscored: true,
  }
});