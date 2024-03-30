const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const signup = sequelize.define('signup', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: Sequelize.STRING,
    email: {
        type: Sequelize.STRING,
        unique: true
    },

    password: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    }
});

module.exports = signup
