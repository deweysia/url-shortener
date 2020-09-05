// https://bezkoder.com/node-js-express-sequelize-mysql/
const Sequelize = require('sequelize');

const { DB_CONFIG } = require('../config/db.config');
const db = {};

const sequelize = new Sequelize(
    DB_CONFIG.DB_NAME,
    DB_CONFIG.DB_USER,
    DB_CONFIG.DB_PASSWORD,
    {
        host: DB_CONFIG.DB_HOST,
        dialect: 'mysql',
        pool: {
            max: DB_CONFIG.pool.max,
            min: DB_CONFIG.pool.min,
            acquire: DB_CONFIG.pool.acquire,
            idle: DB_CONFIG.pool.idle
        }
    });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// add models here
db.url = require("./models/url.model.js")(sequelize, Sequelize);

module.exports = db;
