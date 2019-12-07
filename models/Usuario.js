const connection = require('../database/database');
const Sequelize = require('sequelize');

const Usuario = connection.define('usuarios', {
    userId: {
        type: Sequelize.INTEGER,
        allowNull: 'false'
    },
    title: {
        type: Sequelize.STRING,
        allowNull: 'false'
    },
    completed: {
        type: Sequelize.BOOLEAN,
        allowNull: 'false'
    }
}, {
    timestamps: false
});

Usuario.sync({force: false});

module.exports = Usuario;