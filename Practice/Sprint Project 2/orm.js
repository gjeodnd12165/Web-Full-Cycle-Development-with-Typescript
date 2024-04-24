const { default: SequelizeAuto } = require("sequelize-auto");
const sequelize = require('./sequelize');

const auto = new SequelizeAuto(sequelize, null, null, {
  dialect: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  directory: './models',
  caseModel: 'c',
  caseFile: 'c',
  singularize: false
})

auto.run();