const initModels = require("../../models/init-models");
const sequelize = require('../../sequelize');

const models = initModels(sequelize);

module.exports = models;